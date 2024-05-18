import React from "react";
import { Alert, PermissionsAndroid,Platform,ToastAndroid } from "react-native";


const useRequestPermission =()=>{
    const checkPermission = async()=>{
        if(Platform.Version <33){
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Music Player wants to access you storage for downloading songs',
                message:
                'Music Player wants to access you storage for downloading songs',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
        )

        if(granted === "never_ask_again" || granted == "denied"){
            Alert.alert("Permission error", "Allow permission to access storage to download songs in settings",
                [
                    {
                        text:"OK",
                        onPress:()=>console.log("Go to setting to change permission")
                    }
                ]
            )
            return false
        }
        else{
            return true
        }
    }else{
        return true
    }

    }

    return {checkPermission}
}
export default useRequestPermission