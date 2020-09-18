import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'
import theme from '../theme'
import AppBarTab from './AppBarTab';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackgroundColor
    
    
    // ...
  },
  // ...
});

const AppBar = () => {

  return (
  <View style={styles.container}>
      <AppBarTab text="Repositories" to="/"/>
      <AppBarTab text="Sign in" to="/sign-in"/>
</View>
  )
};

export default AppBar;