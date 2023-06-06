import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from '../../fragments';
import useLogout from '../../hooks/use-logout.hook';
import { FlatList, Text, View } from 'react-native';
import PageLayoutComponent from '../../components/layout/page-layout.component';
import ScreenLayoutComponent from '../../components/layout/screen-layout.componen';

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
   const { data, loading } = useQuery(FEED_QUERY);
   console.log(data?.seeFeed?.photos);
   const { logout } = useLogout();

   const renderPhoto = ({ item: photo }: any) => {
      return (
         <View style={{ flex: 1 }}>
            <Text style={{ color: 'white' }}>{photo.caption}</Text>
         </View>
      );
   };

   return (
      <PageLayoutComponent>
         <ScreenLayoutComponent loading={loading}>
            <FlatList data={data?.seeFeed?.photos} keyExtractor={(photo) => photo.id} renderItem={renderPhoto} />
         </ScreenLayoutComponent>
      </PageLayoutComponent>
   );
};

export default Feed;
