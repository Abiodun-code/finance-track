import { View, Text } from 'react-native'
import React from 'react'
import ConfigureWrapper from '@/components/configureWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './src/navigation'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { store } from '@/services/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <ConfigureWrapper>
        <SafeAreaProvider>
          <Main />
          <StatusBar style='light' />
        </SafeAreaProvider>
      </ConfigureWrapper>
    </Provider>
  )
}

export default App