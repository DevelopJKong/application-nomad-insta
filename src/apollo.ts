import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
   uri: 'https://bee9-116-93-227-7.ngrok-free.app/graphql',
   cache: new InMemoryCache(),
});
export default client;
