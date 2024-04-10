import { ApolloCache, FetchResult, gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, View } from 'react-native';
import ScreenLayout from '../../components/layout/screen-layout';
import styled from 'styled-components/native';
import { useForm } from 'react-hook-form';
import { SeeRoomOutput } from '../../gql/graphql';
import useMe from '../../hooks/use-me';

type TMessageContainer = {
   $outGoing: boolean;
};

type TForm = {
   message: string;
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
   width: 95%;
   border: 1px solid rgba(255, 255, 255, 0.5);
   padding: 10px 20px;
   border-radius: 9999px;
   color: white;
   margin: 0 10px;
   height: 50px;
`;

const RoomScreen = ({ route, navigation }: any) => {
   const { data: meData } = useMe();

   const { register, setValue, handleSubmit, getValues } = useForm<TForm>();

   const updateSendMessage = (cache: ApolloCache<any>, result: Omit<FetchResult<any>, 'context'>) => {
      const {
         data: {
            sendMessage: {
               ok,
               message: { id },
            },
         },
      } = result;

      if (ok && meData) {
         const messageObj = {
            id,
            payload: getValues('message'),
            user: {
               username: meData.me.user.username,
               avatar: meData.me.avatar,
            },
            read: true,
            __typename: 'Message',
         };

         const messageFragment = cache.writeFragment({
            fragment: gql`
               fragment NewMessage on Message {
                  id
                  payload
                  user {
                     username
                     avatar
                  }
                  read
               }
            `,
            data: messageObj,
         });

         cache.modify({
            id: `Room:${route?.params?.id}`,
            fields: {
               messages(prev: any) {
                  return [...prev, messageFragment];
               },
            },
         });
      }
   };

   // ! gql query 모음
   const [sendMessageMutation, { loading: sendMessageLoading }] = useMutation(SEND_MESSAGE_MUTATION, {
      update: updateSendMessage,
   });

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

   const onValid = async ({ message }: TForm) => {
      if (!sendMessageLoading) {
         await sendMessageMutation({
            variables: {
               payload: message,
               roomId: route?.params?.id,
            },
         });
      }
   };

   // ! useEffect 모음
   useEffect(() => {
      navigation.setOptions({
         title: `${route?.params?.talkingTo?.username}`,
      });
   }, []);

   useEffect(() => {
      register('message', { required: true });
   }, [register]);
   return (
      <KeyboardAvoidingView
         style={{ flex: 1, backgroundColor: 'black' }}
         behavior='height'
         keyboardVerticalOffset={100}
      >
         <ScreenLayout loading={loading}>
            <FlatList
               style={{ width: '100%', paddingTop: 10 }}
               data={data?.seeRoom.room?.messages}
               keyExtractor={(message, index) => `${(message as any)?.id}-${index}`}
               renderItem={renderItem}
               ItemSeparatorComponent={() => <View style={{ width: '100%', height: 10 }} />}
            />
            <View style={{ marginTop: 20 }} />
            <TextInput
               placeholder='Write a message'
               placeholderTextColor='rgba(255,255,255,0.5)'
               returnKeyLabel='Send Message'
               returnKeyType='send'
               onChangeText={(text: string) => setValue('message', text)}
               onSubmitEditing={handleSubmit(onValid)}
            />
            <View style={{ marginBottom: 50 }} />
         </ScreenLayout>
      </KeyboardAvoidingView>
   );
};

export default RoomScreen;
