import React from "react";
import { Alert, PermissionStatus, ToastAndroid } from "react-native";
import useRequestPermission from './useRequestPermission';
const RNFS = require("react-native-fs")


const useDownloadTrack=()=>{
    const {checkPermission} = useRequestPermission()
    const downloadFile =async (url:string,name:string)=>{
        const permissionActive =await checkPermission()
        if(permissionActive=== true){
            const filePath = RNFS.DownloadDirectoryPath + `/${name}.mp3`
        RNFS.downloadFile({
            fromUrl:url,
            toFile: filePath,
            background: true,
            progress:(res)=>console.log(res.bytesWritten/res.contentLength)

        }
        ).promise.then((res)=>{
            console.log(res,"ress")
        }).catch((e)=>{
            console.log(e)
        })
        }else{
            ToastAndroid.show("Download failed", ToastAndroid.SHORT)
        }
        
    }

    return {downloadFile}
}

export default useDownloadTrack

