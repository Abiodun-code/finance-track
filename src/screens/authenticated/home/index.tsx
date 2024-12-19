import { Alert, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import {Button, Container, Title} from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import UserHeader from './components/userHeader'
import { BAL_SPEND, REC_TRAN } from './datas'
import { getStatusBgColor, getStatusColor } from '@/utils/getStatusColor'
import { truncateText } from '@/utils/truncateText'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import useCurrentUser from '@/hooks/useCurrentUser'
import { logoutUser } from '@/services/store/not-authenticated/loginSlice'

const Home = () => {
  const { currentUser, currentUserIsLoading } = useCurrentUser();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch<any>(logoutUser())
  }
  
  return (
    <Container padX={hp(2)} bgColor={Colors.black}>
      <UserHeader/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: hp(2) }}>
        <View style={{backgroundColor:Colors.white, padding:hp(3), borderRadius:hp(3)}}>
          <View style={{paddingBottom:hp(2)}}>
            <Title textA={'left'} textT={'capitalize'}>Total Balance</Title>
            <Title textA={'left'} textT={'capitalize'} variant={'headlineLarge'}>$ 334.00</Title>
          </View>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
            {BAL_SPEND.map((item, index)=>(
              <Button key={index} flexD='column' itemAlign='left'>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <View style={{padding:hp(.8), backgroundColor:Colors.gray, borderRadius:hp(5), marginRight:hp(1)}}><item.iconHome name={item.iconName} size={hp(2)} color={Colors.white} /></View>
                  <Text style={{ fontFamily: 'i500', textTransform: 'capitalize' }} variant='titleMedium'>{item.name}</Text>
                </View>
                <View>
                  <Text style={[{fontFamily:'i700'},getStatusColor(item.name)]} variant='titleMedium'>{item.amount}.00</Text>
                </View>
              </Button>
            ))}
          </View>

          <Button bg={'red'} press={handleLogout}>
            <Text style={{ fontFamily: 'i500', textTransform: 'capitalize' }} variant='titleMedium'>gggggg</Text>
          </Button>
        </View>
        <View style={{paddingTop:hp(2)}}>
          <Title color={Colors.white} textA={'left'} textT={'capitalize'} font={'i400'}>Recent Transactions</Title>
          <View style={{paddingTop:hp(2)}}>
            {REC_TRAN.map((item, index)=>(
              <Button borderR={hp(2)} p={hp(1.2)} bg={Colors.grey} mb={hp(1)} key={index} flexD='row' justContent='space-between' itemAlign='center'>
                <View style={{flexDirection:'row', alignItems:'center', gap:hp(1)}}>
                  <View style={[{padding:hp(2), borderRadius:hp(2)}, getStatusBgColor(item.type)]}><item.iconHome name={item.iconName} size={hp(3)} color={Colors.white} /></View>
                <View>
                    <Text variant='titleMedium' style={{ fontFamily: 'i700', color: Colors.white }}>{item.name}</Text>
                    <Text variant='titleSmall' style={{ fontFamily: 'i500', color: Colors.white }}>{truncateText(item.desc, 13)}</Text>
                </View>
                </View>
                <View >
                  <Text variant='titleMedium' style={[{ fontFamily: 'i700', textAlign: 'right' }, getStatusColor(item.type)]}>{item.amount}</Text>
                  <Text variant='titleSmall' style={{ fontFamily: 'i400', color:Colors.white }}>{item.date}</Text>
                </View>
              </Button>
            ))}
          </View>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Home