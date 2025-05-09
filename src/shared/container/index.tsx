import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

interface Props {
  children: React.ReactNode;
  bgColor?: string;
  padX?: number;
  padT?: number;
  padB?: number;
}

const Container = ({ children, bgColor, padX = 0, padT = 0, padB = 0 }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bgColor || Colors.white,
        paddingTop: padT + insets.top,
        paddingBottom: padB + insets.bottom,
        paddingHorizontal: padX,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
