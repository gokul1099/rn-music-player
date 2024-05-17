import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import TrackPlayer,{usePlaybackState,useIsPlaying} from 'react-native-track-player'
import PlayIcon from '../../assets/icons/PlayIcon'
import PauseIcon from '../../assets/icons/PauseIcon'
import NextIcon from '../../assets/icons/NextIcon'
import PrevIcon from '../../assets/icons/PrevIcon'
interface PlayerControlInterface{
    type: "expand" | "toggled"
}
const PlayerControl = ({type}:PlayerControlInterface) => {
    const  {playing,bufferingDuringPlay} = useIsPlaying()
    const getQueue = async()=>{
        const queue =await TrackPlayer.getQueue()
    }
    
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        {
            bufferingDuringPlay ? <ActivityIndicator />:
            (
                <View style={{width:"100%",flexDirection:"row",justifyContent:"space-around"}}>
                    <View>
                        {
                            type == "expand" ? 
                            (
                                <TouchableOpacity onPress={()=>TrackPlayer.skipToPrevious()}>
                                    <PrevIcon />
                                </TouchableOpacity>
                                
                            ) : null
                        }
                    </View>
                    <TouchableOpacity onPress={()=>playing ? TrackPlayer.pause() : TrackPlayer.play()}>
                        {
                            playing ? <PauseIcon/> : <PlayIcon />
                        }
                    </TouchableOpacity>
                    <View>
                        {
                            type == "expand" ? 
                            (
                                <TouchableOpacity onPress={()=>TrackPlayer.skipToNext()}>
                                    <NextIcon />
                                </TouchableOpacity>
                                
                            ) : null
                        }
                    </View>
                </View>
            )
            
        }
    </View>
  )
}

export default PlayerControl