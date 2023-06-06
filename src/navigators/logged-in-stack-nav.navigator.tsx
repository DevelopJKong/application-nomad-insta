import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../pages/login/profile.page';
import Photo from '../pages/login/photo.page';

const Stack = createNativeStackNavigator();

const LoggedInStackNav = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
            animation: 'fade',
         }}
      >
         <Stack.Screen name={'Profile'} component={Profile} />
         <Stack.Screen name={'Photo'} component={Photo} />
      </Stack.Navigator>
   );
};

export default LoggedInStackNav;
