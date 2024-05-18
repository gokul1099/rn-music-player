import { View, Text,Image ,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import CustomText from './text/Text'
import TrackPlayer, { useActiveTrack } from 'react-native-track-player'
import { useNavigation } from '@react-navigation/native'

interface ITrackItem{
    url:string,
    album:string,
    artist:string,
    duration:number,
    id:string,
    title:string,
    artwork:string,
    index:number,
    source:string
}

const TrackItem = (track:ITrackItem) => {
    const activeTrack = useActiveTrack()
    const navigation = useNavigation()
  const onPressTrack = async()=>{
    if(track.source === "Search"){
      await TrackPlayer.add(track,1)
      await TrackPlayer.skip(1)
      navigation.navigate("Player")
      
    }else{
      if(activeTrack?.id != track?.id){
        await TrackPlayer.skip(track.index)
    }
    }
    
  }
  return (
    <TouchableOpacity style={Style.container} onPress={onPressTrack}>
      <View style={{flex:0.2}}>
        {
          track?.artwork &&  <Image source={{uri:track.artwork}} style={{height:"100%",width:"100%"}}/>

        }
      </View>
      <View style={Style.contentContainer}>
            <CustomText variant='primary' style={{color:"white",fontSize:18}}>{track.title}</CustomText>
            <CustomText variant='secondary' style={{color:"white",fontSize:18}}>{track.artist}</CustomText>
      </View>
    </TouchableOpacity>
  )
}

const Style=StyleSheet.create({
    container:{flex:1,flexDirection:"row",margin:10},
    contentContainer:{flex:0.8,marginLeft:10}
})

export default TrackItem