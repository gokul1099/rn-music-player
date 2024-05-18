import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import TrackPlayer,{usePlaybackState,useIsPlaying, useActiveTrack, RepeatMode} from 'react-native-track-player'
import PlayIcon from '../../assets/icons/PlayIcon'
import PauseIcon from '../../assets/icons/PauseIcon'
import NextIcon from '../../assets/icons/NextIcon'
import PrevIcon from '../../assets/icons/PrevIcon'
import RepeatIcon from '../../assets/icons/RepeatIcon'
import { useActions } from '../../utils/useActions'
import { storeCurrentTrack } from '../../redux/modules/localState/actions'
import { Theme } from '../../utils/theme'
interface PlayerControlInterface{
    type: "expand" | "toggled"
}
const PlayerControl = ({type}:PlayerControlInterface) => {
    const actions = useActions({storeCurrentTrack})
    const  {playing,bufferingDuringPlay} = useIsPlaying()
    const [repeatMode,setRepeat] = React.useState<RepeatMode>()
    const setRepeatMode = async()=>{
       if(repeatMode === RepeatMode.Track){
        await TrackPlayer.setRepeatMode(RepeatMode.Off)
       }else{
        await TrackPlayer.setRepeatMode(RepeatMode.Track)
       }
       getRepeatMode()
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
    const getRepeatMode=async()=>{
        const mode = await TrackPlayer.getRepeatMode()
        setRepeat(mode == 0 ? RepeatMode.Off : RepeatMode.Track)
    }
    useEffect(()=>{
        
        getRepeatMode()
    },[])
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
                    <View>
                        {
                            type == "expand" ? 
                            (
                                <TouchableOpacity onPress={setRepeatMode}>
                                    <RepeatIcon color={repeatMode==1 ? Theme.colors.primary : "#ffffff"} />
                                </TouchableOpacity>
                                
                            ) : null
                        }
                    </View>
                    <TouchableOpacity onPress={onClickPlay}>
                        {
                            playing ? <PauseIcon color={type === "toggled" ? "#000000" : "#ffffff" }/> : <PlayIcon color={type === "toggled" ? "#000000" : "#ffffff"}/>
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