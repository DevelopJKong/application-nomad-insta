import styled from 'styled-components/native';
import React from 'react';
import useLogout from '../../hooks/use-logout.hook';
import * as _ from 'lodash';

interface IPageLayoutComponent {
   children: React.ReactNode;
   title?: string;
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

const BtnWrapper = styled.View`
   position: absolute;
   right: 25px;
`;

const Btn = styled.Button`
   width: 20px;
   height: 20px;
`;

const SText = styled.Text`
   font-size: 18px;
   color: white;
`;

const PageLayoutComponent = ({ children, title }: IPageLayoutComponent) => {
   const { logout } = useLogout();
   return (
      <Container>
         <LogoWrapper>
            {!_.isEmpty(title) ? (
               <>
                  <SText>{title}</SText>
                  <BtnWrapper>
                     <Btn title='Logout' onPress={() => logout()} />
                  </BtnWrapper>
               </>
            ) : (
               <Logo>
                  <LogoImage source={require('../../../assets/logo.png')} />
               </Logo>
            )}
         </LogoWrapper>
         {children}
      </Container>
   );
};

export default PageLayoutComponent;
