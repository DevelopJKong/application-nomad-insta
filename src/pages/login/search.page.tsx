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

const Search = () => {
   return (
      <Container>
         <SText>Search</SText>
      </Container>
   );
};

export default Search;
