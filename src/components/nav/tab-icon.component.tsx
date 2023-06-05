import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface ITabIcon {
   iconName: any;
   color: string;
   focused: boolean;
}

const TabIcon = ({ iconName, color, focused }: ITabIcon) => {
   return <Ionicons name={focused ? iconName : `${iconName}-outline`} color={color} size={focused ? 22 : 20} />;
};

export default TabIcon;
