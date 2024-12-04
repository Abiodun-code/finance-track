import { View, Text } from 'react-native'
import React from 'react'
import ConfigureWrapper from '@/components/configureWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './src/navigation'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <ConfigureWrapper>
      <SafeAreaProvider>
        <Main/>
        <StatusBar style='light'/>
      </SafeAreaProvider>
    </ConfigureWrapper>
  )
}

export default App