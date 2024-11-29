import { View, Text } from 'react-native'
import React from 'react'
import ConfigureWrapper from '@/components/configureWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './src/navigation'

const App = () => {
  return (
    <ConfigureWrapper>
      <SafeAreaProvider>
        <Main/>
      </SafeAreaProvider>
    </ConfigureWrapper>
  )
}

export default App