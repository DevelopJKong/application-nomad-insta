import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styled';
import useMe from '../../hooks/use-me';
import { useNavigation } from '@react-navigation/native';

type TRoomItemProps = {
   users: any;
   unreadTotal: number;
};

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

const RoomItem = ({ users, unreadTotal }: TRoomItemProps) => {
   const { data: user } = useMe();
   const navigation = useNavigation<any>();
   const talkingTo = users?.find((userData: any) => userData.id !== user?.id);

   const goToRoom = () =>
      navigation.navigate('Room', {
         id: talkingTo.id,
         talkingTo: talkingTo,
      });

   return (
      <RoomContainer onPress={goToRoom}>
         <Column>
            <Avatar source={{ uri: talkingTo?.avatar }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <Data>
               <Username>{talkingTo?.username}</Username>
               <UnreadText>
                  {unreadTotal} unread {unreadTotal === 1 ? 'message' : 'messages'}
               </UnreadText>
            </Data>
         </Column>
         <Column>{unreadTotal !== 0 ? <UnreadDot /> : null}</Column>
      </RoomContainer>
   );
};

export default RoomItem;
