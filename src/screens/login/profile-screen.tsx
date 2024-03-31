import React, { useEffect } from 'react';

import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TitleLayoutComponent from '../../components/layout/title-layout';

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const SText = styled.Text`
   color: white;
`;

type NavRootStackParamList = {
   Profile: {
      username: string;
   };
};

type NavRootStackRouteName = 'Profile';

type NavigationType = NativeStackScreenProps<NavRootStackParamList, NavRootStackRouteName>;

const Profile = ({ navigation, route }: NavigationType) => {
   useEffect(() => {
      if (route?.params?.username) {
         navigation.setOptions({
            title: route.params.username,
         });
      }
   }, []);

   return (
      <TitleLayoutComponent title={route.params.username}>
         <Container>
            <SText>Profile</SText>
         </Container>
      </TitleLayoutComponent>
   );
};

export default Profile;
