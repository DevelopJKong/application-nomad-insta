import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import PageLayoutComponent from '../../components/layout/page-layout.component';
import DismissKeyBoardComponent from '../../components/dismiss-key-board.component';
import { useForm } from 'react-hook-form';

interface IForm {
   keyboard: string;
}

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const SText = styled.Text`
   color: white;
`;

const Input = styled.TextInput`
   background-color: white;
`;

const Search = () => {
   const { setValue, register, watch } = useForm<IForm>();

   useEffect(() => {
      register('keyboard');
   }, [register]);

   return (
      <DismissKeyBoardComponent>
         <PageLayoutComponent>
            <Input
               value={watch('keyboard')}
               onChangeText={(text: string) => setValue('keyboard', text)}
               autoCapitalize='none'
               returnKeyLabel='Search'
               returnKeyType='search'
               placeholderTextColor='black'
               placeholder='Search photos'
               autoCorrect={false}
            />
            <Container>
               <SText>Search</SText>
            </Container>
         </PageLayoutComponent>
      </DismissKeyBoardComponent>
   );
};

export default Search;
