import { apiHandler } from "../../utils";

export const getArtistDetailsService=async(id:string)=>{
    apiHandler(`artists/${id}`,"GET")
}

export const getAlbumDetailsService=async(id:string)=>{
    apiHandler(`albums/${id}`,"GET")
}

export const getTrackDetailsService = async(id:string)=>{
    apiHandler(`track/${id}`,"GET")
}

export const search=async(query:string)=>{
    apiHandler(`search?${query}`,"")
}