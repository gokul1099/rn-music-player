import React, { useEffect } from "react"
import HomeView from "./view"
import { searchTrack } from '../../redux/modules/player/actions';
import { useActions } from "../../utils/useActions"
import { useSelector } from "react-redux";
import TrackPlayer,{Track} from "react-native-track-player";
const HomeContainer=()=>{
    const actions = useActions({searchTrack})
    const {searchResults}=useSelector(store=>store.player)
    useEffect(()=>{
        actions.searchTrack({query:`q=tamil%20songs&type=track`})
    },[])

    useEffect(()=>{
        if(!searchResults?.isFetching){
            const addTrack = async()=>{
            await TrackPlayer.add([...(searchResults?.data as Track[])])
            }
            if(searchResults?.data){
                addTrack()
            }            
        }
    },[searchResults?.data])
    return(
            <HomeView tracks={searchResults?.data} />   
    )
}


export default HomeContainer