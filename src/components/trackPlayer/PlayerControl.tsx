import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import TrackPlayer,{usePlaybackState,useIsPlaying} from 'react-native-track-player'
import PlayIcon from '../../assets/icons/PlayIcon'
import PauseIcon from '../../assets/icons/PauseIcon'
import NextIcon from '../../assets/icons/NextIcon'
import PrevIcon from '../../assets/icons/PrevIcon'
import { useActions } from '../../utils/useActions'
import { storeCurrentTrack } from '../../redux/modules/localState/actions'
interface PlayerControlInterface{
    type: "expand" | "toggled"
}
const PlayerControl = ({type}:PlayerControlInterface) => {
    const actions = useActions({storeCurrentTrack})
    const  {playing,bufferingDuringPlay} = useIsPlaying()
    const getQueue = async()=>{
        const queue =await TrackPlayer.getQueue()
    }
    const onClickPlay = async()=>{
        if(playing){
            await TrackPlayer.pause()
        }else{
            await TrackPlayer.play()
            const activeTrack = await TrackPlayer.getActiveTrack()
            const position = await TrackPlayer.getProgress()
            const index = await TrackPlayer.getActiveTrackIndex()
            actions.storeCurrentTrack({track: activeTrack, position:position?.position, index})
        }
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
                    <TouchableOpacity onPress={onClickPlay}>
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