import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NAVIGATION_DATA } from './stackData'
import CustomTab from '@/components/customTab'

const {Navigator, Screen} = createBottomTabNavigator()

const BottomTab = () => {

  const Screens = NAVIGATION_DATA.map((item, index)=>(
    <Screen key={index} name={item.name} component={item.screen}/>
  ))
  
  return (
    <Navigator screenOptions={{ headerShown: false }} tabBar={props => <CustomTab {...props} />}>
      {Screens}
    </Navigator>
  )
}

export default BottomTab