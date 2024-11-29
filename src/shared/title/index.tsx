import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import {  MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { hp } from '@/utils/responsiveHelper';

interface Props {
  children: React.ReactNode;
  font?: any;
  variant?: any | undefined;
  color?: any | undefined;
  showIcon?: boolean;
  textA?: any | undefined;
  textT?: any | undefined;
  iconBg?: string | undefined;
  iconSize?: number | undefined;
  iconP?: number | undefined;
  iconR?: number | undefined;
  iconColor?: string | undefined;
}

const Title = ({ children, font, variant, color, showIcon = false, textA, textT, iconSize, iconBg, iconP, iconR, iconColor }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {showIcon && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: iconBg, padding: iconP, borderRadius: iconR}}>
          <MaterialIcons name="arrow-back-ios-new" size={iconSize || hp(3)} color={iconColor || "black"} />
        </TouchableOpacity>
      )}

      <Text
        variant={variant || 'titleMedium'}
        style={{ fontFamily: font || 'i700', color: color, textAlign: textA || 'center', flex: 1, textTransform: textT }}
      >
        {children}
      </Text>
    </View>
  );
};

export default Title;