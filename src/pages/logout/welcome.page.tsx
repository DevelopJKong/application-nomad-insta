import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../styled';

const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
   background-color: black;
   font-size: 22px;
`;

const Logo = styled.Image`
   max-width: 50%;
   height: 100px;
`;

const CreateAccount = styled.View`
   background-color: #0095f6;
   padding: 10px 7px;
   border-radius: 3px;
`;

const CreateAccountText = styled.Text`
   color: white;
   font-weight: 600;
`;

const LoginLink = styled.Text`
   color: ${colors.blue};
   margin-top: 10px;
`;

const Welcome = ({ navigation }: any) => {
   const goToCreateAccount = () => navigation.navigate('CreateAccount');
   const goToLogin = () => navigation.navigate('Login');
   return (
      <Container>
         <Logo resizeMode={'center'} source={require('../../../assets/logo.png')} />
         <TouchableOpacity onPress={goToCreateAccount}>
            <CreateAccount>
               <CreateAccountText>Create Account</CreateAccountText>
            </CreateAccount>
         </TouchableOpacity>
         <TouchableOpacity onPress={goToLogin}>
            <LoginLink>Log in</LoginLink>
         </TouchableOpacity>
      </Container>
   );
};

export default Welcome;
