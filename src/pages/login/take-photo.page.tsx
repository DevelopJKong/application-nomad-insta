import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Container = styled.View`
   flex: 1;
   background-color: black;
`;

const Actions = styled.View`
   flex: 0.35;
   justify-content: space-between;
   align-items: center;
   padding: 0 50px;
`;

const TakePhotoBtn = styled.TouchableOpacity`
   width: 70px;
   height: 70px;
   background-color: #fff;
   border-radius: 50px;
   border: 1px solid rgba(255, 255, 255, 0.8);
   opacity: 0.5;
`;

const SliderContainer = styled.View``;

const ButtonsContainer = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;
const ActionsContainer = styled.View`
   flex-direction: row;
`;

const CloseButton = styled.TouchableOpacity`
   position: absolute;
   top: 50px;
   left: 20px;
`;

const TakePhoto = () => {
   // ! 기본 state 모음
   const [_ok, setOk] = useState(false);
   const [cameraType, setCameraType] = useState(CameraType.back);
   const [zoom, setZoom] = useState(0);
   const [flashMode, setFlashMode] = useState('off');

   const isFocused = useIsFocused();

   // ! navigation 모음
   const navigation = useNavigation<any>();

   const getPermissions = async () => {
      const permissions = await Camera.requestCameraPermissionsAsync();
      setOk(permissions.granted);
   };

   const onCameraSwitch = () => {
      if (cameraType === CameraType.back) {
         setCameraType(CameraType.front);
      } else {
         setCameraType(CameraType.back);
      }
   };

   const onZoomValueChange = (e: number) => {
      setZoom(e);
   };

   const onFlashChange = () => {
      if (flashMode === FlashMode.on) {
         // on
         setFlashMode(FlashMode.off);
      } else if (flashMode === FlashMode.off) {
         // off
         setFlashMode(FlashMode.auto);
      } else if (flashMode === FlashMode.auto) {
         // auto
         setFlashMode(FlashMode.on);
      }
   };

   useEffect(() => {
      getPermissions();
   }, []);

   return (
      <Container>
         <StatusBar hidden={true} />
         {isFocused && (
            <Camera
               type={cameraType}
               style={{ flex: 1 }}
               zoom={zoom}
               flashMode={
                  flashMode === FlashMode.off
                     ? FlashMode.off
                     : flashMode === FlashMode.on
                     ? FlashMode.on
                     : FlashMode.auto
               }
            />
         )}
         <CloseButton onPress={() => navigation.navigate('Tabs')}>
            <Ionicons name='close' color='white' size={30} />
         </CloseButton>
         <Actions>
            <SliderContainer>
               <Slider
                  style={{ width: 200, height: 40 }}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor='#FFFFFF'
                  maximumTrackTintColor='rgba(255, 255, 255, 0.5)'
                  onValueChange={onZoomValueChange}
               />
            </SliderContainer>
            <ButtonsContainer>
               <TakePhotoBtn />
               <ActionsContainer>
                  {Platform.OS === 'ios' && (
                     <TouchableOpacity onPress={onFlashChange} style={{ marginRight: 30 }}>
                        <Ionicons
                           size={30}
                           color='white'
                           name={
                              flashMode === FlashMode.off ? 'flash-off' : flashMode === FlashMode.on ? 'flash' : 'eye'
                           }
                        />
                     </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={onCameraSwitch}>
                     <Ionicons
                        name={cameraType === CameraType.front ? 'camera-reverse' : 'camera'}
                        size={30}
                        color={'white'}
                     />
                  </TouchableOpacity>
               </ActionsContainer>
            </ButtonsContainer>
         </Actions>
      </Container>
   );
};

export default TakePhoto;
