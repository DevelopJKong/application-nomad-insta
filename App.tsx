import React from 'react';
import Stacks from './src/navigators/stack.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
   return (
      <NavigationContainer>
         <StatusBar style='light' />
         <Stacks />
      </NavigationContainer>
   );
}
