import React from 'react';
import styled from 'styled-components/native';
import { Keyboard, Platform } from 'react-native';

interface IAuthLayout {
   children: React.ReactNode;
}

const ContainerWrapper = styled.TouchableWithoutFeedback`
   flex: 1;
`;

const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
   background-color: black;
   padding: 0 45px;
`;

const Logo = styled.Image`
   max-width: 50%;
   width: 100%;
   height: 100px;
   margin-top: 120px;
   margin-bottom: 20px;
`;

const AuthLayout = ({ children }: IAuthLayout) => {
   const dismissKeyboard = () => {
      Keyboard.dismiss();
   };
   return (
      <ContainerWrapper onPress={dismissKeyboard} disabled={Platform.OS === 'web'}>
         <Container>
            <Logo resizeMode={'center'} source={require('../../../assets/logo.png')} />
            {children}
         </Container>
      </ContainerWrapper>
   );
};

export default AuthLayout;
