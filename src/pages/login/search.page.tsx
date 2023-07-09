import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import PageLayoutComponent from '../../components/layout/page-layout.component';
import DismissKeyBoardComponent from '../../components/dismiss-key-board.component';
import { useForm } from 'react-hook-form';
import { EvilIcons } from '@expo/vector-icons';
import { gql, useLazyQuery } from '@apollo/client';

interface IForm {
   keyboard: string;
}

const SEARCH_PHOTOS = gql`
   query searchPhotos($input: SearchPhotosInput!) {
      searchPhotos(input: $input) {
         ok
         error
         message
         photos {
            id
            file
         }
      }
   }
`;

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const SText = styled.Text`
   color: white;
`;

const InputWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   position: relative;
`;

const Input = styled.TextInput`
   width: 80%;
   color: white;
   background-color: black;
   border-radius: 7px;
   border: 1px solid gray;
   padding: 0 20px 0 35px;
`;

const SearchIcon = styled(EvilIcons)`
   position: absolute;
   top: 2px;
   left: 45px;
   z-index: 10;
`;

const Search = () => {
   const { setValue, register, watch } = useForm<IForm>();
   const [startQueryFn, { loading, data }] = useLazyQuery(SEARCH_PHOTOS);

   useEffect(() => {
      register('keyboard');
   }, [register]);

   return (
      <DismissKeyBoardComponent>
         <PageLayoutComponent>
            <InputWrapper>
               <SearchIcon name='search' size={24} color='white' />
               <Input
                  value={watch('keyboard')}
                  onChangeText={(text: string) => setValue('keyboard', text)}
                  autoCapitalize='none'
                  returnKeyLabel='Search'
                  returnKeyType='search'
                  placeholderTextColor='white'
                  placeholder='Search photos'
                  autoCorrect={false}
               />
            </InputWrapper>
            <Container>
               <SText>Search</SText>
            </Container>
         </PageLayoutComponent>
      </DismissKeyBoardComponent>
   );
};

export default Search;
