import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './tabs-nav';
import UploadNav from './upload-nav';
import UploadForm from '../screens/login/upload-form-screen';

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
         <Stack.Screen
            name={'Tabs'}
            options={{
               headerShown: false,
            }}
            component={TabsNav}
         />
         <Stack.Screen
            name={'Upload'}
            options={{
               headerShown: false,
            }}
            component={UploadNav}
         />
         <Stack.Screen
            name={'UploadForm'}
            options={{
               headerBackTitleVisible: false,
               headerLeft: ({ tintColor }) => <Ionicons color={tintColor} name='close' size={28} />,
               title: 'Upload',
               headerTintColor: 'white',
               headerStyle: {
                  backgroundColor: 'black',
               },
            }}
            component={UploadForm}
         />
      </Stack.Navigator>
   );
};

export default LoggedInTabNav;
