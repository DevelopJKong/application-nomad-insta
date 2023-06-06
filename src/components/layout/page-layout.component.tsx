import styled from 'styled-components/native';
import React from 'react';

interface IPageLayoutComponent {
   children: React.ReactNode;
}

const Container = styled.SafeAreaView`
   flex: 1;
   background-color: black;
`;

const LogoWrapper = styled.View`
   width: 100%;
   height: 70px;
   justify-content: center;
   align-items: center;
`;

const Logo = styled.View`
   width: 100%;
   height: 100%;
   justify-content: center;
   align-items: center;
`;

const LogoImage = styled.Image`
   max-width: 120px;
   height: 60%;
`;

const PageLayoutComponent = ({ children }: IPageLayoutComponent) => {
   return (
      <Container>
         <LogoWrapper>
            <Logo>
               <LogoImage source={require('../../../assets/logo.png')} />
            </Logo>
         </LogoWrapper>
         {children}
      </Container>
   );
};

export default PageLayoutComponent;
