import React, { useState } from 'react';
import PageLayoutComponent from '../../components/layout/page-layout.component';
import { USER_FRAGMENT } from '../../fragments';
import { gql, useQuery } from '@apollo/client';
import UserRowComponent from '../../components/user/user-row.component';
import ScreenLayoutComponent from '../../components/layout/screen-layout.component';
import { FlatList, View } from 'react-native';

const LIKES_QUERY = gql`
   query seeLikes($seeLikesInput: SeeLikesInput!) {
      seeLikes(input: $seeLikesInput) {
         user {
            ...UserFragment
         }
      }
   }
   ${USER_FRAGMENT}
`;

const Likes = ({ route }: any) => {
   const [refreshing, setRefreshing] = useState(false);
   const { data, loading, refetch } = useQuery(LIKES_QUERY, {
      variables: {
         seeLikesInput: {
            id: route?.params?.photoId,
         },
         skip: !route?.params?.photoId,
      },
   });

   const renderUser = ({ item: user }: any) => <UserRowComponent {...user} />;

   const onRefresh = async () => {
      setRefreshing(true);
      await refetch();
      setRefreshing(false);
   };

   return (
      <PageLayoutComponent>
         <ScreenLayoutComponent loading={loading}>
            <FlatList
               ItemSeparatorComponent={() => (
                  <View
                     style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                     }}
                  />
               )}
               refreshing={refreshing}
               onRefresh={onRefresh}
               data={data?.seeLikes?.user}
               keyExtractor={(item: any) => '' + item.id}
               renderItem={renderUser}
               style={{ width: '100%' }}
            />
         </ScreenLayoutComponent>
      </PageLayoutComponent>
   );
};

export default Likes;
