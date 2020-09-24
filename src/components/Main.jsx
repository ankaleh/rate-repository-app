
import React from 'react';
//import Constants from 'expo-constants';
import { /* Text, */ StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native'
import SignIn from './SignIn';
import { useApolloClient } from '@apollo/client';
import Text from './Text';
//import { useHistory } from 'react-router-native';


const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const SignOut = () => {
  const apolloClient = useApolloClient();
  //const history = useHistory();
  localStorage.clear();
  apolloClient.resetStore();
  //history.push('/')
  return (
    <View>
      <Text fontWeight='bold' color='primary' fontSize="subheading">You have been signed out!</Text>
    </View>
  )
}
 
const Main = () => {

  return (
    <View style={styles.container}>
      <AppBar/>
      
      <Switch>
        <Route path="/" exact >
            <RepositoryList/>
        </Route>
        <Route path="/sign-in">
            <SignIn />
        </Route>
        <Route path="/sign-out">
          <SignOut/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </View>
  );
};

export default Main;