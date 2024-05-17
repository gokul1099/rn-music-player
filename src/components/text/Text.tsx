import React from 'react';
import { Text, View,StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../utils/theme';
type Variant = 'primary' | 'secondary';

interface TextVariant {
    fontSize?: number;
    color?: string;
    fontWeight?: string;
  }
  
  const variants: Record<string, TextVariant> = {
    primary: {
      fontSize: Theme.fontSize.primary,
      color: Theme.colors.secondary,
      fontWeight:"bold"
    },
    secondary: {
      fontSize:Theme.fontSize.secondary,
      color: Theme.colors.secondary,
    },
  };

  interface TextProps {
    children: string;
    variant?: keyof typeof variants; // Use keyof to access variant names
    style?: TextStyle; // Allow overriding styles
  }

  const CustomText: React.FC<TextProps> = ({ children, variant = 'primary', style }) => {
    const textStyle = { ...variants[variant], ...style }; // Combine variant and custom styles
  
    return <Text ellipsizeMode="tail" numberOfLines={2} style={textStyle}>{children}</Text>;
  };


export default CustomText;
