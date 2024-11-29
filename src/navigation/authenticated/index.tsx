import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AUTHENTICATED_PARAM, AUTHENTICATED_PATH } from '@/types/authenticated'
import { AUTHENTICATED_STACK } from './stackData'
import BottomTab from './bottomTab'

const {Navigator, Screen} = createNativeStackNavigator<AUTHENTICATED_PARAM>()

const Authenticated = () => {

  const Screens = AUTHENTICATED_STACK.map((item, index)=>(
    <Screen key={index} name={item.name} component={item.screen}/>
  ))

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={AUTHENTICATED_PATH.Navigation} component={BottomTab}/>
      {Screens}
    </Navigator>
  )
}

export default Authenticated