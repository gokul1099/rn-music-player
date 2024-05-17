import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme'
import TrackPlayerFooter from '../../components/trackPlayer/TrackPlayerFooter'
const HomeView = () => {
  return (
    <View style={{flex:1,backgroundColor:Theme.colors.secondary}}>
      <TrackPlayerFooter />
    </View>
  )
}

export default HomeView