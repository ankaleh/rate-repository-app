import React from 'react';
import { NativeRouter } from 'react-router-native';
import { Text, View } from 'react-native';
import Main from './src/components/Main';

const App = () => {
  return (
    <View>
    <NativeRouter>
      
      <Main />
    </NativeRouter>
    </View>
  );
};

export default App;