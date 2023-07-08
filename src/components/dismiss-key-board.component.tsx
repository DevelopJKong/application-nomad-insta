import { TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import React from 'react';

interface IDismissKeyBoardComponent {
   children: React.ReactNode;
}

const DismissKeyBoardComponent = ({ children }: IDismissKeyBoardComponent) => {
   const dismissKeyboard = () => {
      Keyboard.dismiss();
   };
   return (
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard} disabled={Platform.OS === 'web'}>
         {children}
      </TouchableWithoutFeedback>
   );
};

export default DismissKeyBoardComponent;
