import React from 'react';
import styled from 'styled-components/native';

interface IAuthLayout {
   children: React.ReactNode;
}

const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
   background-color: black;
   padding: 0px 45px;
`;

const Logo = styled.Image`
   max-width: 50%;
   width: 100%;
   height: 100px;
   margin-bottom: 20px;
`;

const AuthLayout = ({ children }: IAuthLayout) => {
   return (
      <Container>
         <Logo resizeMode={'center'} source={require('../../../assets/logo.png')} />
         {children}
      </Container>
   );
};

export default AuthLayout;
