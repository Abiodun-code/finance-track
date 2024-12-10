import { View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {Button, Container, Title} from '@/shared/index'
import { hp, wp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { PROF_LIST } from './datas'
import { MaterialIcons } from '@expo/vector-icons'
import { Text } from 'react-native-paper'

const Setting = () => {
  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Title variant={'titleLarge'} color={Colors.white}>Profile</Title>
          <View style={{ backgroundColor: Colors.white, borderRadius: hp(7), padding:hp(7), marginVertical:hp(3) }}></View>
          <Title variant={'titleLarge'} textT={'capitalize'} color={Colors.white}>Syed Thomas</Title>
          <Title font={'i400'} textT={'capitalize'} color={Colors.white}>SyedThomas@gmail.com</Title>
        </View>
        <View style={{paddingTop:hp(5)}}>
          {PROF_LIST.map((item, index)=>(
            <Button mb={hp(2)} key={index} flexD='row' itemAlign='center' justContent='space-between'>
              <View  style={{flexDirection:'row', alignItems:'center', gap:hp(1)}}>
                <View style={{backgroundColor:item.bg, padding:hp(2), borderRadius:hp(2)}}><item.iconHome size={hp(3)} color={Colors.white} name={item.iconName}/></View>
                <Text style={{color:Colors.white, fontFamily:'i500'}} variant='titleMedium'>{item.name}</Text>
              </View>
              <MaterialIcons name='arrow-forward-ios' color={Colors.white} size={hp(3)}/>
            </Button>
          ))}
        </View>
      </ScrollView>
    </Container>
  )
}

export default Setting