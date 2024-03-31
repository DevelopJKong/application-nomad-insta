import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import * as MediaLibrary from 'expo-media-library';
import { FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styled';
import { StatusBar } from 'expo-status-bar';

const Container = styled.View`
   flex: 1;
   background-color: black;
`;

const Top = styled.View`
   flex: 1;
   background-color: black;
`;

const Bottom = styled.View`
   flex: 1;
   background-color: black;
`;

const ImageContainer = styled.TouchableOpacity``;

const IconContainer = styled.View`
   position: absolute;
`;

const HeaderRightText = styled.Text`
   color: ${colors.blue};
   font-size: 18px;
`;

const SelectPhoto = ({ navigation }: any) => {
   // ! 기본 state 모음
   const [_ok, setOk] = useState<boolean>(false);
   const [photos, setPhotos] = useState<any>([]);
   const [chosenPhoto, setChosenPhoto] = useState<string>(
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914617/noticon/edqjxqjzqjzqjzqjzqjz.png',
   );

   // ! 기본 변수 모음
   const numColumns = 4;

   // ! dimension 모음
   const { width } = useWindowDimensions();

   // ! 기본 함수 모음
   const getPhotos = async () => {
      const { assets: photos } = await MediaLibrary.getAssetsAsync();
      setPhotos(photos);
      setChosenPhoto(photos[0]?.uri);
   };

   const getPermissions = async () => {
      const { status } = await MediaLibrary.getPermissionsAsync();
      if (status !== 'granted') {
         const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
         if (accessPrivileges !== 'none') {
            setOk(true);
            getPhotos();
         }
      } else {
         setOk(true);
         getPhotos();
      }
   };

   const choosePhoto = (uri: string) => {
      setChosenPhoto(uri);
   };

   const renderItem = ({ item: photo }: any) => {
      return (
         <ImageContainer
            onPress={() => {
               choosePhoto(photo.uri);
            }}
         >
            <Image source={{ uri: photo.uri }} style={{ width: width / numColumns, height: 100 }} />
            <IconContainer>
               <Ionicons name='checkmark-circle' size={18} color={photo.uri === chosenPhoto ? colors.blue : 'white'} />
            </IconContainer>
         </ImageContainer>
      );
   };

   const HeaderRight = () => (
      <TouchableOpacity
         onPress={() =>
            navigation.navigate('UploadForm', {
               file: chosenPhoto,
            })
         }
      >
         <HeaderRightText>Next</HeaderRightText>
      </TouchableOpacity>
   );

   useEffect(() => {
      getPermissions();
   }, []);

   useEffect(() => {
      navigation.setOptions({
         headerRight: HeaderRight,
      });
   }, [chosenPhoto]);

   return (
      <Container>
         <StatusBar hidden={false} />
         <Top>
            {chosenPhoto !== '' ? (
               <Image source={{ uri: chosenPhoto }} style={{ width: '100%', height: '100%' }} />
            ) : null}
         </Top>
         <Bottom>
            <FlatList
               data={photos}
               keyExtractor={(photo) => photo.id}
               renderItem={renderItem}
               numColumns={numColumns}
            />
         </Bottom>
      </Container>
   );
};

export default SelectPhoto;
