import { NavigationContainer } from '@react-navigation/native';
import { useReactiveVar, ApolloProvider } from '@apollo/client';
import client, { isLoggedInVar, cache } from './src/apollo';
import LoggedOutNav from './src/navigators/logged-out-nav.navigator';
import LoggedInTabNav from './src/navigators/logged-in-tab-nav.navigator';
import LoggedInStackNav from './src/navigators/logged-in-stack-nav.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { AsyncStorageWrapper, CachePersistor } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

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

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Nav = createNativeStackNavigator<NavRootStackParamList>();
export default function App() {
   const [appIsReady, setAppIsReady] = useState(false);

   const isLoggedIn = useReactiveVar(isLoggedInVar);

   const loggedOutScreen = [<Nav.Screen key={'LoggedOutStacks'} name={'LoggedOutStacks'} component={LoggedOutNav} />];

   const loggedInScreen = [
      <Nav.Screen key={'LoggedInTabs'} name={'LoggedInTabs'} component={LoggedInTabNav} />,
      <Nav.Screen key={'LoggedInStacks'} name={'LoggedInStacks'} component={LoggedInStackNav} />,
   ];

   useEffect(() => {
      async function prepare() {
         try {
            // Preload fonts, make any API calls you need to do here
            await Font.loadAsync(Entypo.font);
            const persistor = new CachePersistor({
               cache,
               storage: new AsyncStorageWrapper(AsyncStorage),
            });

            await persistor.purge();
            // Artificially delay for two seconds to simulate a slow loading
            // experience. Please remove this if you copy and paste the code!
            await new Promise((resolve) => setTimeout(resolve, 2000));
         } catch (e) {
            console.warn(e);
         } finally {
            // Tell the application to render
            setAppIsReady(true);
            await SplashScreen.hideAsync();
         }
      }

      prepare();
   }, []);

   if (!appIsReady) {
      return null;
   }

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
