import { FlatList } from 'react-native';
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ROOM_FRAGMENT } from '../../fragments';
import styled from 'styled-components/native';
import ScreenLayout from '../../components/layout/screen-layout';

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

const RoomContainer = styled.View`
   background-color: black;
`;
const RoomText = styled.Text`
   color: white;
`;

const RoomsScreen = () => {
   const { data, loading } = useQuery(SEE_ROOMS_QUERY);
   const renderItem = ({ item: room }: any) => (
      <RoomContainer>
         <RoomText>{room.unreadTotal === '0' ? 'Name of the other person' : `${room.unreadTotal} messages.`}</RoomText>
      </RoomContainer>
   );
   return (
      <ScreenLayout loading={loading}>
         <FlatList data={data?.seeRooms} keyExtractor={(room) => '' + room.id} renderItem={renderItem} />
      </ScreenLayout>
   );
};

export default RoomsScreen;
