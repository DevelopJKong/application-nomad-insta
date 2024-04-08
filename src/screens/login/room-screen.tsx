import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, View } from 'react-native';
import ScreenLayout from '../../components/layout/screen-layout';
import styled from 'styled-components/native';

type TMessageContainer = {
   $outGoing: boolean;
};

const SEND_MESSAGE_MUTATION = gql`
   mutation sendMessage($payload: String!, $roomId: Float, $userId: Float) {
      sendMessage(input: { payload: $payload, roomId: $roomId, userId: $userId }) {
         ok
         error
         message
      }
   }
`;

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

const MessageContainer = styled.View<TMessageContainer>`
   padding: 0 10px;
   flex-direction: ${(props) => (props.$outGoing ? 'row-reverse' : 'row')};
   align-items: end;
`;

const Author = styled.View`
   margin-right: 10px;
`;

const Avatar = styled.Image`
   height: 20px;
   width: 20px;
   border-radius: 10px;
`;

const Message = styled.Text`
   background-color: rgba(255, 255, 255, 0.3);
   color: white;
   padding: 5px 10px;
   overflow: hidden;
   border-radius: 10px;
   font-size: 16px;
   margin: 0 16px;
`;

const TextInput = styled.TextInput`
   margin-bottom: 50px;
   margin-top: 25px;
   width: 95%;
   border: 1px solid rgba(255, 255, 255, 0.5);
   padding: 10px 20px;
   border-radius: 9999px;
   color: white;
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
         <MessageContainer $outGoing={message.user.username === route?.params?.talkingTo}>
            <Author>
               <Avatar source={{ uri: message?.user?.avatar }} />
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
