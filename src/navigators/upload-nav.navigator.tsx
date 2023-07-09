import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelectPhoto from '../pages/login/select-photo.page';
import TakePhoto from '../pages/login/take-photo.page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const UploadNav = () => {
   return (
      <Tab.Navigator
         tabBarPosition='bottom'
         screenOptions={{
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: 'white',
         }}
      >
         <Tab.Screen name='Select'>
            {() => (
               <Stack.Navigator>
                  <Stack.Screen name='SelectPhoto' component={SelectPhoto}></Stack.Screen>
               </Stack.Navigator>
            )}
         </Tab.Screen>
         <Tab.Screen name='Take' component={TakePhoto}></Tab.Screen>
      </Tab.Navigator>
   );
};

export default UploadNav;
