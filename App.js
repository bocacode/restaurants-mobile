import React from 'react'
import { ImageBackground } from 'react-native'
import HomeScreen from './screens/HomeScreen'

export default function App() {
  // console.log('this is the platform', Platform.OS == 'ios' ? true : false)

  return (
    <ImageBackground source={require('./assets/bk.jpg')} style={{ display: 'flex', height: '100%' }}>
      <HomeScreen />
    </ImageBackground>
  )
}
