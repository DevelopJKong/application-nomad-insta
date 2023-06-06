import { logUserIn } from '../apollo';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_KEY } from '../common/constants/global.constant';

const useLogout = () => {
   const logout = async () => {
      await Promise.all([
         AsyncStorage.removeItem(LOGIN_KEY),
         SecureStore.deleteItemAsync('id'),
         SecureStore.deleteItemAsync('pw'),
         logUserIn('', 'no'),
      ]);
   };
   return { logout };
};

export default useLogout;
