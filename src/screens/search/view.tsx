import { View, Text,TextInput,FlatList } from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme'
import TrackItem from '../../components/TrackItem'

interface ISearchScreen{
  startSearch:(query:string)=>any,
  searchResults:any
}
const SearchScreen = ({startSearch,searchResults}:ISearchScreen) => {
  return (
    <View>
        <TextInput style={{backgroundColor:Theme.colors.text}} placeholder='Search for artist, track ...' onChangeText={(text)=>startSearch(text)}/>
        <FlatList
        data={searchResults}
        renderItem={({item,index})=><TrackItem {...item} index={index}/>}
        />
    </View>
  )
}

export default SearchScreen