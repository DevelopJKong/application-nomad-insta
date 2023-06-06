import React from 'react';
import styled from 'styled-components/native';
import useLogout from '../../hooks/use-logout.hook';
import { useNavigation } from '@react-navigation/native';
import { NavRootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const SText = styled.Text`
   color: white;
`;

const Button = styled.TouchableOpacity`
   width: 100px;
   height: 50px;
   background-color: white;
   color: black;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
`;

const ButtonText = styled.Text`
   color: black;
`;

type NavigationType = NativeStackNavigationProp<NavRootStackParamList, 'LoggedInStacks', 'Profile'>;

const Feed = () => {
   const { logout } = useLogout();
   const navigation = useNavigation<NavigationType>();
   return (
      <Container>
         <SText>HELLO</SText>
         <Button onPress={logout}>
            <ButtonText>Logout</ButtonText>
         </Button>
         <Button
            onPress={() =>
               navigation.navigate('LoggedInStacks', {
                  screen: 'Profile',
               })
            }
         >
            <ButtonText>navigate</ButtonText>
         </Button>
      </Container>
   );
};

export default Feed;
