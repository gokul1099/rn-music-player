import { STORE_CURRENT_TRACK } from "./types";


export const storeCurrentTrack = (payload:any)=>{
    return{
        type:STORE_CURRENT_TRACK,
        payload
    }
    
}

