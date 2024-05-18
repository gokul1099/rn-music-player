import { View, Text } from 'react-native'
import React from 'react'
import G,{ Svg,Path,Defs,Styles, Rect } from 'react-native-svg'
const RepeatIcon = ({color}) => {
  return (
    <Svg fill={color} height={30} width={30} viewBox="0 0 32 32" id="icon" >
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></G>
        <G id="SVGRepo_iconCarrier">
        <Path fill={color} d="M6,6H26.1719l-3.586-3.5859L24,1l6,6-6,6-1.4141-1.4141L26.1719,8H6v7H4V8A2.0024,2.0024,0,0,1,6,6Z">
            </Path> 
            <Path fill={color} d="M9.4141,20.4141,5.8281,24H26V17h2v7a2.0024,2.0024,0,0,1-2,2H5.8281L9.414,29.5859,8,31,2,25l6-6Z">
                </Path> 
            <Rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" fill="none" width="32" height="32"></Rect>
            </G></Svg>
  )
}

export default RepeatIcon