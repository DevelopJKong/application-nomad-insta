import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import DismissKeyBoard from '../../components/dismiss-key-board';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../styled';

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
      <TouchableOpacity onPress={() => {}}>
         <HeaderRightText>Next</HeaderRightText>
      </TouchableOpacity>
   );

   const onValid = ({ caption }: any) => {};

   useEffect(() => {
      register('caption');
   }, [register]);

   useEffect(() => {
      navigation.setOptions({
         headerRight: HeaderRight,
      });
   }, []);

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
