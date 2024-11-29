import { View } from 'react-native'
import React from 'react'
import {Button, Container, Title} from '@/shared/index'
import { Text } from 'react-native-paper'
import { hp } from '@/utils/responsiveHelper'
import { SOCIAL_HANDLER } from './datas'
import { Colors } from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { NOT_AUTH_PROP } from '@/types/not-authenticated'

const Onboarding = ({navigation}:NOT_AUTH_PROP) => {
  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <View style={{flex: 1}}>
        <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
          <Title color={Colors.white} variant='titleLarge'>Finance Track</Title>
        </View>
        <View style={{flex:1, justifyContent:'flex-end'}}>
          {SOCIAL_HANDLER.map((item, index)=>(
            <Button  key={index} p={hp(2)} mb={hp(2)} borderW={hp(.2)} borderC={Colors.white} press={()=>navigation.navigate(item.path)}>
              <Title font='i500' color={Colors.white}>{item.title}</Title>
            </Button>
          ))}
        </View>
      </View>
      <StatusBar style='light'/>
    </Container>
  )
}

export default Onboarding