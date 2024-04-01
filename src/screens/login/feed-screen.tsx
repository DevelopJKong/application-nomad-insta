import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from '../../fragments';
import { FlatList, TouchableOpacity } from 'react-native';
import PageLayoutComponent from '../../components/layout/page-layout';
import ScreenLayout from '../../components/layout/screen-layout';
import PhotoComponent from '../../components/photo/photo';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';

const SEE_FEED_QUERY = gql`
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

const Feed = ({ navigation }: any) => {
   const [pageCount, setPageCount] = useState<number>(2);
   const [refreshing, setRefreshing] = useState<boolean>(false);

   const { data, loading, refetch, fetchMore } = useQuery(SEE_FEED_QUERY, {
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
      setPageCount(2);
      await refetch();
      setRefreshing(false);
   };

   const MessageButton = () => (
      <TouchableOpacity
         style={{ marginRight: 25 }}
         onPress={() => {
            navigation.navigate('Messages');
         }}
      >
         <Ionicons name='paper-plane' size={24} color='white' />
      </TouchableOpacity>
   );

   return (
      <PageLayoutComponent HeaderRight={MessageButton}>
         <ScreenLayout loading={loading}>
            <FlatList
               onEndReachedThreshold={0.7}
               onEndReached={() => {
                  if (data?.seeFeed?.photos?.length < pageCount) return;
                  setPageCount(pageCount + 1);
                  fetchMore({
                     variables: {
                        seeFeedInput: {
                           page: pageCount,
                        },
                     },
                  });
               }}
               refreshing={refreshing}
               onRefresh={refresh}
               style={{ width: '100%' }}
               showsVerticalScrollIndicator={false}
               data={data?.seeFeed?.photos}
               keyExtractor={(photo) => String(photo.id)}
               renderItem={renderPhoto}
            />
         </ScreenLayout>
      </PageLayoutComponent>
   );
};

export default Feed;
