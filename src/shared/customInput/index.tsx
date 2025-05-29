import { View } from 'react-native';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import { hp } from '@/utils/responsiveHelper';

interface CustomTextProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  mb?: number;
  bg?: any;
  bgColor?: any;
  width?: number | string; // new prop
  textColor?: string,
  borderW?: number | string;
}

const Input: React.FC<CustomTextProps> = ({
  label,
  disabled,
  mb,
  bg,
  bgColor,
  width,
  textColor,
  borderW,
  ...props
}) => {
  return (
    <View style={{ marginBottom: mb || hp(2.5), width: width  }}>
      <TextInput
        label={label}
        style={{
          backgroundColor: bgColor || Colors.white,
          fontSize: hp(1.9),
        }}
        outlineStyle={{
          borderRadius: hp(1.2),
          borderColor: bg || Colors.gray,
          borderWidth: hp(0.1) || borderW,
        }}
        mode="outlined"
        textColor={textColor || Colors.black}
        activeOutlineColor={Colors.black}
        disabled={disabled}
        {...props}
      />
    </View>
  );
};

export default Input;
