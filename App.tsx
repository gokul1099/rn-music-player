/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import RootNavigator from "./src/navigator/RootNavigator"
import { Provider } from 'react-redux';
import {store,persistedStore} from "./src/redux/index"
import TrackPlayer,{Track} from 'react-native-track-player';
import { PersistGate } from 'redux-persist/integration/react';
function App(): React.JSX.Element {
  const loadTracks = async()=>{
    await TrackPlayer.setupPlayer({autoHandleInterruptions: true})
    await TrackPlayer.add([...(playlist as Track[])])
}
useEffect(()=>{
    loadTracks()
},[])
  return (
    <SafeAreaView style={{flex:1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <RootNavigator />
        </PersistGate>
      </Provider>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
const playlist= [
  {
    "url": "https://rntp.dev/example/Longing.mp3",
    "title": "Longing",
    "artist": "David Chavez",
    "artwork": "https://rntp.dev/example/Longing.jpeg",
    "duration": 143
  },
  {
    "url": "https://rntp.dev/example/Soul%20Searching.mp3",
    "title": "Soul Searching (Demo)",
    "artist": "David Chavez",
    "artwork": "https://rntp.dev/example/Soul%20Searching.jpeg",
    "duration": 77
  },
  {
    "url": "https://rntp.dev/example/Lullaby%20(Demo).mp3",
    "title": "Lullaby (Demo)",
    "artist": "David Chavez",
    "artwork": "https://rntp.dev/example/Lullaby%20(Demo).jpeg",
    "duration": 71
  },
  {
    "url": "https://rntp.dev/example/Rhythm%20City%20(Demo).mp3",
    "title": "Rhythm City (Demo)",
    "artist": "David Chavez",
    "artwork": "https://rntp.dev/example/Rhythm%20City%20(Demo).jpeg",
    "duration": 106
  },
  {
    "url": "https://rntp.dev/example/hls/whip/playlist.m3u8",
    "title": "Whip",
    "artist": "prazkhanal",
    "artwork": "https://rntp.dev/example/hls/whip/whip.jpeg",
    "type": "hls"
  },
  {
    "url": "https://ais-sa5.cdnstream1.com/b75154_128mp3",
    "title": "Smooth Jazz 24/7",
    "artist": "New York, NY",
    "artwork": "https://rntp.dev/example/smooth-jazz-24-7.jpeg",
    "isLiveStream": true
  },
  {
    "url": "https://traffic.libsyn.com/atpfm/atp545.mp3",
    "title": "Chapters"
  },
  {
    "url": "https://kut.streamguys1.com/kutx-app.aac?listenerId=123456784123",
    "title": "KUTX"
  }
]