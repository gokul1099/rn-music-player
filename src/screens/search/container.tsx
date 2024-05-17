import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import SearchScreen from './view'
import { Theme } from '../../utils/theme'
import { useActions } from '../../utils/useActions'
import { debounce } from '../../utils/utilities'
import { useSelector } from 'react-redux'
import { searchTrack } from '../../redux/modules/player/actions';
const SearchContainer = () => {
  
  const actions = useActions({searchTrack})
  const {searchResults} = useSelector(state=>state.player)

  const startSearch = debounce((query:string)=>{
    actions.searchTrack({query:`q=${decodeURIComponent(query)}&type=track%2Cartist`})
  },2000)
  return (
    <View style={Style.container}>
        <SearchScreen startSearch={startSearch} searchResults={searchResults?.data}/>
    </View>
    
  )
}

const Style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Theme.colors.secondary
  }
})

export default SearchContainer