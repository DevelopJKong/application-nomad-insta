import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stacks from './stack.navigator';

const Nav = createNativeStackNavigator();
const Root = () => {
   return (
      <Nav.Navigator>
         <Nav.Screen key={'Stack'} name={'Stack'} component={Stacks} />
      </Nav.Navigator>
   );
};

export default Root;
