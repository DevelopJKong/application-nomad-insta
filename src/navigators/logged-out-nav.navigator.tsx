import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/logout/home.page';
import Login from '../pages/logout/login.page';
import CreateAccount from '../pages/logout/create-account.page';
import Welcome from '../pages/logout/welcome.page';

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
