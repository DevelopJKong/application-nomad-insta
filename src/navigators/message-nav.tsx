import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RoomsScreen from '../screens/login/rooms-screen';
import RoomScreen from '../screens/login/room-screen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const MessageNav = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            headerStyle: {
               backgroundColor: 'black',
            },
            headerLeft: ({ tintColor }) => <Ionicons color={tintColor} name='chevron-down' size={28} />,
         }}
      >
         <Stack.Screen name='Rooms' component={RoomsScreen} />
         <Stack.Screen name='Room' component={RoomScreen} />
      </Stack.Navigator>
   );
};

export default MessageNav;
