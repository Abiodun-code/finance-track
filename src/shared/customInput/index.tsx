import { View } from 'react-native'
import React from 'react'
import { TextInput, TextInputProps } from 'react-native-paper'
import {Colors} from '@/constants/Colors'
import { hp } from '@/utils/responsiveHelper'

interface CustomTextProps extends TextInputProps {
  label?: string,
  disabled?: boolean,
  mb?: number
  bg?: any,
  bgColor?: any,
}
const CustomInput: React.FC<CustomTextProps> = ({
  label,
  disabled,
  mb,
  bg,
  bgColor,
  ...props
}) => {

  return (
    <View style={{ marginBottom: mb || hp(2.5), flexDirection:'row' }}>
      <TextInput label={label} style={{ backgroundColor: bgColor || Colors.white, fontSize: hp(1.9), flex:1 }}
        outlineStyle={{ borderRadius: hp(1.5), borderColor: bg || Colors.grey }} mode='outlined'
        textColor={Colors.black} activeOutlineColor={Colors.black} disabled={disabled}
        {...props}
      />
    </View>
  )
}

export default CustomInput