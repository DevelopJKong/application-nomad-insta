import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styled';

interface IAuthButton {
   onPress: () => void;
   disabled?: boolean;
   text: string;
}

const ButtonAccount = styled.TouchableOpacity`
   background-color: ${colors.blue};
   padding: 7px 15px;
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

const AuthButton = ({ onPress, disabled, text }: IAuthButton) => {
   return (
      <ButtonAccount disabled={disabled} onPress={onPress}>
         <ButtonAccountText>{text}</ButtonAccountText>
      </ButtonAccount>
   );
};

export default AuthButton;
