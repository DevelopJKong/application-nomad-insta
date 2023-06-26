import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { isLoggedInVar } from '../apollo';
import useLogout from './use-logout.hook';

const ME_QUERY = gql`
   query me {
      me {
         id
         username
         avatar
      }
   }
`;

export default function useMe() {
   const hasToken = useReactiveVar(isLoggedInVar);

   const { logout } = useLogout();

   const { data } = useQuery(ME_QUERY, {
      skip: !hasToken,
   });
   useEffect(() => {
      if (data?.me === null) {
         logout();
      }
   }, [data]);
   return { data };
}
