import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, View } from 'react-native';
import ScreenLayout from '../../components/layout/screen-layout';
import styled from 'styled-components/native';

const ROOM_QUERY = gql`
   query seeRoom($id: Float!) {
      seeRoom(input: { id: $id }) {
         ok
         error
         message
         room {
            messages {
               id
               payload
               user {
                  username
                  avatar
               }
               read
            }
         }
      }
   }
`;

const MessageContainer = styled.View``;

const Author = styled.View``;

const Avatar = styled.Image``;

const Username = styled.Text`
   color: white;
`;

const Message = styled.Text`
   color: white;
`;

const TextInput = styled.TextInput`
   margin-bottom: 50px;
   width: 95%;
   background-color: white;
   padding: 10px 20px;
   border-radius: 9999px;
   margin: 0 10px;
`;

const RoomScreen = ({ route, navigation }: any) => {
   const { data, loading } = useQuery(ROOM_QUERY, {
      variables: {
         id: route?.params?.id,
      },
   });

   // ! 기본 함수 모음
   const renderItem = ({ item: message }: any) => {
      return (
         <MessageContainer>
            <Author>
               <Avatar source={{ uri: message?.user?.avatar }} />
               <Username>{message?.user?.username}</Username>
            </Author>
            <Message>{message?.payload}</Message>
         </MessageContainer>
      );
   };

   // ! useEffect 모음
   useEffect(() => {
      navigation.setOptions({
         title: `${route?.params?.talkingTo?.username}`,
      });
   }, []);
   return (
      <KeyboardAvoidingView
         style={{ flex: 1, backgroundColor: 'black' }}
         behavior='height'
         keyboardVerticalOffset={100}
      >
         <ScreenLayout loading={loading}>
            <FlatList
               inverted
               style={{ width: '100%' }}
               data={data?.seeRoom.room?.messages}
               keyExtractor={(message, index) => `${(message as any)?.id}-${index}`}
               renderItem={renderItem}
               ItemSeparatorComponent={() => (
                  <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
               )}
            />
            <TextInput
               placeholder='Write a message'
               placeholderTextColor='rgba(255,255,255,0.5)'
               returnKeyLabel='Send Message'
               returnKeyType='send'
            />
         </ScreenLayout>
      </KeyboardAvoidingView>
   );
};

export default RoomScreen;
