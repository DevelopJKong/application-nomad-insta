import { FlatList, View } from 'react-native';
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ROOM_FRAGMENT } from '../../fragments';
import styled from 'styled-components/native';
import ScreenLayout from '../../components/layout/screen-layout';
import useMe from '../../hooks/use-me';
import { colors } from '../../styled';

const SEE_ROOMS_QUERY = gql`
   query seeRooms {
      seeRooms {
         ok
         message
         error
         rooms {
            ...RoomParts
         }
      }
   }
   ${ROOM_FRAGMENT}
`;

const RoomContainer = styled.TouchableOpacity`
   width: 100%;
   padding: 10px;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;
const Column = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

const Avatar = styled.Image`
   width: 50px;
   height: 50px;
   border-radius: 25px;
`;
const Data = styled.View``;
const UnreadDot = styled.View`
   width: 10px;
   height: 10px;
   border-radius: 5px;
   background-color: ${colors.blue};
`;
const Username = styled.Text`
   color: white;
   font-weight: 600;
   font-size: 16px;
`;
const UnreadText = styled.Text`
   color: white;
   margin-top: 2px;
   font-weight: 500;
`;

const RoomsScreen = () => {
   const { data, loading } = useQuery(SEE_ROOMS_QUERY);
   const { data: user } = useMe();
   const renderItem = ({ item: room }: any) => {
      const notMe = room.users.find((userData: any) => userData.id !== user.id);
      return (
         <RoomContainer>
            <Column>
               <Avatar source={{ uri: notMe.avatar }} style={{ width: 50, height: 50, borderRadius: 25 }} />
               <Data>
                  <Username>{notMe.username}</Username>
                  <UnreadText>
                     {room.unreadTotal} unread {room.unreadTotal === 1 ? 'message' : 'messages'}
                  </UnreadText>
               </Data>
            </Column>
            <Column>{room.unreadTotal !== 0 ? <UnreadDot /> : null}</Column>
         </RoomContainer>
      );
   };
   return (
      <ScreenLayout loading={loading}>
         <FlatList
            style={{ width: '100%' }}
            data={data?.seeRooms}
            keyExtractor={(room) => '' + room.id}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
               <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
            )}
         />
      </ScreenLayout>
   );
};

export default RoomsScreen;
