import axios from "axios"
import { API_URL } from "../../config"
export const success = (actionType:string) => `${actionType}_SUCCESS`
export const failure = (actionType:string) => `${actionType}_FAILURE`



export const apiHandler = async(url:string,method:string,params?:any)=>{
    const headers = {
        'Content-Type': "application/json",
    }
    return axios({
        method,
        url:`${API_URL}/${url}`,
        headers,
        data:params
    }).then(
        res=>res,
        err=>err
    )
}