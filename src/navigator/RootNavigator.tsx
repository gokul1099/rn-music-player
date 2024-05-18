import React, { useEffect } from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeContainer from "../screens/home/container"
import PlayerContainer from "../screens/player/container"
import SearchContainer from "../screens/search/container"
import DownloadsContainer from "../screens/downloads/container"
import { Theme } from "../utils/theme"
import SearchIcons from "../assets/icons/SearchIcons"
import { AppState, TouchableOpacity,View } from "react-native"
import TrackPlayer,{isPlaying} from 'react-native-track-player';
import { storeCurrentTrack } from "../redux/modules/localState/actions"
import { useActions } from "../utils/useActions"
import { useSelector } from "react-redux"
import DownloadIcon from "../assets/icons/DownloadIcon"
export default function RootNavigator(){
    const StackNavigator = createNativeStackNavigator() 
    const headerStyle={
        backgroundColor:Theme.colors.primary,
        color:Theme.colors.white
    }
    const appState = React.useRef(AppState.currentState)
    const isTrackPlaying = isPlaying()
    const actions = useActions({storeCurrentTrack})
    const {trackDetails} = useSelector(state=>state.localState)
    useEffect(()=>{
        const subscription = AppState.addEventListener("change",async(nextAppState)=>{
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                
                if(!isTrackPlaying){
                    await TrackPlayer.add(trackDetails?.track,1)
                    await TrackPlayer.skip(1)
                    await TrackPlayer.seekTo(trackDetails?.position)
                }
              } else if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
                const activeTrack = await TrackPlayer.getActiveTrack()
                const position = await TrackPlayer.getProgress()
                const index = await TrackPlayer.getActiveTrackIndex()
                actions.storeCurrentTrack({track: activeTrack, position:position?.position, index})
              }
              appState.current = AppState.currentState
          })


          return ()=>{
            subscription.remove()
          }
    },[])

  
    return(
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name="Home" component={HomeContainer}
                options={({navigation})=>({
                    headerTitle:"Spotify",
                    headerStyle:{backgroundColor:Theme.colors.primary},
                    headerTitleStyle:{color:Theme.colors.white, fontSize:Theme.fontSize.primary, fontWeight:"bold"},
                    headerRight:()=>(
                        <View style={{flexDirection:"row"}}>
                             <TouchableOpacity style={{marginRight:10}} onPress={()=>navigation.navigate("Downloads")}>
                                <DownloadIcon />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
                                <SearchIcons height={"35"} width={"35"}/>
                            </TouchableOpacity>
                        </View>
                        
                    )
                })}/>
                <StackNavigator.Screen options={{
                    headerStyle,
                    headerTitleStyle:{color:Theme.colors.white, fontSize:Theme.fontSize.primary, fontWeight:"bold"}
                    }} name="Player" component={PlayerContainer}/>
                <StackNavigator.Screen options={
                    {headerTitle:"Search",headerStyle,
                    headerTitleStyle:{color:Theme.colors.white, fontSize:Theme.fontSize.primary, fontWeight:"bold"},
                    }} name="Search" component={SearchContainer}/>
                <StackNavigator.Screen options={
                    {headerTitle:"Downloads",headerStyle,
                    headerTitleStyle:{color:Theme.colors.white, fontSize:Theme.fontSize.primary, fontWeight:"bold"},
                    }} name="Downloads" component={DownloadsContainer}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}


