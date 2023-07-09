import React from 'react';
import * as _ from 'lodash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './tabs-nav.component';
import Upload from '../pages/login/upload.page';

const Stack = createNativeStackNavigator();

const LoggedInTabNav = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            animation: 'fade_from_bottom',
            headerShown: false,
            presentation: 'modal',
         }}
      >
         <Stack.Screen name={'Tabs'} component={TabsNav} />
         <Stack.Screen name={'Upload'} component={Upload} />
      </Stack.Navigator>
   );
};

export default LoggedInTabNav;
