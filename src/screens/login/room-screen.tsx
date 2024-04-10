import { ApolloCache, FetchResult, gql, useApolloClient, useMutation, useQuery, useSubscription } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, View } from 'react-native';
import ScreenLayout from '../../components/layout/screen-layout';
import styled from 'styled-components/native';
import { useForm } from 'react-hook-form';
import useMe from '../../hooks/use-me';
import { SendMessageMutation } from '../../gql/graphql';
import { cloneDeep } from 'lodash';
import { Ionicons } from '@expo/vector-icons';

type TMessageContainer = {
   $outGoing: boolean;
};

type TForm = {
   message: string;
};

const ROOM_UPDATES = gql`
   subscription roomUpdates($id: Float!) {
      roomUpdates(input: { id: $id }) {
         id
         payload
         user {
            username
            avatar
         }
         read
      }
   }
`;

const SEND_MESSAGE_MUTATION = gql`
   mutation sendMessage($payload: String!, $roomId: Float, $userId: Float) {
      sendMessage(input: { payload: $payload, roomId: $roomId, userId: $userId }) {
         ok
         error
         message
         messages {
            id
         }
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
   border: 1px solid rgba(255, 255, 255, 0.5);
   padding: 10px 20px;
   border-radius: 9999px;
   color: white;
   margin: 0 10px;
   height: 50px;
   width: 87.5%;
   margin-right: 10px;
`;

const InputContainer = styled.View`
   width: 95%;
   margin-bottom: 50px;
   margin-top: 25px;
   flex-direction: row;
   align-items: center;
`;

const SendButton = styled.TouchableOpacity``;

const RoomScreen = ({ route, navigation }: any) => {
   const [subscribed, setSubscribed] = useState(false);
   const { data: meData } = useMe();

   const client = useApolloClient();
   const { register, setValue, handleSubmit, getValues, watch } = useForm<TForm>();

   useSubscription(ROOM_UPDATES, {
      variables: {
         id: route?.params?.roomId,
      },
   });

   const updateSendMessage = async (
      cache: ApolloCache<any>,
      result: Omit<FetchResult<SendMessageMutation>, 'context'>,
   ) => {
      if (!result.data) return;
      if (!result.data.sendMessage.ok) return;
      const {
         data: {
            sendMessage: { ok },
         },
      } = result;

      const id = result?.data?.sendMessage?.messages?.id;
      if (ok && meData && id) {
         const { message } = getValues();
         setValue('message', '');
         const messageObj = {
            id,
            payload: message,
            user: {
               username: meData?.me?.username ?? '',
               avatar: meData?.me?.avatar ?? '',
            },
            read: true,
            __typename: 'Message',
         };
         const incomingMessage = cache.writeFragment({
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
            id: `Room:${route?.params?.roomId}`,
            fields: {
               messages(prev: any) {
                  const existingMessage = prev.find((a: any) => a.__ref === incomingMessage?.__ref);
                  if (existingMessage) return prev;
                  return [...prev, incomingMessage];
               },
            },
         });
      }
   };

   // ! gql query 모음
   const [sendMessageMutation, { loading: sendMessageLoading }] = useMutation(SEND_MESSAGE_MUTATION, {
      update: updateSendMessage,
   });

   const { data, loading, subscribeToMore } = useQuery(ROOM_QUERY, {
      variables: {
         id: route?.params?.roomId,
      },
   });

   // ! 기본 함수 모음
   const renderItem = ({ item: message }: any) => {
      return (
         <MessageContainer $outGoing={message?.user?.username !== route?.params?.talkingTo?.username}>
            <Author>
               <Avatar source={{ uri: message?.user?.avatar || 'https://source.unsplash.com/random' }} />
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
               userId: route?.params?.id,
               roomId: route?.params?.roomId,
            },
         });
      }
   };

   const updateQuery = (
      prev: any,
      {
         subscriptionData,
      }: {
         subscriptionData: { data: any };
      },
   ) => {
      console.log(JSON.stringify(subscriptionData, null, 4));
      const sameIdMessage = prev.seeRoom.room.messages.find((a: any) => a.id === subscriptionData.data.roomUpdates.id);
      if (!subscriptionData.data) return prev;
      if (sameIdMessage) return prev;

      const messageObj = {
         id: subscriptionData?.data?.roomUpdates?.id,
         payload: subscriptionData?.data?.roomUpdates?.payload,
         user: {
            username: subscriptionData?.data?.roomUpdates?.user?.username ?? '',
            avatar: subscriptionData?.data?.roomUpdates?.user?.avatar ?? '',
         },
         read: subscriptionData?.data?.roomUpdates?.read,
         __typename: 'Message',
      };

      const messageFragment = client.cache.writeFragment({
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

      client.cache.modify({
         id: `ROOT_QUERY`,
         fields: {
            seeRoom(prev) {
               return {
                  ...prev,
                  room: {
                     ...prev.room,
                     messages: [...prev.room.messages, messageFragment],
                  },
               };
            },
         },
      });
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

   useEffect(() => {
      if (data?.seeRoom) {
         subscribeToMore({
            document: ROOM_UPDATES,
            variables: {
               id: route?.params?.roomId,
            },
            updateQuery: updateQuery,
         });
         setSubscribed(true);
      }
   }, [data, subscribed]);
   return (
      <KeyboardAvoidingView
         style={{ flex: 1, backgroundColor: 'black' }}
         behavior='height'
         keyboardVerticalOffset={100}
      >
         <ScreenLayout loading={loading}>
            <FlatList
               style={{ width: '100%', marginVertical: 10 }}
               inverted
               data={cloneDeep(data?.seeRoom.room?.messages ?? [])?.reverse()}
               keyExtractor={(message, index) => `${(message as any)?.id}-${index}`}
               renderItem={renderItem}
               showsVerticalScrollIndicator={false}
               ItemSeparatorComponent={() => <View style={{ width: '100%', height: 10 }} />}
            />
            <InputContainer>
               <TextInput
                  placeholder='Write a message'
                  placeholderTextColor='rgba(255,255,255,0.5)'
                  returnKeyLabel='Send Message'
                  returnKeyType='send'
                  value={watch('message')}
                  onChangeText={(text: string) => setValue('message', text)}
                  onSubmitEditing={handleSubmit(onValid)}
               />
               <SendButton onPress={handleSubmit(onValid)} disabled={!watch('message')}>
                  <Ionicons name='send' color={!watch('message') ? 'rgba(255, 255, 255, 0.5)' : 'white'} size={22} />
               </SendButton>
            </InputContainer>
         </ScreenLayout>
      </KeyboardAvoidingView>
   );
};

export default RoomScreen;
