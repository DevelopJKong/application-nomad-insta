import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLoggedInVar = makeVar(false);

export const logUserIn = async (token: string) => {
   await AsyncStorage.multiSet([
      ['token', JSON.stringify(token)],
      ['loggedIn', JSON.stringify('yes')],
   ]);
   isLoggedInVar(true);
};

const client = new ApolloClient({
   uri: 'https://bee9-116-93-227-7.ngrok-free.app/graphql',
   cache: new InMemoryCache(),
});
export default client;
