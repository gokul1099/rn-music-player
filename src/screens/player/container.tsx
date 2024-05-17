import React from 'react'
import PlayerView from './view'
import { SafeAreaView } from 'react-native-safe-area-context'
const PlayerContainer = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <PlayerView />
    </SafeAreaView>
    
  )
}

export default PlayerContainer