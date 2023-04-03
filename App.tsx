import React from 'react';
import Stacks from './src/navigators/stack.navigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
   return (
      <NavigationContainer>
         <Stacks />
      </NavigationContainer>
   );
}
