import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Profile from '../pages/login/profile.page';
import Photo from '../pages/login/photo.page';
import Feed from '../pages/login/feed.page';
import Search from '../pages/login/search.page';
import Notifications from '../pages/login/notifications.page';
import Me from '../pages/login/me.page';
import { NavRootStackParamList } from '../../App';

interface ILoggedInStackNav {
   screenName?: string;
}

export type NavigationType = NativeStackNavigationProp<NavRootStackParamList, 'LoggedInStacks', 'Profile'>;

const Stack = createNativeStackNavigator();

const LoggedInStackNav = ({ screenName }: ILoggedInStackNav) => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
            animation: 'fade',
         }}
      >
         {screenName === 'Feed' ? <Stack.Screen name={'Feed'} component={Feed} /> : null}
         {screenName === 'Search' ? <Stack.Screen name={'Search'} component={Search} /> : null}
         {screenName === 'Notifications' ? <Stack.Screen name={'Notifications'} component={Notifications} /> : null}
         {screenName === 'Me' ? <Stack.Screen name={'Me'} component={Me} /> : null}
         <Stack.Screen name={'Profile'} component={Profile} />
         <Stack.Screen name={'Photo'} component={Photo} />
      </Stack.Navigator>
   );
};

export default LoggedInStackNav;
