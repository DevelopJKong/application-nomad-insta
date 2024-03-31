import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components/native';
import DismissKeyBoard from '../../components/dismiss-key-board';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../styled';
import { gql, useMutation } from '@apollo/client';
import { ReactNativeFile } from 'apollo-upload-client';
import { AntDesign } from '@expo/vector-icons';
import * as mime from 'react-native-mime-types';

function generateRNFile(uri: string, name: string) {
   return uri
      ? new ReactNativeFile({
           uri,
           type: mime.lookup(uri) || 'image',
           name,
        })
      : null;
}

const UPLOAD_PHOTO_MUTATION = gql`
   mutation uploadPhoto($file: Upload!, $caption: String) {
      uploadPhoto(input: { photoFile: $file, caption: $caption }) {
         ok
         error
         message
      }
   }
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
   console.log(route.params.file);

   // ! react-hook-form 모음
   const { register, handleSubmit, setValue, watch } = useForm<any>();

   // ! graphql 모음
   const updateUploadPhoto = (cache: any, result: any) => {
      const {
         data: { uploadPhoto },
      } = result;

      console.log(uploadPhoto?.ok);

      if (uploadPhoto?.ok) {
         cache.modify({
            id: `ROOT_QUERY`,
            fields: {
               seeFeed(prev: any) {
                  return {
                     ...prev,
                     photos: [...prev.photos, uploadPhoto],
                  };
               },
            },
         });

         navigation.navigate('Tabs', {
            screen: 'TabsFeed',
         });
      }
   };

   const [uploadPhotoMutation, { loading }] = useMutation(UPLOAD_PHOTO_MUTATION, {
      update: updateUploadPhoto,
   });

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

   const HeaderRight = useCallback(
      () => (
         <TouchableOpacity
            onPress={async () => {
               await onValid(watch());
            }}
         >
            <HeaderRightText>Next</HeaderRightText>
         </TouchableOpacity>
      ),
      [watch()],
   );

   const onValid = async ({ caption }: { caption: string }) => {
      console.log(route.params.file);
      const file = generateRNFile(route.params.file, `${Date.now()}.jpg`);

      await uploadPhotoMutation({
         variables: {
            caption,
            file,
         },
      }).catch((error) => {
         console.log(JSON.stringify(error, null, 4));
      });
   };

   useEffect(() => {
      register('caption');
   }, [register]);

   useEffect(() => {
      navigation.setOptions({
         headerRight: loading ? HeaderRightLoading : HeaderRight,
         headerLeft: loading
            ? () => null
            : () => (
                 <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 5 }}>
                    <AntDesign name='arrowleft' size={24} color='white' />
                 </TouchableOpacity>
              ),
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
