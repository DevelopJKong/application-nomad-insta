import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Nav = createNativeStackNavigator();
const Root = () => {
   return (
      <Nav.Navigator>
         <Nav.Screen />
      </Nav.Navigator>
   );
};

export default Root;
