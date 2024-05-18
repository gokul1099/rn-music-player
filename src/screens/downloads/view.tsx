import { View, Text,StyleSheet, FlatList} from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TrackPlayer,{Track}from 'react-native-track-player'
import { Theme } from '../../utils/theme'
import TrackPlayerFooter from '../../components/trackPlayer/TrackPlayerFooter'
import TrackItem from '../../components/TrackItem'
const DownloadsScreen = () => {
  const {localSongs}=useSelector(state=>state.player)

  useEffect(()=>{
    if(localSongs?.data){
      const addTrack = async()=>{
        await TrackPlayer.add([...localSongs?.data as Track[]],0)
      }
      addTrack()
    }
  },[localSongs])
  return (
    <View style={Style.container}>
    <FlatList 
      style={{marginBottom:100}}
      data={localSongs?.data}
      renderItem={({item,index})=><TrackItem {...item} index={index}/>}
    />
    {
      localSongs?.data?.length>0 && <TrackPlayerFooter />
    }
    
  </View>
  )
}

const Style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Theme.colors.secondary
  }
})
export default DownloadsScreen