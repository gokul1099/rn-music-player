import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme'
import TrackPlayerFooter from '../../components/trackPlayer/TrackPlayerFooter'
import TrackItem from '../../components/TrackItem'
interface IHome{
  tracks:any
}
const HomeView = ({tracks}:IHome) => {
  
  return (
    <View style={{flex:1,backgroundColor:Theme.colors.secondary}}>
      <FlatList 
        data={tracks}
        renderItem={({item,index})=><TrackItem {...item} index={index}/>}
      />
      <TrackPlayerFooter />
    </View>
  )
}

export default HomeView