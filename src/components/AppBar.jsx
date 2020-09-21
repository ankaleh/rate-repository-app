import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
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
    backgroundColor: theme.colors.appBarBackgroundColor,
    //flexDirection: "column"
    
    // ...
  },
  // ...
});

const AppBar = () => {

  return (
  <View style={styles.container}>
      <ScrollView horizontal>
            <AppBarTab text="Repositories" to="/"/>
            <AppBarTab text="Sign in" to="/sign-in"/>
            
      </ScrollView>
      {/* <ScrollView horizontal>
            <AppBarTab text="Repositories" to="/"/>
            <AppBarTab text="Sign in" to="/sign-in"/>
            <AppBarTab text="Sign in" to="/sign-in"/>
            <AppBarTab text="Sign in" to="/sign-in"/>
            <AppBarTab text="Sign in" to="/sign-in"/>
            <AppBarTab text="Sign in" to="/sign-in"/>
            <AppBarTab text="Sign in" to="/sign-in"/>
            <AppBarTab text="Näkymätön" to="/sign-in"/>
            <AppBarTab text="Näkymätön2" to="/sign-in"/>
            <AppBarTab text="Näkymätön3" to="/sign-in"/>
      </ScrollView> */}
</View>
  )
};

export default AppBar;