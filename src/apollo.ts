import { Photo, SeeFeedOutput } from './gql/graphql';
import { ApolloClient, InMemoryCache, makeVar, split } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import _ from 'lodash';
import { createUploadLink } from 'apollo-upload-client';
import { BACKEND_URL } from './common/constants/global-constant';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar('');

export const logUserIn = async (token: string, success: 'yes' | 'no') => {
   await AsyncStorage.multiSet([
      ['token', JSON.stringify(token)],
      ['loggedIn', JSON.stringify(success)],
   ]);
   isLoggedInVar(success === 'yes');
   tokenVar(success === 'yes' ? token.replace(/"/g, '') : '');
};

// const httpLink = createHttpLink({
//    uri: `http://localhost:8000/graphql`,
// });

const customFetch = async (uri: any, options: any) => {
   return await fetch(uri, options).then((response) => {
      if (response.status >= 500) {
         // or handle 400 errors
         return Promise.reject(response.status);
      }
      return response;
   });
};

const wsLink = new WebSocketLink({
   uri: `ws://${BACKEND_URL}:8000/graphql`,
   options: {
      reconnect: true,
      connectionParams: {
         'x-jwt': tokenVar() || '',
      },
   },
});

const uploadHttpLink = createUploadLink({
   uri: `http://${BACKEND_URL}:8000/graphql`,
   fetch: customFetch,
});

const authLink = setContext((_, { headers }) => {
   return {
      headers: {
         ...headers,
         'x-jwt': tokenVar() || '',
      },
   };
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors) {
      console.log('graphQLErrors', graphQLErrors);
   }
   if (networkError) {
      console.log('networkError', networkError);
   }
});

export const cache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            seeFeed: {
               keyArgs: false,
               merge(existing: SeeFeedOutput, incoming: SeeFeedOutput) {
                  if (existing && incoming && !_.isEqual(existing, incoming)) {
                     const photos = [
                        ...(!_.isEmpty(existing?.photos as Photo[]) ? (existing.photos as Photo[]) : []),
                        ...(!_.isEmpty(incoming?.photos as Photo[]) ? (incoming.photos as Photo[]) : []),
                     ];

                     return {
                        ...existing,
                        photos,
                     };
                  }
                  return incoming;
               },
            },
         },
      },
   },
});

const httpLinks = authLink.concat(onErrorLink).concat(uploadHttpLink);

const splitLink = split(
   ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
   },
   wsLink,
   httpLinks,
);

const client = new ApolloClient({
   link: splitLink,
   cache,
});
export default client;
// ! react-native 에서 테스트를 할때 ngrok 을 사용하면 된다.
// https://bee9-116-93-227-7.ngrok-free.app/graphql

// merge(existing: ISeeFeed, incoming: ISeeFeed) {
//    let photos: ISeeFeedPhotos[] = [];
//    if (existing?.photos) {
//       photos = photos.concat(existing.photos);
//    }
//    if (incoming?.photos) {
//       photos = photos.concat(incoming.photos);
//    }
//    return {
//       ...incoming,
//       photos,
//    };
// },
