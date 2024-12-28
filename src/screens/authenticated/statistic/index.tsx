import { View, Text } from 'react-native'
import React from 'react'
import { Container, Title } from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'

const Statistic = () => {
  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <View style={{ paddingTop: hp(2) }}>
        <Title variant={'titleLarge'} color={Colors.white}>Statistics</Title>
      </View>
    </Container>
  )
}

export default Statistic