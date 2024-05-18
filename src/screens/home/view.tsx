import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme'
import TrackPlayerFooter from '../../components/trackPlayer/TrackPlayerFooter'
import TrackItem from '../../components/TrackItem'
import CustomText from '../../components/text/Text'
import { useSelector } from 'react-redux'
interface IHome{
  tracks:any
}
const HomeView = ({tracks}:IHome) => {
  return (
    <View style={Style.container}>
      <FlatList 
        style={{marginBottom:100}}
        data={tracks}
        renderItem={({item,index})=><TrackItem {...item} index={index}/>}
      />
      {
        tracks?.length>0 && <TrackPlayerFooter />
      }
      
    </View>
  )
}

const Style=StyleSheet.create({
  container:{flex:1,backgroundColor:Theme.colors.secondary}
})

export default HomeView