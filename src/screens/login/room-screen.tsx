import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

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

const RoomScreen = ({ route, navigation }: any) => {
   const { data } = useQuery(ROOM_QUERY, {
      variables: {
         id: route?.params?.id,
      },
   });

   useEffect(() => {
      navigation.setOptions({
         title: `${route?.params?.talkingTo?.username}`,
      });
   }, []);
   return (
      <View>
         <Text>Message Screen</Text>
      </View>
   );
};

export default RoomScreen;
