import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeContainer from "../screens/home/container"
import PlayerContainer from "../screens/player/container"

export default function RootNavigator(){
    const StackNavigator = createNativeStackNavigator() 
    return(
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen options={{headerTitle:"MusicPlayer"}} name="Home" component={HomeContainer}/>
                <StackNavigator.Screen name="Player" component={PlayerContainer}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}


