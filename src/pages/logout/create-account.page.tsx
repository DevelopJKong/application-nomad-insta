import React, { useRef } from 'react';
import AuthLayout from '../../components/auth/auth-layout.component';
import AuthButton from '../../components/auth/auth-button.component';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const Input = styled.TextInput`
   background-color: white;
   width: 100%;
`;

const AvoidingView = styled.KeyboardAvoidingView`
   width: 100%;
`;

const CreateAccount = () => {
   const lastNameRef: React.MutableRefObject<any> = useRef();
   const usernameRef: React.MutableRefObject<any> = useRef();
   const emailRef: React.MutableRefObject<any> = useRef();
   const passwordRef: React.MutableRefObject<any> = useRef();

   const onNext = (nextOne: React.MutableRefObject<any>) => {
      nextOne?.current?.focus();
   };

   const onDone = () => {
      alert('done!');
   };
   return (
      <AuthLayout>
         <AvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 0}>
            <Input
               placeholder='First Name'
               placeholderTextColor='gray'
               returnKeyType='next'
               onSubmitEditing={() => onNext(lastNameRef)}
            />
            <Input
               ref={lastNameRef}
               placeholder='Last Name'
               placeholderTextColor='gray'
               returnKeyType='next'
               onSubmitEditing={() => onNext(usernameRef)}
            />
            <Input
               ref={usernameRef}
               placeholder='Username'
               placeholderTextColor='gray'
               returnKeyType='next'
               onSubmitEditing={() => onNext(emailRef)}
            />
            <Input
               ref={emailRef}
               placeholder='Email'
               placeholderTextColor='gray'
               keyboardType='email-address'
               returnKeyType='next'
               onSubmitEditing={() => onNext(passwordRef)}
            />
            <Input
               ref={passwordRef}
               placeholder='Password'
               placeholderTextColor='gray'
               secureTextEntry
               returnKeyType='done'
               onSubmitEditing={onDone}
            />
            <AuthButton text={'Create Account'} disabled={false} onPress={() => null} />
         </AvoidingView>
      </AuthLayout>
   );
};

export default CreateAccount;
