import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface ITabIcon {
   iconName: keyof typeof Ionicons.glyphMap | undefined;
   color: string;
   focused: boolean;
}

const TabIcon = ({ iconName, color, focused }: ITabIcon) => {
   return (
      <Ionicons
         name={focused ? iconName : (`${iconName}-outline` as keyof typeof Ionicons.glyphMap)}
         color={color}
         size={focused ? 22 : 20}
      />
   );
};

export default TabIcon;
