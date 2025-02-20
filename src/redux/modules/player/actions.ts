import { GET_TRACK_DETAILS,GET_ARTIST_DETAILS,GET_ALBUM_DETAILS,SEARCH, STORE_LOCAL_SONGS } from "./types";


export const getTrackList = (payload:any)=>({
    type:GET_TRACK_DETAILS,
    payload
})

export const getArtistDetails = (payload:any)=>({
    type: GET_ARTIST_DETAILS,
    payload
})

export const getAlbumDetails=(payload:any)=>({
    type: GET_ALBUM_DETAILS,
    payload
})

export const searchTrack=(payload:any)=>({
    type:SEARCH,
    payload
})

export const storeLocalSongs=(payload:any)=>({
    type: STORE_LOCAL_SONGS,
    payload
})