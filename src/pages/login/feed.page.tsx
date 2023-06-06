import React from 'react';
import styled from 'styled-components/native';
import { gql, useQuery } from '@apollo/client';
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from '../../fragments';
import useLogout from '../../hooks/use-logout.hook';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const SText = styled.Text`
   color: white;
`;

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
   const { data } = useQuery(FEED_QUERY);
   console.log(data);
   const { logout } = useLogout();
   return (
      <Container>
         <SText>HELLO</SText>
         <TouchableOpacity
            onPress={logout}
            style={{
               backgroundColor: 'white',
               padding: 10,
               borderRadius: 5,
               marginTop: 20,
            }}
         >
            <SText>LOGOUT</SText>
         </TouchableOpacity>
      </Container>
   );
};

export default Feed;
