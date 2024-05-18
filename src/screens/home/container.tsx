import React, { useEffect } from "react"
import HomeView from "./view"
import { searchTrack } from '../../redux/modules/player/actions';
import { useActions } from "../../utils/useActions"
import { useSelector } from "react-redux";
import TrackPlayer,{Track} from "react-native-track-player";
import { useIsFocused } from "@react-navigation/native";

const HomeContainer=()=>{
    const actions = useActions({searchTrack})
    const {searchResults}=useSelector(store=>store.player)
    const isFocused=useIsFocused()
    useEffect(()=>{
        actions.searchTrack({query:`q=yuvan&type=track%2Cartist`})
    },[])

    useEffect(()=>{
        if(!searchResults?.isFetching && isFocused){
            const addTrack = async()=>{
            await TrackPlayer.add([...(searchResults?.data as Track[])],0)
            }
            if(searchResults?.data){
                addTrack()
            }            
        }
    },[searchResults?.data,isFocused])
    return(
            <HomeView tracks={searchResults?.data} />   
    )
}


export default HomeContainer