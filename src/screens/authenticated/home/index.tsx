import { ScrollView, View } from 'react-native'
import React from 'react'
import {Button, Container, Title} from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import UserHeader from './components/userHeader'
import { BAL_SPEND } from './datas'
import { getStatusColor } from '@/utils/getStatusColor'

const Home = () => {
  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <UserHeader/>
      <ScrollView contentContainerStyle={{paddingVertical:hp(2)}}>
        <View style={{backgroundColor:Colors.white, padding:hp(3), borderRadius:hp(3)}}>
          <View style={{paddingBottom:hp(2)}}>
            <Title textA={'left'} textT={'capitalize'}>Total Balance</Title>
            <Title textA={'left'} textT={'capitalize'} variant={'headlineLarge'}>$ 334.00</Title>
          </View>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
            {BAL_SPEND.map((item, index)=>(
              <Button key={index} flexD='column' itemAlign='left'>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <View style={{padding:hp(1), backgroundColor:Colors.blue, borderRadius:hp(5), marginRight:hp(1)}}><item.iconHome name={item.iconName} size={hp(2)} color={Colors.white} /></View>
                  <Text style={{fontFamily:'i500', textTransform:'capitalize'}} variant='titleMedium'>{item.name}</Text>
                </View>
                <View>
                  <Text style={[{fontFamily:'i700'},getStatusColor(item.name)]} variant='titleMedium'>{item.amount}.00</Text>
                </View>
              </Button>
            ))}
          </View>
        </View>
        <View style={{paddingTop:hp(2)}}>
          <Title color={Colors.white} textA={'left'} textT={'capitalize'} font={'i400'}>Recent Transactions</Title>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Home