import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import * as MediaLibrary from 'expo-media-library';
import { FlatList, Image, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const SelectPhoto = () => {
   const [_ok, setOk] = useState<boolean>(false);
   const [photos, setPhotos] = useState<any>([]);
   const [chosenPhoto, setChosenPhoto] = useState<string>('');

   const numColumns = 4;
   const { width } = useWindowDimensions();

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
               <Ionicons name='checkmark-circle' size={18} color='white' />
            </IconContainer>
         </ImageContainer>
      );
   };

   useEffect(() => {
      getPermissions();
   }, []);

   console.log(photos);

   return (
      <Container>
         <Top>
            <Image source={{ uri: chosenPhoto }} style={{ width: '100%', height: '100%' }} />
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
