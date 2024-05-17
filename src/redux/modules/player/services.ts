import { apiHandler } from "../../utils";

export const getArtistDetailsService=async(payload:any)=>{
    apiHandler({url:`artists/${payload?.id}`,method:"GET"})
}

export const getAlbumDetailsService=async(payload:any)=>{
    return apiHandler({url:`albums/${payload?.id}`,method:"GET"})
}

export const getTrackDetailsService = async(paylod:any)=>{
    return apiHandler({url:`track/${paylod?.id}`,method:"GET"})
}

export const search=async(payload:any)=>{
    return apiHandler({url:`search?${payload?.query}`,method:"GET"})
}