import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import { Theme } from '../../utils/theme'


interface IProgress{
  height:number
}
const Progress = ({height}:IProgress) => {
    const {position,duration} = useProgress()
    const progressBarWidth = Dimensions.get('window').width * 0.92;

  return (
    <View >
      <Slider 
        style={{height,width:progressBarWidth}}
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor={Theme.colors.primary}
        minimumTrackTintColor={Theme.colors.primary}
        maximumTrackTintColor={Theme.colors.text}
        onSlidingComplete={TrackPlayer.seekTo}
        />

    </View>
  )
}

export default Progress