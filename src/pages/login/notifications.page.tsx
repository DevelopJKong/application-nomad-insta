import React from 'react';
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

const Notifications = () => {
   return (
      <Container>
         <SText>HELLO</SText>
      </Container>
   );
};

export default Notifications;
