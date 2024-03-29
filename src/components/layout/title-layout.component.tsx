import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

interface IProfileLayoutComponent {
   children: React.ReactNode;
   title: string;
}

const Container = styled.SafeAreaView`
   flex: 1;
   background-color: black;
`;

const TitleWrapper = styled.View`
   width: 100%;
   height: 70px;
   justify-content: center;
   align-content: center;
   position: relative;
`;

const Title = styled.Text`
   width: 100%;
   text-align: center;
   line-height: 50px;
   color: white;
   font-size: 18px;
   height: 50px;
`;

const RightArrow = styled.Pressable`
   position: absolute;
   width: 50px;
   height: 50px;
   justify-content: center;
   align-items: center;
   left: 10px;
`;

const TitleLayoutComponent = ({ children, title }: IProfileLayoutComponent) => {
   const navigation = useNavigation();
   return (
      <Container>
         <TitleWrapper>
            <Title>{title}</Title>
            <RightArrow onPress={() => navigation.goBack()}>
               <Entypo name='chevron-left' size={24} color='white' />
            </RightArrow>
         </TitleWrapper>

         {children}
      </Container>
   );
};

export default TitleLayoutComponent;
