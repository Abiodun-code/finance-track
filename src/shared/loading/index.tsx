import { Colors } from '@/constants/Colors'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
interface Props {
  color?: string,
  size?: any | number,
}
const Loading = ({ color, size }: Props) => {
  return (
    <ActivityIndicator animating={true} color={color || Colors.white} size={size || 'small'} />
  )
}

export default Loading