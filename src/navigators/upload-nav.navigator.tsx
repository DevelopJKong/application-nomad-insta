import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelectPhoto from '../pages/login/select-photo.page';
import TakePhoto from '../pages/login/take-photo.page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const UploadNav = () => {
   const navigation = useNavigation();
   return (
      <Tab.Navigator
         tabBarPosition='bottom'
         screenOptions={{
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: 'white',
            animationEnabled: false,
         }}
      >
         <Tab.Screen name='Select'>
            {() => (
               <Stack.Navigator
                  screenOptions={{
                     headerTintColor: 'white',
                     headerBackTitleVisible: false,
                     headerLeft: ({ tintColor }) => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                           <Ionicons color={tintColor} name='close' size={28} />
                        </TouchableOpacity>
                     ),
                     // headerRight: ({ tintColor }) => (
                     //    <TouchableOpacity onPress={() => alert('준비중입니다.')}>
                     //       <AntDesign color={tintColor} name='right' size={28} />
                     //    </TouchableOpacity>
                     // ),
                     headerStyle: {
                        backgroundColor: 'black',
                     },
                  }}
               >
                  <Stack.Screen
                     name='SelectPhoto'
                     component={SelectPhoto}
                     options={{
                        title: 'Choose a photo',
                     }}
                  />
               </Stack.Navigator>
            )}
         </Tab.Screen>
         <Tab.Screen name='Take' component={TakePhoto}></Tab.Screen>
      </Tab.Navigator>
   );
};

export default UploadNav;
