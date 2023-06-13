import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useWindowDimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
}

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
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text`
   color: white;
`;
const Likes = styled.Text`
   color: white;
`;
const UsernameBtn = styled.TouchableOpacity``;

export type NavigationType = NativeStackNavigationProp<any>;

const PhotoComponent = ({ id, user, caption, file, isLiked, likes, commentNumber }: IPhotoComponent) => {
   const { width, height } = useWindowDimensions();
   const [imageHeight, setImageHeight] = useState<number>(height - 450);
   const navigation = useNavigation<NavigationType>();

   useEffect(() => {
      Image.getSize(file, (width, height) => {
         console.log(imageHeight);
         setImageHeight(height / 3);
      });
   }, [file]);
   return (
      <Container>
         <Header onPress={() => navigation.navigate('Profile')}>
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
            resizeMode={'contain'}
            style={{
               width,
               height: height - 200,
            }}
            source={{ uri: file }}
         />
         <Actions>
            <Action></Action>
            <Action></Action>
         </Actions>
         <Likes>{likes === 1 ? '1 like' : `${likes} likes`}</Likes>
         <Caption>
            <UsernameBtn onPress={() => navigation.navigate('Profile')}>
               <Username>{user.username}</Username>
            </UsernameBtn>
            <CaptionText></CaptionText>
         </Caption>
      </Container>
   );
};

export default PhotoComponent;
