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
   padding: 0px 40px;
`;

const Logo = styled.Image`
   max-width: 50%;
   height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
   background-color: ${colors.blue};
   padding: 7px 10px;
   margin-top: 10px;
   border-radius: 3px;
   width: 100%;
   opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

const CreateAccountText = styled.Text`
   color: white;
   font-weight: 600;
   text-align: center;
`;

const LoginLink = styled.Text`
   color: ${colors.blue};
   font-weight: 600;
   margin-top: 20px;
`;

const Welcome = ({ navigation }: any) => {
   const goToCreateAccount = () => navigation.navigate('CreateAccount');
   const goToLogin = () => navigation.navigate('Login');
   const trueCondition = true;
   const hello = trueCondition ? 'hello' : 'bye';
   console.log(hello);
   return (
      <Container>
         <Logo resizeMode={'center'} source={require('../../../assets/logo.png')} />
         <CreateAccount disabled={false} onPress={goToCreateAccount}>
            <CreateAccountText>Create Account</CreateAccountText>
         </CreateAccount>
         <TouchableOpacity onPress={goToLogin}>
            <LoginLink>Log in</LoginLink>
         </TouchableOpacity>
      </Container>
   );
};

export default Welcome;
