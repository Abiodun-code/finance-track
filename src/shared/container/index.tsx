import { View, ViewProps } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Colors} from '@/constants/Colors';

interface Props {
  children: React.ReactNode,
  bgColor?: string,
  padX?: number,
}
const Container = ({ children, bgColor, padX }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: bgColor || Colors.white, paddingHorizontal: padX }}>
      <SafeAreaView style={{flex:1}}>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default Container