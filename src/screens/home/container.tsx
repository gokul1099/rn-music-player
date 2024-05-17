import React, { useEffect } from "react"
import HomeView from "./view"
import { searchTrack } from '../../redux/modules/player/actions';
import { useActions } from "../../utils/useActions"
import { useSelector } from "react-redux";
import TrackPlayer,{Track} from "react-native-track-player";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HomeContainer=()=>{
    const actions = useActions({searchTrack})
    const {searchResults}=useSelector(store=>store.player)
    useEffect(()=>{
        actions.searchTrack({query:`q=tamil%20songs&type=track`})
    },[])

    useEffect(()=>{
        if(!searchResults?.isFetching){
            const addTrack = async()=>{
            const token = await AsyncStorage.getItem("token")
            const addHeaderToTrack = ()=>{
                const tracks = searchResults?.data?.tracks?.items?.map((item)=>{
                    const updated = {
                        id:item?.id,
                        url:item?.preview_url,
                        duration: Math.floor(item?.duration_ms/1000),
                        title: item?.name,
                        artist:item?.artists?.map((item)=>item?.name)?.join(","),
                        album:item?.album?.name,
                        artwork: item?.album?.images[0]?.url,

                    }
                    return updated
                })
                return tracks
            }
            console.log(searchResults)
            const tracks = addHeaderToTrack()
            console.log(tracks,"tracks")
            await TrackPlayer.add([...(tracks as Track[])])
            }
            if(searchResults?.data){
                addTrack()
            }
            
        }
    },[searchResults?.data])
    return(
            <HomeView />   
    )
}


export default HomeContainer