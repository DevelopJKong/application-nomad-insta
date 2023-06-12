import React from 'react';
import styled from 'styled-components/native';
import { useWindowDimensions } from 'react-native';

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

const Container = styled.View`
   background-color: red;
`;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text`
   color: white;
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

const PhotoComponent = ({ id, user, caption, file, isLiked, likes, commentNumber }: IPhotoComponent) => {
   const { width, height } = useWindowDimensions();
   return (
      <Container>
         <Header>
            {/* <UserAvatar />*/}
            <Username>{user.username}</Username>
         </Header>
         <File
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
            <Username>{user.username}</Username>
            <CaptionText></CaptionText>
         </Caption>
      </Container>
   );
};

export default PhotoComponent;
