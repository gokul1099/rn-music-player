import { GET_TRACK_DETAILS, GET_ALBUM_DETAILS, GET_ARTIST_DETAILS, SEARCH,STORE_LOCAL_SONGS } from './types';
import { IAction } from "../../interfaces";
import { success,failure } from "../../utils";
const initialState = {
    trackDetails:{
        isFetching: false,
        data: null,
        isFailure: false,
        isSuccess:false
    },
    albumDetails:{
        isFetching: false,
        data: null,
        isFailure: false,
        isSuccess:false
    },
    artistDetails:{
        isFetching: false,
        data: null,
        isFailure: false,
        isSuccess:false
    },
    searchResults:{
        isFetching: false,
        data: null,
        isFailure: false,
        isSuccess:false
    },
    localSongs:{
        data:null
    }
}

const transformResponse=(data:any)=>{
   const newResponse =  data?.tracks?.items?.map((item)=>{
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
    return newResponse
}

const reducer = (state=initialState, action:IAction)=>{
    switch(action.type){
        case STORE_LOCAL_SONGS:
            return {
                ...state,
                localSongs:{
                    data: action.payload,
                }
            }
        case GET_TRACK_DETAILS:
            return {
                ...state,
                trackDetails:{
                    isFetching: true,
                    data: null,
                    isFailure: null,
                    isSuccess:null
                }
            }
        case success(GET_TRACK_DETAILS):
            return{
                ...state,
                trackDetails:{
                    isFetching: false,
                    data: transformResponse(action.data),
                    isFailure: false,
                    isSuccess:true
                }
            }
        case failure(GET_TRACK_DETAILS):
                return{
                    ...state,
                    trackDetails:{
                        isFetching: false,
                        data: action.data,
                        isFailure: true,
                        isSuccess:false
                    }
                }
        case GET_ARTIST_DETAILS:
            return {
                ...state,
                artistDetails:{
                    isFetching: true,
                    data: null,
                    isFailure: null,
                    isSuccess:null
                }
            }
        case success(GET_ARTIST_DETAILS):
            return{
                ...state,
                artistDetails:{
                    isFetching: false,
                    data:transformResponse(action.data),
                    isFailure: false,
                    isSuccess:true
                }
            }
        case failure(GET_ARTIST_DETAILS):
                return{
                    ...state,
                    artistDetails:{
                        isFetching: false,
                        data: action.data,
                        isFailure: true,
                        isSuccess:false
                    }
                }
        case GET_ALBUM_DETAILS:
            return {
                ...state,
                albumDetails:{
                    isFetching: true,
                    data: null,
                    isFailure: null,
                    isSuccess:null
                }
            }
        case success(GET_ALBUM_DETAILS):
            return{
                ...state,
                albumDetails:{
                    isFetching: false,
                    data: transformResponse(action.data),
                    isFailure: false,
                    isSuccess:true
                }
            }
        case failure(GET_ALBUM_DETAILS):
                return{
                    ...state,
                    albumDetails:{
                        isFetching: false,
                        data: action.data,
                        isFailure: true,
                        isSuccess:false
                    }
                }
        case SEARCH:
            return {
                ...state,
                searchResults:{
                    isFetching: true,
                    data: null,
                    isFailure: null,
                    isSuccess:null
                }
            }
        case success(SEARCH):
            return{
                ...state,
                searchResults:{
                    isFetching: false,
                    data: transformResponse(action.data),
                    isFailure: false,
                    isSuccess:true
                }
            }
        case failure(SEARCH):
                return{
                    ...state,
                    searchResults:{
                        isFetching: false,
                        data: action.data,
                        isFailure: true,
                        isSuccess:false
                    }
                }
        default:
            return state
    }
}

export default reducer