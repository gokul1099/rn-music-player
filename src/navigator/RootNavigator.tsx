import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeContainer from "../screens/home/container"
import PlayerContainer from "../screens/player/container"
import SearchContainer from "../screens/search/container"
import { Theme } from "../utils/theme"
import SearchIcons from "../assets/icons/SearchIcons"
import { TouchableOpacity } from "react-native"
export default function RootNavigator(){
    const StackNavigator = createNativeStackNavigator() 
    const headerStyle={
        backgroundColor:Theme.colors.primary,
        color:Theme.colors.white
    }
    const headerTitleStyle={
        
    }
    return(
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name="Home" component={HomeContainer}
                options={({navigation})=>({
                    headerTitle:"Spotify",
                    headerStyle:{backgroundColor:Theme.colors.primary},
                    headerTitleStyle:{color:Theme.colors.white, fontSize:Theme.fontSize.primary, fontWeight:"bold"},
                    headerRight:()=>(
                        <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
                            <SearchIcons height={"35"} width={"35"}/>
                        </TouchableOpacity>
                    )
                })}/>
                <StackNavigator.Screen options={{
                    headerStyle,
                    headerTitleStyle:{color:Theme.colors.white, fontSize:Theme.fontSize.primary, fontWeight:"bold"}
                    }} name="Player" component={PlayerContainer}/>
                <StackNavigator.Screen options={
                    {headerTitle:"Search",headerStyle,
                    headerTitleStyle:{color:Theme.colors.white, fontSize:Theme.fontSize.primary, fontWeight:"bold"},
                    }} name="Search" component={SearchContainer}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}


