import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../pages/login/feed.page';
import Search from '../pages/login/search.page';
import Notifications from '../pages/login/notifications.page';
import Profile from '../pages/login/profile.page';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const LoggedInNav = () => {
   return (
      <Tabs.Navigator
         screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: 'black', borderTopColor: 'rgba(255,255,255,0.5)' },
            tabBarActiveTintColor: 'white',
         }}
      >
         <Tabs.Screen
            name={'Feed'}
            component={Feed}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <Ionicons name='home' color={color} size={focused ? 22 : 20} />
               ),
            }}
         />
         <Tabs.Screen
            name={'Search'}
            component={Search}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <Ionicons name='search' color={color} size={focused ? 22 : 20} />
               ),
            }}
         />
         <Tabs.Screen
            name={'Notifications'}
            component={Notifications}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <Ionicons name='heart-outline' color={color} size={focused ? 22 : 20} />
               ),
            }}
         />
         <Tabs.Screen
            name={'Profile'}
            component={Profile}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <Ionicons name='person-outline' color={color} size={focused ? 22 : 20} />
               ),
            }}
         />
      </Tabs.Navigator>
   );
};

export default LoggedInNav;
