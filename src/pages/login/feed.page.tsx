import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from '../../fragments';
import { FlatList } from 'react-native';
import PageLayoutComponent from '../../components/layout/page-layout.component';
import ScreenLayoutComponent from '../../components/layout/screen-layout.component';
import PhotoComponent from '../../components/photo/photo.component';
import * as _ from 'lodash';

const FEED_QUERY = gql`
   query seeFeed($seeFeedInput: SeeFeedInput!) {
      seeFeed(input: $seeFeedInput) {
         ok
         message
         error
         photos {
            ...PhotoFragment
            user {
               username
               avatar
            }
            caption
            createdAt
            isMine
            comments {
               ...CommentFragment
            }
         }
      }
   }
   ${PHOTO_FRAGMENT}
   ${COMMENT_FRAGMENT}
`;

const Feed = () => {
   const [refreshing, setRefreshing] = useState<boolean>(false);

   const { data, loading, refetch, fetchMore } = useQuery(FEED_QUERY, {
      variables: {
         seeFeedInput: {
            page: 1,
         },
      },
   });

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
               onEndReachedThreshold={0.5}
               onEndReached={() =>
                  fetchMore({
                     variables: {
                        seeFeedInput: {
                           page: data?.seeFeed?.photos?.length,
                        },
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
