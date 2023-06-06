import { NavigationContainer } from '@react-navigation/native';
import { useReactiveVar, ApolloProvider } from '@apollo/client';
import client, { isLoggedInVar } from './src/apollo';
import LoggedOutNav from './src/navigators/logged-out-nav.navigator';
import LoggedInTabNav from './src/navigators/logged-in-tab-nav.navigator';
import LoggedInStackNav from './src/navigators/logged-in-stack-nav.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

export type NavRootStackParamList = {
   LoggedInTabs?: {
      screen: 'Feed' | 'Search' | 'Notifications' | 'Me' | 'Profile' | 'Photo';
      params?: [value: any];
   };
   LoggedInStacks?: {
      screen: 'Profile' | 'Photo';
      params?: [value: any];
   };
   LoggedOutStacks?: {
      screen: 'Welcome' | 'Home' | 'Login' | 'CreateAccount';
      params?: [value: any];
   };
};

const Nav = createNativeStackNavigator<NavRootStackParamList>();
export default function App() {
   const isLoggedIn = useReactiveVar(isLoggedInVar);

   const loggedOutScreen = [<Nav.Screen key={'LoggedOutStacks'} name={'LoggedOutStacks'} component={LoggedOutNav} />];

   const loggedInScreen = [
      <Nav.Screen key={'LoggedInTabs'} name={'LoggedInTabs'} component={LoggedInTabNav} />,
      <Nav.Screen key={'LoggedInStacks'} name={'LoggedInStacks'} component={LoggedInStackNav} />,
   ];
   return (
      <ApolloProvider client={client}>
         <NavigationContainer>
            <StatusBar barStyle='light-content' />
            <Nav.Navigator
               screenOptions={{
                  headerShown: false,
                  animation: 'fade',
               }}
            >
               {isLoggedIn ? loggedInScreen : loggedOutScreen}
            </Nav.Navigator>
         </NavigationContainer>
      </ApolloProvider>
   );
}
