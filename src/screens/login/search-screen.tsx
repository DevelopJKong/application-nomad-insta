import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import PageLayoutComponent from '../../components/layout/page-layout';
import DismissKeyBoardComponent from '../../components/dismiss-key-board';
import { useForm } from 'react-hook-form';
import { EvilIcons } from '@expo/vector-icons';
import { gql, useLazyQuery } from '@apollo/client';
import { ActivityIndicator, FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import _ from 'lodash';
import { BACKEND_URL } from '../../common/constants/global-constant';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

interface IForm {
   keyword: string;
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

const SearchContainer = styled.View`
   justify-content: center;
   align-items: center;
`;

const SearchText = styled.Text`
   margin-top: 15px;
   color: white;
   font-weight: 600;
`;

type NavRootStackParamList = {
   Photo: {
      photoId: number;
   };
};

type NavRootStackRouteName = 'Photo';

type NavigationType = NativeStackNavigationProp<NavRootStackParamList, NavRootStackRouteName>;

const Search = () => {
   const numColumns = 4;
   const { width } = useWindowDimensions();
   const { handleSubmit, setValue, register, watch } = useForm<IForm>();
   const [startQueryFn, { loading, data, called }] = useLazyQuery(SEARCH_PHOTOS);

   const navigation = useNavigation<NavigationType>();

   const onValid = ({ keyword }: IForm) => {
      startQueryFn({
         variables: {
            input: {
               keyword,
            },
         },
      });
   };

   const RenderItem = ({ item: photo }: { item: any }) => {
      if (_.isEmpty(photo?.file)) return null;
      let uri = '';
      let localUri = '';

      if (process.env.NODE_ENV === 'development') {
         uri = photo?.file.replace('http://localhost:8000/', '');
         localUri = `${BACKEND_URL}:8000/${uri}`;
      }

      return (
         <TouchableOpacity
            onPress={() =>
               navigation.navigate('Photo', {
                  photoId: photo.id,
               })
            }
         >
            <Image source={{ uri: localUri }} style={{ width: width / numColumns, height: 100 }} />
         </TouchableOpacity>
      );
   };

   useEffect(() => {
      register('keyword', {
         required: true,
         minLength: 3,
      });
   }, []);

   console.log(data?.searchPhotos?.photos);

   return (
      <DismissKeyBoardComponent>
         <PageLayoutComponent>
            <InputWrapper>
               <SearchIcon name='search' size={24} color='white' />
               <Input
                  value={watch('keyword')}
                  onChangeText={(text: string) => setValue('keyword', text)}
                  autoCapitalize='none'
                  returnKeyLabel='Search'
                  returnKeyType='search'
                  onSubmitEditing={handleSubmit(onValid)}
                  placeholderTextColor='white'
                  placeholder='Search photos'
                  autoCorrect={false}
               />
            </InputWrapper>
            <Container>
               {loading ? (
                  <SearchContainer>
                     <ActivityIndicator size={'large'} color='white' />
                     <SearchText>Searching...</SearchText>
                  </SearchContainer>
               ) : (
                  <></>
               )}

               {!called ? (
                  <SearchContainer>
                     <SearchText>Search by keyword...</SearchText>
                  </SearchContainer>
               ) : null}

               {!_.isEmpty(data?.searchPhotos) ? (
                  _.isEmpty(data?.searchPhotos?.photos) ? (
                     <SearchContainer>
                        <SearchText>Couldn't find anything</SearchText>
                     </SearchContainer>
                  ) : (
                     <>
                        <FlatList
                           numColumns={numColumns}
                           data={data?.searchPhotos?.photos}
                           keyExtractor={(photo) => photo.id.toString()}
                           renderItem={({ item }) => {
                              console.log(item);
                              return <RenderItem item={item} />;
                           }}
                        />
                     </>
                  )
               ) : null}
            </Container>
         </PageLayoutComponent>
      </DismissKeyBoardComponent>
   );
};

export default Search;
