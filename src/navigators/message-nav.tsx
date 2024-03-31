import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RoomsScreen from '../screens/login/rooms-screen';
import RoomScreen from '../screens/login/room-screen';

const Stack = createNativeStackNavigator();

const MessageNav = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name='Rooms' component={RoomsScreen} />
         <Stack.Screen name='Room' component={RoomScreen} />
      </Stack.Navigator>
   );
};

export default MessageNav;
