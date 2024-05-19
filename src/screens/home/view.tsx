import { View, Text, FlatList,StyleSheet ,Button} from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme'
import TrackPlayerFooter from '../../components/trackPlayer/TrackPlayerFooter'
import TrackItem from '../../components/TrackItem'
import { useNetInfo } from '@react-native-community/netinfo'
import CustomText from '../../components/text/Text'
import { useNavigation } from '@react-navigation/native'
interface IHome{
  tracks:any
}
const HomeView = ({tracks}:IHome) => {
  const{isConnected} = useNetInfo()
  const navigation = useNavigation()
  return (
    <View style={Style.container}>
      {
        isConnected ? (
          <>
          <FlatList 
          style={{marginBottom:100}}
          data={tracks}
          renderItem={({item,index})=><TrackItem {...item} index={index}/>}
        />
        {
          tracks?.length>0 && <TrackPlayerFooter />
        }
        </>
        )
        :
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <CustomText variant='Primary' style={{fontSize:24,color:Theme.colors.white}}>
            You're offline
          </CustomText>
          <Button title='Go To Downloads' onPress={()=>navigation.navigate("Downloads")}/>
        </View>
      }
     
      
    </View>
  )
}

const Style=StyleSheet.create({
  container:{flex:1,backgroundColor:Theme.colors.secondary}
})

export default HomeView