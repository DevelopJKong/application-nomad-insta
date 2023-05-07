import React, { useEffect, useRef } from 'react';
import AuthLayout from '../../components/auth/auth-layout.component';
import AuthButton from '../../components/auth/auth-button.component';
import styled from 'styled-components/native';
import { Input } from '../../components/auth/auth-shared.component';
import { useForm } from 'react-hook-form';

interface IForm {
   firstName: string;
   lastName: string;
   username: string;
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

const CreateAccount = () => {
   const { register, handleSubmit, setValue } = useForm<IForm>();
   const lastNameRef: React.MutableRefObject<any> = useRef(null);
   const usernameRef: React.MutableRefObject<any> = useRef(null);
   const emailRef: React.MutableRefObject<any> = useRef(null);
   const passwordRef: React.MutableRefObject<any> = useRef(null);

   const onNext = (nextOne: React.MutableRefObject<any>) => {
      nextOne?.current?.focus();
   };

   const onDone = () => {
      alert('done!');
   };

   const onSubmit = (data: IForm) => {
      console.log(data);
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
      register('username', {
         required: {
            value: true,
            message: 'Username is required',
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
               onChangeText={(text) => setValue('firstName', text)}
            />
            <Input
               ref={lastNameRef}
               placeholder='Last Name'
               returnKeyType='next'
               onSubmitEditing={() => onNext(usernameRef)}
               onChangeText={(text) => setValue('lastName', text)}
            />
            <Input
               ref={usernameRef}
               placeholder='Username'
               returnKeyType='next'
               onSubmitEditing={() => onNext(emailRef)}
               onChangeText={(text) => setValue('username', text)}
            />
            <Input
               ref={emailRef}
               placeholder='Email'
               keyboardType='email-address'
               returnKeyType='next'
               onSubmitEditing={() => onNext(passwordRef)}
               onChangeText={(text) => setValue('email', text)}
            />
            <Input
               ref={passwordRef}
               placeholder='Password'
               secureTextEntry
               returnKeyType='done'
               onSubmitEditing={handleSubmit(onSubmit)}
               $lastOne={true}
            />
            <AuthButton text={'Create Account'} disabled={false} onPress={handleSubmit(onSubmit)} />
         </AuthScrollView>
      </AuthLayout>
   );
};

export default CreateAccount;
