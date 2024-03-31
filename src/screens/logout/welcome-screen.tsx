import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../styled';
import AuthLayout from '../../components/auth/auth-layout';
import AuthButton from '../../components/auth/auth-button';
import { gql, useMutation, useQuery } from '@apollo/client';
import { logUserIn } from '../../apollo';
import { loginMutation, loginMutationVariables } from '../../__generated__/loginMutation';
import { LOGIN_MUTATION } from './login-screen';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_KEY } from '../../common/constants/global-constant';

const LoginLink = styled.Text`
   color: ${colors.blue};
   font-weight: 600;
   margin-top: 20px;
`;

const Welcome = ({ navigation }: any) => {
   const HEALTH_CHECK = gql`
      query healthCheck {
         hi {
            ok
         }
      }
   `;
   useQuery(HEALTH_CHECK);
   const goToCreateAccount = () => navigation.navigate('CreateAccount');
   const goToLogin = () => navigation.navigate('Login');

   const onCompleted = async (data: loginMutation) => {
      const {
         login: { ok, token },
      } = data;
      if (ok && token) {
         await logUserIn(token, 'yes');
      }
   };

   const [loginMutation, { loading }] = useMutation<loginMutation, loginMutationVariables>(LOGIN_MUTATION, {
      onCompleted,
   });

   useLayoutEffect(() => {
      console.log('here');
      async function autoLogin() {
         try {
            const id = await SecureStore.getItemAsync('id');
            const pw = await SecureStore.getItemAsync('pw');
            console.log('id', id);
            console.log('pw', pw);
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
      <AuthLayout>
         <AuthButton disabled={false} onPress={goToCreateAccount} text={'Create Account'} />
         <TouchableOpacity onPress={goToLogin}>
            <LoginLink>Log in</LoginLink>
         </TouchableOpacity>
      </AuthLayout>
   );
};

export default Welcome;
