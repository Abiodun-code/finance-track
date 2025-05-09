import { View, ViewProps } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { hp } from '@/utils/responsiveHelper';

interface Props {
  children: React.ReactNode,
  bgColor?: string,
  padX?: number,
  padT?:number
}
const Container = ({ children, bgColor, padX, padT }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: bgColor || Colors.white, paddingHorizontal: padX, paddingTop:padT, marginBottom:hp(-4)}}>
      <SafeAreaView style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default Container
