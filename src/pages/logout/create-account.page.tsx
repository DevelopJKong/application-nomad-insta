import React from 'react';
import AuthLayout from '../../components/auth/auth-layout.component';
import AuthButton from '../../components/auth/auth-button.component';
import styled from 'styled-components/native';

const Input = styled.TextInput`
   background-color: white;
   width: 100%;
`;

const CreateAccount = () => {
   return (
      <AuthLayout>
         <Input placeholder='First Name' placeholderTextColor='gray' returnKeyType='next' />
         <Input placeholder='Last Name' placeholderTextColor='gray' returnKeyType='next' />
         <Input placeholder='Username' placeholderTextColor='gray' returnKeyType='next' />
         <Input placeholder='Email' placeholderTextColor='gray' keyboardType='email-address' returnKeyType='next' />
         <Input placeholder='Password' placeholderTextColor='gray' secureTextEntry returnKeyType='done' />
         <AuthButton text={'Create Account'} disabled={true} onPress={() => null} />
      </AuthLayout>
   );
};

export default CreateAccount;
