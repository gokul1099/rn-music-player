import axios from "axios"
import {API_URL,SPOTIFY_CLIENT_ID,SPOTIFY_CLIENT_TOKEN} from "react-native-dotenv"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const success = (actionType:string) => `${actionType}_SUCCESS`
export const failure = (actionType:string) => `${actionType}_FAILURE`


const axiosHandler = axios.create({
    baseURL: API_URL
})
/**
 * As the spotify token will expires in 1 hour, we have to call the token api to get a new token every one hour
 */
const checkTokenValid = async()=>{
    const refreshToken = await AsyncStorage.getItem("token")
    if(!refreshToken){
        return false
    }
    else{
        const tokenExpireTime = await AsyncStorage.getItem("expireTime")
        const now = Date.now()
        if(now>= parseInt(tokenExpireTime,10)*1000){
            return false
        }else{
            return true
        }
    }
}

const getToken=async()=>{
    const data ={
        grant_type: 'client_credentials',
        client_id: SPOTIFY_CLIENT_ID,
        client_secret: SPOTIFY_CLIENT_TOKEN
    }
    try{
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            data,
            {
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
            }
            
        )
        const {access_token,expires_in} = response?.data
        await AsyncStorage.setItem("token",access_token)
        await AsyncStorage.setItem("expireTime",(Date.now() + expires_in *100).toString())
        return access_token
    }catch(e){
        console.log(e,"error in getting refresh token")
    }
}

axiosHandler.interceptors.request.use(
    async (config) => {
      const isTokenValid = await checkTokenValid()
      if(isTokenValid){
        const token = await AsyncStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
      }
      else{
        const accessToken = await getToken()
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    },
    (error) => Promise.reject(error)
  );
axiosHandler.interceptors.response.use(
    (response)=>{return response},
    async(error)=>{
        const originalRequest = error?.config
        if(error?.response?.status == 401){
            const accessToken = await getToken()
            if(accessToken){
                originalRequest.headers.Authorization = `Bearer ${accessToken}`
                return axiosHandler(originalRequest)
            }
        }
    }
)
export const apiHandler = async(payload)=>{
    const headers = {
        'Content-Type': "application/json",
    }
    if(payload?.method ==="GET"){
        try{
            const response = await axiosHandler.get(`${API_URL}/${payload.url}`)
            return response
        }catch(e){
            return e
        }
    }else if(payload?.method ==="POST"){
        try{
            const response = await axiosHandler.post(`${API_URL}/${payload?.url}`,payload?.params)
            return response
        }catch(e){
            return e
        }
    }

}




