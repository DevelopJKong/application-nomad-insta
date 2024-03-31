import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/logout/home-screen';
import Login from '../screens/logout/login-screen';
import CreateAccount from '../screens/logout/create-account-screen';
import Welcome from '../screens/logout/welcome-screen';

const Stack = createNativeStackNavigator();

const LoggedOutNav = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
            animation: 'fade',
         }}
      >
         <Stack.Screen name={'Welcome'} component={Welcome} />
         <Stack.Screen name={'Home'} component={Home} />
         <Stack.Screen name={'Login'} component={Login} />
         <Stack.Screen options={{}} name={'CreateAccount'} component={CreateAccount} />
      </Stack.Navigator>
   );
};

export default LoggedOutNav;
