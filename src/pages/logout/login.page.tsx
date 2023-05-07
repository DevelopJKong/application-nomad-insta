import AuthLayout from '../../components/auth/auth-layout.component';
import { Input } from '../../components/auth/auth-shared.component';
import AuthButton from '../../components/auth/auth-button.component';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components/native';
import { gql, useMutation } from '@apollo/client';
import { loginMutation, loginMutationVariables } from '../../__generated__/loginMutation';
import { isLoggedInVar } from '../../apollo';

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

const LOGIN_MUTATION = gql`
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

   const onCompleted = (data: loginMutation) => {
      const {
         login: { ok },
      } = data;
      if (ok) {
         isLoggedInVar(true);
      }
   };

   const [loginMutation, { loading }] = useMutation<loginMutation, loginMutationVariables>(LOGIN_MUTATION, {
      onCompleted,
   });

   const onNext = (nextOne: React.MutableRefObject<any>) => {
      nextOne?.current?.focus();
   };

   const onValid = async ({ email, password }: IForm) => {
      if (loading) {
         return;
      }

      loginMutation({
         variables: {
            loginInput: {
               email,
               password,
            },
         },
      });
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
            onChangeText={(text) => {
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
            onChangeText={(text) => {
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
