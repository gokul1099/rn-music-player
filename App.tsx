/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex:1}}>
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
