import React from 'react';

import styled from 'styled-components/native';
import PageLayoutComponent from '../../components/layout/page-layout.component';

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const SText = styled.Text`
   color: white;
`;

const Profile = () => {
   return (
      <PageLayoutComponent>
         <Container>
            <SText>Profile</SText>
         </Container>
      </PageLayoutComponent>
   );
};

export default Profile;
