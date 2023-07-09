import React from 'react';
import * as _ from 'lodash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './tabs-nav.navigator';
import UploadNav from './upload-nav.navigator';

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
         <Stack.Screen name={'Upload'} component={UploadNav} />
      </Stack.Navigator>
   );
};

export default LoggedInTabNav;
