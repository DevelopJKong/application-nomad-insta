import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import DismissKeyBoard from '../../components/dismiss-key-board';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../styled';
import { gql, useMutation } from '@apollo/client';
import { FEED_PHOTO_FRAGMENT } from '../../fragments';
import { ReactNativeFile } from 'apollo-upload-client';

const UPLOAD_PHOTO_MUTATION = gql`
   mutation uploadPhoto($file: Upload!, $caption: String) {
      uploadPhoto(input: { photoFile: $file, caption: $caption }) {
         ok
         error
         message
      }
   }
   ${FEED_PHOTO_FRAGMENT}
`;

const Container = styled.View`
   flex: 1;
   background-color: black;
   padding: 0 50px;
`;
const Photo = styled.Image`
   height: 450px;
`;
const CaptionContainer = styled.View`
   margin-top: 30px;
`;

const Caption = styled.TextInput`
   background-color: white;
   color: black;
   padding: 10px 20px;
   border-radius: 100px;
`;

const HeaderRightText = styled.Text`
   color: ${colors.blue};
   font-size: 18px;
`;

const UploadForm = ({ route, navigation }: any) => {
   // ! react-hook-form 모음
   const { register, handleSubmit, setValue } = useForm<any>();

   // ! graphql 모음
   const [uploadPhotoMutation, { loading }] = useMutation(UPLOAD_PHOTO_MUTATION);

   // ! 컴포넌트 모음

   const HeaderRightLoading = () => (
      <ActivityIndicator
         size='small'
         color={'white'}
         style={{
            marginRight: 15,
         }}
      />
   );

   const HeaderRight = () => (
      <TouchableOpacity
         onPress={() => {
            handleSubmit(onValid)();
         }}
      >
         <HeaderRightText>Next</HeaderRightText>
      </TouchableOpacity>
   );

   const onValid = ({ caption }: any) => {
      const file = new ReactNativeFile({
         uri: route.params.file,
         name: 'image.jpg',
         type: 'image/jpeg',
      });

      uploadPhotoMutation({
         variables: {
            caption,
            file: route.params.file,
         },
      });
   };

   useEffect(() => {
      register('caption');
   }, [register]);

   useEffect(() => {
      navigation.setOptions({
         headerRight: loading ? HeaderRightLoading : HeaderRight,
         ...(loading && { headerLeft: () => null }),
      });
   }, [loading]);

   return (
      <DismissKeyBoard>
         <Container>
            <Photo resizeMode='contain' source={{ uri: route.params.file }} />
            <CaptionContainer>
               <Caption
                  placeholder='Write a caption...'
                  placeholderTextColor='rgba(0,0,0,0.5)'
                  returnKeyType='done'
                  onSubmitEditing={handleSubmit(onValid)}
                  onChangeText={(text: string) => {
                     setValue('caption', text);
                  }}
               />
            </CaptionContainer>
         </Container>
      </DismissKeyBoard>
   );
};

export default UploadForm;
