import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../pages/login/search.page';
import { View } from 'react-native';
import TabIcon from '../components/nav/tab-icon.component';
import LoggedInStackNav from './logged-in-stack-nav.navigator';

const Tabs = createBottomTabNavigator();

const LoggedInTabNav = () => {
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
            name={'TabsFeed'}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <TabIcon iconName={'home'} color={color} focused={focused} />
               ),
            }}
         >
            {() => LoggedInStackNav({ screenName: 'Feed' })}
         </Tabs.Screen>
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
            name={'TabsNotifications'}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <TabIcon iconName={'heart'} color={color} focused={focused} />
               ),
            }}
         >
            {() => LoggedInStackNav({ screenName: 'Notifications' })}
         </Tabs.Screen>

         <Tabs.Screen
            name={'TabsMe'}
            options={{
               tabBarIcon: ({ focused, color, size: _size }) => (
                  <TabIcon iconName={'person'} color={color} focused={focused} />
               ),
            }}
         >
            {() => LoggedInStackNav({ screenName: 'Me' })}
         </Tabs.Screen>
      </Tabs.Navigator>
   );
};

export default LoggedInTabNav;
