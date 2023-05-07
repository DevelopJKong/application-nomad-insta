import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../styled';
import AuthLayout from '../../components/auth/auth-layout.component';
import AuthButton from '../../components/auth/auth-button.component';
import { gql, useQuery } from '@apollo/client';

const LoginLink = styled.Text`
   color: ${colors.blue};
   font-weight: 600;
   margin-top: 20px;
`;

const Welcome = ({ navigation }: any) => {
   const HEALTH_CHECK = gql`
      query healthCheck {
         hi {
            ok
         }
      }
   `;
   useQuery(HEALTH_CHECK);
   const goToCreateAccount = () => navigation.navigate('CreateAccount');
   const goToLogin = () => navigation.navigate('Login');

   return (
      <AuthLayout>
         <AuthButton disabled={false} onPress={goToCreateAccount} text={'Create Account'} />
         <TouchableOpacity onPress={goToLogin}>
            <LoginLink>Log in</LoginLink>
         </TouchableOpacity>
      </AuthLayout>
   );
};

export default Welcome;
