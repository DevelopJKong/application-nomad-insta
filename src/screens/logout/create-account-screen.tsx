import React, { useEffect, useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
import AuthLayout from '../../components/auth/auth-layout';
import AuthButton from '../../components/auth/auth-button';
import styled from 'styled-components/native';
import { Input } from '../../components/auth/auth-shared';
import { useForm } from 'react-hook-form';
import { createUserMutation, createUserMutationVariables } from '../../__generated__/createUserMutation';

interface IForm {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   result?: string;
}

const AuthScrollView = styled.ScrollView.attrs((_props) => {
   return {
      contentContainerStyle: {
         justifyContent: 'center',
         alignItems: 'center',
      },
   };
})`
   width: 100%;
`;

const CREATE_USER_MUTATION = gql`
   mutation createUserMutation($createUserInput: CreateUserInput!) {
      createUser(input: $createUserInput) {
         ok
         error
      }
   }
`;

const CreateAccount = ({ navigation }: any) => {
   const { register, handleSubmit, setValue, getValues, watch } = useForm<IForm>();
   const lastNameRef: React.MutableRefObject<any> = useRef(null);
   const emailRef: React.MutableRefObject<any> = useRef(null);
   const passwordRef: React.MutableRefObject<any> = useRef(null);

   const onCompleted = (data: createUserMutation) => {
      const {
         createUser: { ok },
      } = data;

      const { email, password } = getValues();
      if (ok) {
         navigation.navigate('Login', {
            email,
            password,
         });
      }
   };

   const [createUserMutation, { loading }] = useMutation<createUserMutation, createUserMutationVariables>(
      CREATE_USER_MUTATION,
      {
         onCompleted,
      },
   );

   const onValid = async (data: IForm) => {
      if (loading) return;

      await createUserMutation({
         variables: {
            createUserInput: {
               ...data,
            },
         },
      });
   };

   const onNext = (nextOne: React.MutableRefObject<any>) => {
      nextOne?.current?.focus();
   };

   useEffect(() => {
      register('firstName', {
         required: {
            value: true,
            message: 'First name is required',
         },
      });
      register('lastName', {
         required: {
            value: true,
            message: 'Last name is required',
         },
      });

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
         <AuthScrollView>
            <Input
               placeholder='First Name'
               returnKeyType='next'
               onSubmitEditing={() => onNext(lastNameRef)}
               onChangeText={(text: string) => setValue('firstName', text)}
            />
            <Input
               ref={lastNameRef}
               placeholder='Last Name'
               returnKeyType='next'
               onSubmitEditing={() => onNext(emailRef)}
               onChangeText={(text: string) => setValue('lastName', text)}
            />

            <Input
               ref={emailRef}
               placeholder='Email'
               keyboardType='email-address'
               returnKeyType='next'
               onSubmitEditing={() => onNext(passwordRef)}
               onChangeText={(text: string) => setValue('email', text)}
            />
            <Input
               ref={passwordRef}
               placeholder='Password'
               secureTextEntry
               returnKeyType='done'
               onChangeText={(text: string) => setValue('password', text)}
               onSubmitEditing={handleSubmit(onValid)}
               $lastOne={true}
            />
            <AuthButton
               text={'Create Account'}
               disabled={!watch('firstName') || !watch('lastName') || !watch('email') || !watch('password')}
               loading={loading}
               onPress={handleSubmit(onValid)}
            />
         </AuthScrollView>
      </AuthLayout>
   );
};

export default CreateAccount;
