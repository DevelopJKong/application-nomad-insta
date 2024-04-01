import React from 'react';

import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
interface IScreenLayoutComponent {
   loading: boolean;
   children: React.ReactNode;
}

const Container = styled.View`
   background-color: black;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

const ScreenLayout = ({ loading, children }: IScreenLayoutComponent) => {
   return <Container>{loading ? <ActivityIndicator color='white' /> : children}</Container>;
};

export default ScreenLayout;
