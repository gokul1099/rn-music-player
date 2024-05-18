/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView,StyleSheet} from 'react-native';
import RootNavigator from "./src/navigator/RootNavigator"
import { Provider } from 'react-redux';
import {store,persistedStore} from "./src/redux/index"
import TrackPlayer from 'react-native-track-player';
import { PersistGate } from 'redux-persist/integration/react';

import useRequestPermission from './src/hooks/useRequestPermission';
function App(): React.JSX.Element {
  const setupPlayer = async()=>{
    await TrackPlayer.setupPlayer({autoHandleInterruptions: true})
  }
  const {checkPermission}= useRequestPermission()

  
useEffect(()=>{
    checkPermission()
    setupPlayer()
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
