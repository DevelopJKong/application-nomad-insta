import React from 'react';

import PageLayoutComponent from '../../components/layout/page-layout';
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
const Comments = () => {
   return (
      <PageLayoutComponent>
         <Container>
            <SText>Me</SText>
         </Container>
      </PageLayoutComponent>
   );
};

export default Comments;
