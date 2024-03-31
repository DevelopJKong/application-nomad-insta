import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styled';
import { ActivityIndicator } from 'react-native';

interface IAuthButton {
   onPress: () => void;
   disabled?: boolean;
   text: string;
   loading?: boolean;
}

const ButtonAccount = styled.TouchableOpacity`
   background-color: ${colors.blue};
   padding: 15px 10px;
   margin-top: 10px;
   border-radius: 3px;
   width: 100%;
   opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

const ButtonAccountText = styled.Text`
   color: white;
   font-weight: 600;
   text-align: center;
`;

const AuthButton = ({ onPress, disabled, text, loading }: IAuthButton) => {
   return (
      <ButtonAccount disabled={disabled} onPress={onPress}>
         {loading ? <ActivityIndicator color={'white'} /> : <ButtonAccountText>{text}</ButtonAccountText>}
      </ButtonAccount>
   );
};

export default AuthButton;
