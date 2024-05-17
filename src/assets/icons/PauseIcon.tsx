import { View, Text } from 'react-native'
import React from 'react'
import G,{ Svg,Path } from 'react-native-svg'
const PauseIcon = () => {
  return (
    <Svg fill="#000000"  width={30} height={30} viewBox="0 0 20 20" >
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></G>
        <G id="SVGRepo_iconCarrier">
            <Path d="M15 3h-2c-.553 0-1 .048-1 .6v12.8c0 .552.447.6 1 .6h2c.553 0 1-.048 1-.6V3.6c0-.552-.447-.6-1-.6zM7 3H5c-.553 0-1 .048-1 .6v12.8c0 .552.447.6 1 .6h2c.553 0 1-.048 1-.6V3.6c0-.552-.447-.6-1-.6z">
            </Path>
            </G>
    </Svg>
  )
}

export default PauseIcon