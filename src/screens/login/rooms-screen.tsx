import { FlatList, View } from 'react-native';
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ROOM_FRAGMENT } from '../../fragments';
import ScreenLayout from '../../components/layout/screen-layout';
import RoomItem from '../../components/rooms/room-item';

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

const RoomsScreen = () => {
   const { data, loading } = useQuery(SEE_ROOMS_QUERY);

   console.log(JSON.stringify(data, null, 4));

   const renderItem = ({ item: room }: any) => {
      return <RoomItem users={room?.users} unreadTotal={room?.unreadTotal ?? 0} />;
   };
   return (
      <ScreenLayout loading={loading}>
         <FlatList
            style={{ width: '100%' }}
            data={(data?.seeRooms.rooms as any)?.map((room: any) => room)}
            keyExtractor={(room, index) => `${(room as any)?.id}-${index}`}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
               <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
            )}
         />
      </ScreenLayout>
   );
};

export default RoomsScreen;
