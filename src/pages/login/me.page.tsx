import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import PageLayoutComponent from '../../components/layout/page-layout.component';
import useMe from '../../hooks/use-me.hook';

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const SText = styled.Text`
   color: white;
`;

const Me = ({ navigation }: any) => {
   const { data } = useMe();
   useEffect(() => {
      navigation.setOptions({
         title: data?.me?.username,
      });
   }, []);

   return (
      <PageLayoutComponent title={data?.me?.user?.username}>
         <Container>
            <SText>Me</SText>
         </Container>
      </PageLayoutComponent>
   );
};

export default Me;
