import AuthLayout from '../../components/auth/auth-layout';
import { Input } from '../../components/auth/auth-shared';
import AuthButton from '../../components/auth/auth-button';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components/native';
import { gql, useMutation } from '@apollo/client';
import { logUserIn } from '../../apollo';
import * as SecureStore from 'expo-secure-store';
import { LoginMutationMutation, LoginMutationMutationVariables } from '../../gql/graphql';

interface IForm {
   email: string;
   password: string;
   result?: string;
}

const ErrorBox = styled.View`
   width: 100%;
`;

const ErrorText = styled.Text`
   color: red;
   margin-bottom: 10px;
`;

export const LOGIN_MUTATION = gql`
   mutation loginMutation($loginInput: LoginInput!) {
      login(input: $loginInput) {
         ok
         error
         token
      }
   }
`;

const Login = ({ route: { params } }: any) => {
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
      clearErrors,
      watch,
   } = useForm<IForm>({
      defaultValues: {
         email: params?.email,
         password: params?.password,
      },
   });

   const passwordRef: React.MutableRefObject<any> = useRef(null);

   const onCompleted = async (data: LoginMutationMutation) => {
      const {
         login: { ok, token },
      } = data;
      if (ok && token) {
         await logUserIn(token, 'yes');
      }
   };

   const [loginMutation, { loading }] = useMutation<LoginMutationMutation, LoginMutationMutationVariables>(
      LOGIN_MUTATION,
      {
         onCompleted,
      },
   );

   const onNext = (nextOne: React.MutableRefObject<any>) => {
      nextOne?.current?.focus();
   };

   const onValid = async ({ email, password }: IForm) => {
      if (loading) return;

      await loginMutation({
         variables: {
            loginInput: {
               email,
               password,
            },
         },
      });

      try {
         await SecureStore.setItemAsync('id', email);
         await SecureStore.setItemAsync('pw', password);
      } catch (ignored) {
         /* empty */
      }
   };

   useEffect(() => {
      register('email', {
         required: {
            value: true,
            message: 'Email is required',
         },
      });
      register('password', {
         required: {
            value: true,
            message: 'Password is required',
         },
      });
   }, [register]);

   return (
      <AuthLayout>
         <Input
            value={watch('email')}
            placeholder='Email'
            returnKeyType='next'
            autoCapitalize={'none'}
            onSubmitEditing={() => onNext(passwordRef)}
            onChangeText={(text: string) => {
               setValue('email', text);
               clearErrors('email');
            }}
         />
         {errors?.email?.message && (
            <ErrorBox>
               <ErrorText>{errors?.email?.message}</ErrorText>
            </ErrorBox>
         )}
         <Input
            value={watch('password')}
            ref={passwordRef}
            placeholder='Password'
            returnKeyType='done'
            secureTextEntry
            onChangeText={(text: string) => {
               setValue('password', text);
               clearErrors('password');
            }}
            onSubmitEditing={handleSubmit(onValid)}
         />
         {errors?.password?.message && (
            <ErrorBox>
               <ErrorText>{errors?.password?.message}</ErrorText>
            </ErrorBox>
         )}
         <AuthButton
            text={'Login'}
            loading={loading}
            disabled={!watch('email') || !watch('password')}
            onPress={handleSubmit(onValid)}
         />
      </AuthLayout>
   );
};

export default Login;
