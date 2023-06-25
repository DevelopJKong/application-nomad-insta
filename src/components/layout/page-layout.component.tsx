import styled from 'styled-components/native';
import React from 'react';
import useLogout from '../../hooks/use-logout.hook';

interface IPageLayoutComponent {
   children: React.ReactNode;
}

const Container = styled.SafeAreaView`
   flex: 1;
   background-color: black;
`;

const LogoWrapper = styled.View`
   position: relative;
   width: 100%;
   height: 70px;
   justify-content: center;
   align-items: center;
   flex-direction: row;
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

const Btn = styled.Button`
   width: 20px;
   height: 20px;
   position: absolute;
   right: 0;
`;

const PageLayoutComponent = ({ children }: IPageLayoutComponent) => {
   const { logout } = useLogout();
   return (
      <Container>
         <LogoWrapper>
            <Logo>
               <LogoImage source={require('../../../assets/logo.png')} />
            </Logo>
            <Btn title='Logout' onPress={() => logout()} />
         </LogoWrapper>
         {children}
      </Container>
   );
};

export default PageLayoutComponent;
