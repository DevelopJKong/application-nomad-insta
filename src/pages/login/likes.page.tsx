import React from 'react';

import PageLayoutComponent from '../../components/layout/page-layout.component';
import styled from 'styled-components/native';

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const SText = styled.Text`
   color: white;
`;
const Likes = () => {
   return (
      <PageLayoutComponent>
         <Container>
            <SText>Likes</SText>
         </Container>
      </PageLayoutComponent>
   );
};

export default Likes;
