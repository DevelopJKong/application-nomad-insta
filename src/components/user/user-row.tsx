import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styled';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IUserRowComponent {
   avatar: string;
   id: number;
   username: string;
   isFollowing: boolean;
   isMe: boolean;
}

const Wrapper = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 5px 10px;
`;

const Column = styled.TouchableOpacity`
   flex-direction: row;
   align-items: center;
`;

const Avatar = styled.Image`
   width: 40px;
`;

const Username = styled.Text`
   font-weight: 600;
   color: white;
`;

const FollowBtn = styled.TouchableOpacity`
   background-color: ${colors.blue};
   justify-content: center;
   padding: 5px 10px;
   border-radius: 4px;
`;

const FollowBtnText = styled.Text`
   color: white;
   font-weight: 600;
`;

type NavRootStackParamList = {
   Profile: { username: string; id: number };
};

type NavigationType = NativeStackNavigationProp<NavRootStackParamList, 'Profile'>;

const UserRowComponent = ({ avatar, id, username, isFollowing, isMe }: IUserRowComponent) => {
   const navigation = useNavigation<NavigationType>();
   return (
      <Wrapper>
         <Column
            onPress={() =>
               navigation.navigate('Profile', {
                  username,
                  id,
               })
            }
         >
            <Avatar source={{ uri: avatar }} />
            <Username>{username}</Username>
         </Column>
         {!isMe && (
            <FollowBtn>
               <FollowBtnText>{isFollowing ? 'UnFollow' : 'Follow'}</FollowBtnText>
            </FollowBtn>
         )}
      </Wrapper>
   );
};

export default UserRowComponent;
