import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NotAuthenticated from './not-authenticated'
import Authenticated from './authenticated'

const Main = () => {
  return (
    <NavigationContainer>
      <NotAuthenticated/>
    </NavigationContainer>
  )
}

export default Main