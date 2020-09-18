import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'
import theme from '../theme'
import { Link } from 'react-router-native'
import RepositoryList from './RepositoryList';

/* const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    
    
    // ...
  },
  // ...
}); */

const AppBarTab = ({ text, to }) => {

    return (

        <View >
            
            <Link to={to} component={TouchableWithoutFeedback}>
            
                <Text fontWeight='bold' color='primary' fontSize="subheading">
                    {text}
                </Text>
            
            </Link>
        </View>
    )   
};

export default AppBarTab;

