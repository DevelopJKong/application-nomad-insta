import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoggedOutNav from './logged-out-nav.navigator';

const Nav = createNativeStackNavigator();
const Root = () => {
   return (
      <Nav.Navigator>
         <Nav.Screen key={'Stack'} name={'Stack'} component={LoggedOutNav} />
      </Nav.Navigator>
   );
};

export default Root;
