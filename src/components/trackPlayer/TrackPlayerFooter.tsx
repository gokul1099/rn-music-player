import { View, Text,Image, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Theme } from '../../utils/theme'
import TrackPlayer,{Track,useActiveTrack} from 'react-native-track-player'
import PlayerControl from './PlayerControl'
import CustomText from '../text/Text'
import Progress from './Progress'
import { useNavigation } from '@react-navigation/native'
const TrackPlayerFooter = () => {
    const track = useActiveTrack()
    const navigation = useNavigation()
    
    return (
    <TouchableOpacity style={style.container} onPress={()=>navigation.navigate("Player",{track})}>
        <View style={style.innerContainer1}>
            <View style={{flex:0.3}}>
            {
                track &&     <Image source={{uri:track?.artwork}} height={100} width={100}/>
            }
            </View>
            <View style={{flex:0.5}}>
                <View style={style.textContentContainer}>
                    <CustomText variant='primary' style={{fontSize:18}}>
                        {track?.title}
                    </CustomText>
                    <CustomText variant='secondary' style={{fontSize:16}}>
                        {track?.artist}
                    </CustomText>
                </View>                
            </View>
            <View style={style.playerControlContainer}>
                <PlayerControl type="toggled"/>
            </View>
        </View>
        <Progress />

    </TouchableOpacity>
  )
}

const style= StyleSheet.create({
    container:{
        position:"absolute",
        bottom:1,
        backgroundColor:Theme.colors.white,
        height:100,
        width:"100%"},
    innerContainer1:{flex:1,flexDirection:"row"},
    textContentContainer:{flex:0.6,flexDirection:'column'},
    playerControlContainer:{flex:0.2,justifyContent:"center",alignItems:"center"}
})

export default TrackPlayerFooter