import { View } from 'react-native'
import React from 'react'
import {Button, Container, Title} from "@/shared/index"
import { hp, wp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
const Wallet = () => {
  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
        <Title color={Colors.white} variant={'displayMedium'} font={'i500'}>$334.00</Title>
        <Title color={Colors.white} font={'i400'}>Total Balance</Title>
      </View>
      <View style={{backgroundColor:Colors.grey,  justifyContent:'flex-end', flex:1, borderTopRightRadius:hp(2), borderTopLeftRadius:hp(2)}}>
        <View style={{ flex: 1, padding: hp(2), marginHorizontal:'auto' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
            <Text style={{ color: Colors.white, fontFamily: 'i500' }} variant='titleLarge'>My Wallet</Text>
            <View style={{ padding: hp(2), backgroundColor: Colors.blue, borderRadius: hp(6) }}>
              <AntDesign name='find' color={Colors.white} />
            </View>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default Wallet