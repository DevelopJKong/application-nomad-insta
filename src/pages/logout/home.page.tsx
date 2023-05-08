import { View, Text, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useMutation } from '@apollo/client';
import { loginMutation, loginMutationVariables } from '../../__generated__/loginMutation';
import { logUserIn } from '../../apollo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_MUTATION } from './login.page';

const Home = ({ navigation }: any) => {
   const onCompleted = async (data: loginMutation) => {
      const {
         login: { ok, token },
      } = data;
      if (ok && token) {
         await logUserIn(token);
      }
   };

   const [loginMutation, { loading }] = useMutation<loginMutation, loginMutationVariables>(LOGIN_MUTATION, {
      onCompleted,
   });

   useLayoutEffect(() => {
      async function autoLogin() {
         try {
            const id = await SecureStore.getItemAsync('id');
            const pw = await SecureStore.getItemAsync('pw');
            if (loading) return;
            if (id && pw) {
               await loginMutation({
                  variables: {
                     loginInput: {
                        email: id,
                        password: pw,
                     },
                  },
               });
               await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify({ id, pw }));
            } else {
               throw new Error('로그인 실패');
            }
         } catch (error) {
            try {
               await SecureStore.deleteItemAsync('id');
               await SecureStore.deleteItemAsync('pw');
            } catch (ignored) {
               /* empty */
            }
         }
      }
      autoLogin();
   }, []);

   return (
      <View>
         <Text>Welcome</Text>
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View>
               <Text>Go to Create Account</Text>
            </View>
         </TouchableOpacity>
      </View>
   );
};

export default Home;
