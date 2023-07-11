import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';
import * as _ from 'lodash';
import { seeFeed_seeFeed as ISeeFeed, seeFeed_seeFeed_photos as ISeeFeedPhotos } from './__generated__/seeFeed';

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

const httpLink = createHttpLink({
   uri: `http://172.30.1.71:8000/graphql`,
});

const authLink = setContext((_, { headers }) => {
   return {
      headers: {
         ...headers,
         'x-jwt': tokenVar() || '',
      },
   };
});
export const cache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            seeFeed: {
               keyArgs: false,
               merge(existing: ISeeFeed, incoming: ISeeFeed) {
                  if (existing && incoming && !_.isEqual(existing, incoming)) {
                     const photos = [
                        ...(!_.isEmpty(existing?.photos as ISeeFeedPhotos[])
                           ? (existing.photos as ISeeFeedPhotos[])
                           : []),
                        ...(!_.isEmpty(incoming?.photos as ISeeFeedPhotos[])
                           ? (incoming.photos as ISeeFeedPhotos[])
                           : []),
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

const client = new ApolloClient({
   link: authLink.concat(httpLink),
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
