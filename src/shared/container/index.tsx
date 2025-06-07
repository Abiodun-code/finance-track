import { Platform, View, ViewProps } from 'react-native';
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
    <SafeAreaView style={{ flex: 1, backgroundColor: bgColor || Colors.white, paddingTop: padT, paddingHorizontal: padX, paddingBottom: Platform.OS === 'ios' ? hp(-3.7) : hp(-7), }}>
      {/* <View
        style={{
          flex: 1,
          paddingHorizontal: padX,
          paddingTop: padT,
          // If you want some spacing at the bottom, use paddingBottom
          
        }}
      > */}
        {children}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Container
