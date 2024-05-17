/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import RootNavigator from "./src/navigator/RootNavigator"
import { Provider } from 'react-redux';
import {store,persistedStore} from "./src/redux/index"
import { PersistGate } from 'redux-persist/integration/react';

function App(): React.JSX.Element {
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
