import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../pages/login/feed.page';
import Search from '../pages/login/search.page';
import Notifications from '../pages/login/notifications.page';
import Profile from '../pages/login/profile.page';
import { View } from 'react-native';
import TabIcon from '../components/nav/tab-icon.component';

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
                  <TabIcon iconName={'home'} color={color} focused={focused} />
               ),
            }}
         />
         <Tabs.Screen
            name={'Search'}
            component={Search}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <TabIcon iconName={'search'} color={color} focused={focused} />
               ),
            }}
         />
         <Tabs.Screen
            name={'Camera'}
            component={View}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <TabIcon iconName={'camera'} color={color} focused={focused} />
               ),
            }}
         />
         <Tabs.Screen
            name={'Notifications'}
            component={Notifications}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <TabIcon iconName={'heart'} color={color} focused={focused} />
               ),
            }}
         />
         <Tabs.Screen
            name={'Profile'}
            component={Profile}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <TabIcon iconName={'person'} color={color} focused={focused} />
               ),
            }}
         />
      </Tabs.Navigator>
   );
};

export default LoggedInNav;
