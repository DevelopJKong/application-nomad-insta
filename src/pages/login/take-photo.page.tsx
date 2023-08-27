import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Camera, CameraType } from 'expo-camera';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { CameraTypeToFacingMode } from 'expo-camera/build/WebConstants';

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

const TakePhoto = () => {
   const [ok, setOk] = useState(false);
   const [cameraType, setCameraType] = useState(CameraType.back);
   const [zoom, setZoom] = useState(0);
   const [flashMode, setFlashMode] = useState('off');
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

   const onFlashChange = () => {};

   useEffect(() => {
      getPermissions();
   }, []);

   return (
      <Container>
         <Camera type={cameraType} style={{ flex: 1 }} zoom={zoom} />
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
               <TouchableOpacity onPress={onCameraSwitch}>
                  <Ionicons
                     name={cameraType === CameraType.front ? 'camera-reverse' : 'camera'}
                     size={30}
                     color={'white'}
                  />
               </TouchableOpacity>
            </ButtonsContainer>
         </Actions>
      </Container>
   );
};

export default TakePhoto;
