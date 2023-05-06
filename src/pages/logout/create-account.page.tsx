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

   useEffect(() => {
      register('firstName');
      register('lastName');
      register('username');
      register('email');
      register('password');
   }, [register]);
   return (
      <AuthLayout>
         <AuthScrollView>
            <Input placeholder='First Name' returnKeyType='next' onSubmitEditing={() => onNext(lastNameRef)} />
            <Input
               ref={lastNameRef}
               placeholder='Last Name'
               returnKeyType='next'
               onSubmitEditing={() => onNext(usernameRef)}
            />
            <Input
               ref={usernameRef}
               placeholder='Username'
               returnKeyType='next'
               onSubmitEditing={() => onNext(emailRef)}
            />
            <Input
               ref={emailRef}
               placeholder='Email'
               keyboardType='email-address'
               returnKeyType='next'
               onSubmitEditing={() => onNext(passwordRef)}
            />
            <Input
               ref={passwordRef}
               placeholder='Password'
               secureTextEntry
               returnKeyType='done'
               onSubmitEditing={onDone}
               $lastOne={true}
            />
            <AuthButton text={'Create Account'} disabled={false} onPress={() => null} />
         </AuthScrollView>
      </AuthLayout>
   );
};

export default CreateAccount;
