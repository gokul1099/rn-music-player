import { GET_TRACK_DETAILS, GET_ALBUM_DETAILS, GET_ARTIST_DETAILS, SEARCH } from './types';
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
    }
}

const reducer = (state=initialState, action:IAction)=>{
    switch(action.type){
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
                    data: action.payload,
                    isFailure: false,
                    isSuccess:true
                }
            }
        case failure(GET_TRACK_DETAILS):
                return{
                    ...state,
                    trackDetails:{
                        isFetching: false,
                        data: action.payload,
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
                    data: action.payload,
                    isFailure: false,
                    isSuccess:true
                }
            }
        case failure(GET_ARTIST_DETAILS):
                return{
                    ...state,
                    artistDetails:{
                        isFetching: false,
                        data: action.payload,
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
                    data: action.payload,
                    isFailure: false,
                    isSuccess:true
                }
            }
        case failure(GET_ALBUM_DETAILS):
                return{
                    ...state,
                    albumDetails:{
                        isFetching: false,
                        data: action.payload,
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
                    data: action.data,
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