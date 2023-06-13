import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar('');

export const logUserIn = async (token: string, success: 'yes' | 'no') => {
   await AsyncStorage.multiSet([
      ['token', JSON.stringify(token)],
      ['loggedIn', JSON.stringify(success)],
   ]);
   isLoggedInVar(success === 'yes');
   tokenVar(success === 'yes' ? token : '');
};

const httpLink = createHttpLink({
   uri: 'http://172.30.1.51:5000/graphql',
});

const authLink = setContext((_, { headers }) => {
   return {
      headers: {
         ...headers,
         'x-jwt': tokenVar() || '',
      },
   };
});

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache(),
});
export default client;
// ! react-native 에서 테스트를 할때 ngrok 을 사용하면 된다.
// https://bee9-116-93-227-7.ngrok-free.app/graphql
