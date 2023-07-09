import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../pages/login/search.page';
import { Image, View } from 'react-native';
import TabIcon from '../components/nav/tab-icon.component';
import LoggedInStackNav from './logged-in-stack-nav.navigator';
import useMe from '../hooks/use-me.hook';
import * as _ from 'lodash';

const Tabs = createBottomTabNavigator();

const TabsNav = () => {
   const { data } = useMe();
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
            listeners={({ navigation }) => {
               return {
                  tabPress: (e) => {
                     e.preventDefault();
                     navigation.navigate('Upload');
                  },
               };
            }}
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
               tabBarIcon: ({ focused, color, size: _size }) =>
                  _.isEmpty(data?.me?.avatar) ? (
                     <TabIcon iconName={'person'} color={color} focused={focused} />
                  ) : (
                     <Image
                        source={{ uri: data?.me?.avatar }}
                        style={{
                           height: 20,
                           width: 20,
                           borderRadius: 10,
                           ...(focused && { borderColor: 'white', borderWidth: 1 }),
                        }}
                     />
                  ),
            }}
         >
            {() => LoggedInStackNav({ screenName: 'Me' })}
         </Tabs.Screen>
      </Tabs.Navigator>
   );
};

export default TabsNav;
