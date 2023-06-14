import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from '../../fragments';
import useLogout from '../../hooks/use-logout.hook';
import { FlatList, Text, View } from 'react-native';
import PageLayoutComponent from '../../components/layout/page-layout.component';
import ScreenLayoutComponent from '../../components/layout/screen-layout.componen';
import PhotoComponent from '../../components/photo/photo.component';

const FEED_QUERY = gql`
   query seeFeed {
      seeFeed {
         error
         ok
         message
         photos {
            ...PhotoFragment
            user {
               username
               avatar
            }
            caption
            comments {
               ...CommentFragment
            }
            createdAt
            isMine
         }
      }
   }

   ${PHOTO_FRAGMENT}
   ${COMMENT_FRAGMENT}
`;

const Feed = () => {
   const [offset, setOffset] = useState<number>(0);
   const { data, loading, refetch, fetchMore } = useQuery(FEED_QUERY, {
      variables: {
         offset,
      },
   });
   const { logout } = useLogout();

   const [refreshing, setRefreshing] = useState<boolean>(false);

   const renderPhoto = ({ item: photo }: any) => {
      return <PhotoComponent {...photo} />;
   };

   const refresh = async () => {
      setRefreshing(true);
      await refetch();
      setRefreshing(false);
   };

   return (
      <PageLayoutComponent>
         <ScreenLayoutComponent loading={loading}>
            <FlatList
               onEndReachedThreshold={0.1}
               onEndReached={() =>
                  fetchMore({
                     variables: {
                        offset: data?.seeFeed?.photos?.length,
                     },
                  })
               }
               refreshing={refreshing}
               onRefresh={refresh}
               style={{ width: '100%' }}
               showsVerticalScrollIndicator={false}
               data={data?.seeFeed?.photos}
               keyExtractor={(photo) => String(photo.id)}
               renderItem={renderPhoto}
            />
         </ScreenLayoutComponent>
      </PageLayoutComponent>
   );
};

export default Feed;
