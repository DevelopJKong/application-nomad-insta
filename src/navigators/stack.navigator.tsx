import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/logout/home.page';
import Login from '../pages/logout/login.page';

const Stack = createNativeStackNavigator();

const Stacks = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name='Home' component={Home} />
         <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
   );
};

export default Stacks;
