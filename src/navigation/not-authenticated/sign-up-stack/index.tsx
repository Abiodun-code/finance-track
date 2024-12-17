import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NOT_AUTHENTICATED_PARAM, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'
import { FirstName, LastName, SignUp, VerifyOtp } from '@/screens/not-authenticated'

const {Navigator, Screen} = createNativeStackNavigator<NOT_AUTHENTICATED_PARAM>()

const SignUpStack = () => {
  return (
    <Navigator screenOptions={{headerShown:false}} initialRouteName={NOT_AUTHENTICATED_PATH.SignUp}>
      <Screen name={NOT_AUTHENTICATED_PATH.SignUp} component={SignUp}/>
      <Screen name={NOT_AUTHENTICATED_PATH.FirstName} component={FirstName} />
      <Screen name={NOT_AUTHENTICATED_PATH.LastName} component={LastName} />
      <Screen name={NOT_AUTHENTICATED_PATH.VerifyOtp} component={VerifyOtp} />
    </Navigator>
  )
}

export default SignUpStack