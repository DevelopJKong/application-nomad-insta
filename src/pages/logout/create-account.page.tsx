import { Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
   flex: 1;
   background-color: black;
`;

const CreateAccount = () => {
   return (
      <Container>
         <Text>Register</Text>
      </Container>
   );
};

export default CreateAccount;
