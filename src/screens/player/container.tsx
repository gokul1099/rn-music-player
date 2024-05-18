import React from 'react'
import PlayerView from './view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { Theme } from '../../utils/theme'
const PlayerContainer = () => {
  return (
    <SafeAreaView style={Style.container}>
        <PlayerView />
    </SafeAreaView>
    
  )
}

const Style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Theme.colors.secondary
  }
})

export default PlayerContainer