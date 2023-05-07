import LoggedOutNav from './src/navigators/logged-out-nav.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { useReactiveVar, ApolloProvider } from '@apollo/client';
import client, { isLoggedInVar } from './src/apollo';
import LoggedInNav from './src/navigators/logged-in-nav.navigator';

export default function App() {
   const isLoggedIn = useReactiveVar(isLoggedInVar);

   return (
      <ApolloProvider client={client}>
         <NavigationContainer>{isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}</NavigationContainer>
      </ApolloProvider>
   );
}
