import { View,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import TrackPlayer,{useActiveTrack} from 'react-native-track-player'
import Progress from '../../components/trackPlayer/Progress'
import PlayerControl from '../../components/trackPlayer/PlayerControl'
import { useRoute } from '@react-navigation/native'
import CustomText from '../../components/text/Text'
import DownloadIcon from '../../assets/icons/DownloadIcon'
import useDownloadTrack from '../../hooks/useDownloadTrack'
import { Theme } from '../../utils/theme'
const PlayerView = () => {
  const route = useRoute()
  const track = useActiveTrack()
  const {downloadFile} = useDownloadTrack()
  return (
    <View style={{flex:1}}>
        
        <View style={{flex:0.6,margin:30}}>
          {
            track?.artwork && <Image source={{uri:track?.artwork||"https://picsum.photos/200/300"}} style={{height:"100%",width:"100%"}}/>
          }
        </View>
        <View style={Styles.contentContainer}>
          <View style={Styles.titleContent}>
            <CustomText variant='primary' style={{color:Theme.colors.white}}> {track?.title} </CustomText>
            <CustomText variant='secondry' style={{color:Theme.colors.white}}>{track?.artist}</CustomText>
          </View>
         {
          track?.url?.includes("https") && 
          <TouchableOpacity style={{flex:0.1}} onPress={()=>downloadFile(track?.url, track?.title)}>
            <DownloadIcon />
          </TouchableOpacity>
         }
          
        </View>
        <View style={{flex:0.2}}>
          <Progress height={100}/>
          <PlayerControl type='expand'/>
        </View>
        <View style={{flex:0.1}}></View>
    </View>
  )
}
const Styles = StyleSheet.create({
  contentContainer:{
    flex:0.1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  titleContent:{flex:0.9,justifyContent:"center",alignItems:"center"}
})

export default PlayerView