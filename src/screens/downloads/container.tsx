import { View, Text } from 'react-native'
import React from 'react'
import DownloadsScreen from './view'
const RNFS = require("react-native-fs")
import { useActions } from '../../utils/useActions'
import { storeLocalSongs } from '../../redux/modules/player/actions'
import { useIsFocused } from '@react-navigation/native'
const DownloadsContainer = () => {
    const actions = useActions({storeLocalSongs})
    const isFocused = useIsFocused()
    React.useEffect(()=>{
        const readLocalFiles = async()=>{
            RNFS.readDir(RNFS.DownloadDirectoryPath).then((files)=>{
              const mp3Files = files.filter(file=>file?.name?.endsWith("mp3"))
              const updatedFiles = mp3Files.map((file)=>{
                const newItem = {
                    id: file?.mtime,
                    url: file?.path,
                    title:file?.name?.split(".")[0],
                    artwork:"https://picsum.photos/200/300"
                }
                return newItem
              })

              actions.storeLocalSongs(updatedFiles)
            })
          }
          if(isFocused){
          readLocalFiles()
          }
    },[isFocused])
  return (
    <DownloadsScreen />
  )
}

export default DownloadsContainer