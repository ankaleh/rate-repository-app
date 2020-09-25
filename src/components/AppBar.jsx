import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackgroundColor,
    //flexDirection: "column"
  },
  
});

const AppBar = () => {
  
  const { data, error, loading } = useQuery(GET_AUTHORIZED_USER);//TÄMÄ EI TOIMI!!!
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data) {
      setUser(data.authorizedUser);
      //console.log('Data haettu AppBarissa: ', data.authorizedUser);
    }
    else if (error) {
      console.log(error.message);
    } else {
      //console.log('Dataa ei ole haettu AppBarissa.');
    }
  }, [data]); 

  if (loading) {
    return (
      <View>
      <Text fontWeight='bold' color='primary' fontSize="subheading">Loading user...</Text>
    </View>
    );
  }

  //console.log('User AppBarissa: ', user); 

  return (
  <View style={styles.container}>
      <ScrollView horizontal>
            <AppBarTab text="Repositories" to="/"/>
            {user
            ? <AppBarTab text="Sign out" to="/sign-out"/>
            : <AppBarTab text="Sign in" to="/sign-in"/>}

      </ScrollView>
  </View>
  );
};

export default AppBar;