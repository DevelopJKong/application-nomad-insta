import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { ApolloCache, FetchResult, gql, useMutation } from '@apollo/client';
import { BACKEND_URL } from '../../common/constants/global.constant';
import { toggleLike, toggleLikeVariables } from '../../__generated__/toggleLike';

interface IPhotoComponent {
   id: number;
   user: {
      avatar: string;
      username: string;
   };
   caption: string;
   file: string;
   isLiked: boolean;
   likes: number;
   commentNumber: number;
   fullView?: boolean;
}

const TOGGLE_LIKE_MUTATION = gql`
   mutation toggleLike($toggleLikeInput: ToggleLikeInput!) {
      toggleLike(input: $toggleLikeInput) {
         ok
         error
         message
      }
   }
`;

const Container = styled.View``;
const Header = styled.TouchableOpacity`
   padding: 10px;
   flex-direction: row;
   align-items: center;
`;
const UserAvatar = styled.Image`
   margin-right: 10px;
   width: 25px;
   height: 25px;
   border-radius: 12.5px;
`;
const Username = styled.Text`
   color: white;
   font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View`
   flex-direction: row;
   align-items: center;
`;
const Action = styled.TouchableOpacity`
   margin-right: 10px;
`;
const Caption = styled.View`
   flex-direction: row;
`;
const CaptionText = styled.Text`
   color: white;
   margin-left: 5px;
`;
const Likes = styled.Text`
   color: white;
   margin: 7px 0;
   font-weight: 600;
`;
const UsernameBtn = styled.TouchableOpacity``;

const ExtraContainer = styled.View`
   padding: 10px;
`;

type NavRootStackParamList = {
   Profile?: {
      username: string;
   };
   Comments?: {
      photoId: number;
   };
   Likes?: {};
};

type NavRootStackRouteName = 'Profile' | 'Comments' | 'Likes';

type NavigationType = NativeStackNavigationProp<NavRootStackParamList, NavRootStackRouteName>;

const PhotoComponent = ({
   id,
   user,
   caption: _caption,
   file,
   isLiked,
   likes,
   commentNumber: _commentNumber,
   fullView = false,
}: IPhotoComponent) => {
   const { width, height } = useWindowDimensions();
   const [_imageHeight, setImageHeight] = useState<number>(height - 450);
   const [fileName, setFileName] = useState<string>('');
   const navigation = useNavigation<NavigationType>();

   useEffect(() => {
      Image.getSize(file.replace('http://localhost:8000', `${BACKEND_URL}:8000`), (width, height) => {
         setImageHeight(height / 3);
         setFileName(file.replace('http://localhost:8000', `${BACKEND_URL}:8000`));
      });
   }, [file]);

   const updateToggleLike = (cache: ApolloCache<any>, result: Omit<FetchResult<toggleLike>, 'context'>) => {
      if (!result.data) return;
      const {
         data: {
            toggleLike: { ok },
         },
      } = result;
      if (ok) {
         const photoId = `Photo:${id}`;
         cache.modify({
            id: photoId,
            fields: {
               isLiked(prev) {
                  return !prev;
               },
               likes(prev) {
                  if (isLiked) {
                     return prev - 1;
                  }
                  return prev + 1;
               },
            },
         });
      }
   };
   const [toggleLikeMutation] = useMutation<toggleLike, toggleLikeVariables>(TOGGLE_LIKE_MUTATION, {
      variables: {
         toggleLikeInput: {
            id,
         },
      },
      update: updateToggleLike,
   });
   return (
      <Container>
         <Header
            onPress={() =>
               navigation.navigate('Profile', {
                  username: user.username,
               })
            }
         >
            <UserAvatar
               resizeMode={'cover'}
               source={{ uri: user.avatar }}
               style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
               }}
            />
            <Username>{user.username}</Username>
         </Header>
         <File
            style={{
               width,
               height: height - 200,
            }}
            source={{ uri: fileName ? fileName : 'http://localhost:8000' }}
         />
         <ExtraContainer>
            <Actions>
               <Action onPress={() => toggleLikeMutation()}>
                  <Ionicons name={isLiked ? 'heart' : 'heart-outline'} color={isLiked ? 'tomato' : 'white'} size={22} />
               </Action>
               <Action onPress={() => navigation.navigate('Comments')}>
                  <Ionicons name={'chatbubble-outline'} color={'white'} size={22} />
               </Action>
            </Actions>
            <TouchableOpacity
               onPress={() =>
                  navigation.navigate('Likes', {
                     photoId: id,
                  })
               }
            >
               <Likes>{likes === 1 ? '1 like' : `${likes} likes`}</Likes>
            </TouchableOpacity>
            <Caption>
               <UsernameBtn
                  onPress={() =>
                     navigation.navigate('Profile', {
                        username: user.username,
                     })
                  }
               >
                  <Username>{user.username}</Username>
               </UsernameBtn>
               <CaptionText></CaptionText>
            </Caption>
         </ExtraContainer>
      </Container>
   );
};

export default PhotoComponent;
