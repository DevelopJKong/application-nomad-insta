import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/login/profile.screen';
import Photo from '../screens/login/photo.screen';
import Feed from '../screens/login/feed.screen';
import Search from '../screens/login/search.screen';
import Notifications from '../screens/login/notifications.screen';
import Me from '../screens/login/me.screen';
import Likes from '../screens/login/likes.screen';
import Comments from '../screens/login/comments.screen';

interface ILoggedInStackNav {
   screenName?: string;
}

type RootStackParamList = {
   Search: undefined;
   Feed: undefined;
   Profile: { username: string };
   Notifications: undefined;
   Me: undefined;
   Photo: {
      photoId: number;
   };
   Likes: undefined;
   Comments: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
         <Stack.Screen name={'Likes'} component={Likes} />
         <Stack.Screen name={'Comments'} component={Comments} />
      </Stack.Navigator>
   );
};

export default LoggedInStackNav;
