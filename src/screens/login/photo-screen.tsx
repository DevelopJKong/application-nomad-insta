import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { PHOTO_FRAGMENT } from '../../fragments';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PhotoComponent from '../../components/photo/photo';
import ScreenLayoutComponent from '../../components/layout/screen-layout';
import { RefreshControl } from 'react-native';

const SEE_PHOTO_QUERY = gql`
   query seePhoto($seePhotoInput: SeePhotoInput!) {
      seePhoto(input: $seePhotoInput) {
         ok
         message
         error
         photo {
            ...PhotoFragment
            user {
               username
               avatar
            }
            caption
            createdAt
            isMine
         }
      }
   }
   ${PHOTO_FRAGMENT}
`;

const Container = styled.ScrollView.attrs((_props) => {
   return {
      contentContainerStyle: {
         flex: 1,
         backgroundColor: 'black',
         alignItems: 'center',
         justifyContent: 'center',
      },
   };
})`
   background-color: black;
`;

type NavRootStackParamList = {
   Photo: {
      photoId: number;
   };
};

type NavRootStackRouteName = 'Photo';

type NavigationType = NativeStackScreenProps<NavRootStackParamList, NavRootStackRouteName>;

const Photo = ({ route }: NavigationType) => {
   const [refreshing, setRefreshing] = useState<boolean>(false);

   const { data, loading, refetch } = useQuery(SEE_PHOTO_QUERY, {
      variables: {
         seePhotoInput: {
            id: Number(route?.params?.photoId),
         },
      },
   });

   const onRefresh = async () => {
      setRefreshing(true);
      await refetch();
      setRefreshing(false);
   };
   return (
      <ScreenLayoutComponent loading={loading}>
         <Container refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}>
            <PhotoComponent {...data?.seePhoto?.photo} fullView={true} />
         </Container>
      </ScreenLayoutComponent>
   );
};

export default Photo;
