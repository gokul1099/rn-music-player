import { View,Image } from 'react-native'
import React, { useEffect } from 'react'
import TrackPlayer,{useActiveTrack} from 'react-native-track-player'
import Progress from '../../components/trackPlayer/Progress'
import PlayerControl from '../../components/trackPlayer/PlayerControl'
import { useRoute } from '@react-navigation/native'
import CustomText from '../../components/text/Text'
const PlayerView = () => {
  const route = useRoute()
  const track = useActiveTrack()
  return (
    <View style={{flex:1}}>
        <View style={{flex:0.2,justifyContent:"center",alignItems:"center"}}>
            <CustomText variant='primary'>
              {track?.title}
            </CustomText>
            <CustomText variant='secondry'>{track?.artist}</CustomText>
        </View>
        <View style={{flex:0.5}}>
          {
            track?.artwork && <Image source={{uri:track?.artwork}} style={{height:"100%",width:"100%"}}/>
          }
          
        </View>
        <View style={{flex:0.3}}>
          <Progress height={100}/>
          <PlayerControl type='expand'/>
        </View>
    </View>
  )
}

export default PlayerView