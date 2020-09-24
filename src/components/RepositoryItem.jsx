import React from 'react';
import { /* Text, */ View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

export const styles = StyleSheet.create({
    flexContainerStats: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "center",
      paddingLeft: 20,
      
    },
    flexItemStats: {
        flexGrow: 1,
    },

    flexContainerLogoAndBasics: { //tämän sisällä kuva (item 1) ja perustietonippu (item2) rinnakkain
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 20,
        paddingRight: 50,
        paddingTop: 30,
    },

    flexItemLogo: {
        width: 50,
        height: 50,
    },

    flexContainerBasics: { //tämän sisällä perustiedot eli nimi, kuvaus JA KIELI allekkain
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20
    },

    flexText: {
        flexGrow: 0,
        padding: 3,
        
    },
    flexBoxContainer: { //flex container
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 5,
    
    },
    flexBox: { //flex item
        flexGrow: 0,
        borderRadius: 4,
        borderWidth: 0.5,
        padding: 5,
        backgroundColor: theme.colors.primary,
    },
  });

const RepositoryItem = ({ item }) => {

    const getCount = (count) => {
        if (count>=1000) {
            const number = count/1000;
            return `${number.toFixed(1)}k`;
        }
        return count;
    }
    const stargazersCount = getCount(item.stargazersCount);
    const forks = getCount(item.forksCount);
    const reviews = getCount(item.reviewCount);
    const ratings = getCount(item.ratingAverage);
    //console.log(getCount(item.forksCount));

    return (
        
         <View >
             
            <View style={styles.flexContainerLogoAndBasics}> 
                
                <Image style={styles.flexItemLogo} source={{ uri:item.ownerAvatarUrl }}/>
                
                <View style={styles.flexContainerBasics}>
                    <Text style={styles.flexText} fontWeight="bold" fontSize="subheading">{item.fullName} </Text>
                    <Text style={styles.flexText} fontSize="subheading">{item.description} </Text>
                    <View style={styles.flexBoxContainer}>
                        <Text style= {styles.flexBox} color="textInTextBox" fontWeight="bold">{item.language}
                    </Text>
                </View>
                </View>
                
            </View>
            
            <View style={styles.flexContainerStats}>
                <View style={styles.flexItemStats}>
                <Text fontWeight="bold" fontSize="subheading">{stargazersCount}</Text>
                    <Text fontSize="subheading">Stars</Text>
                </View>

                <View style={styles.flexItemStats}>
                    <Text fontWeight="bold" fontSize="subheading">{forks}</Text>
                    <Text fontSize="subheading">Forks</Text>
                </View>

                <View style={styles.flexItemStats}>
                    <Text fontWeight="bold" fontSize="subheading">{reviews}</Text>
                    <Text fontSize="subheading">Reviews</Text>
                </View>

                <View style={styles.flexItemStats}>
                    <Text fontWeight="bold" fontSize="subheading">{ratings}</Text>
                    <Text fontSize="subheading">Rating</Text>
                </View>
            </View>
        </View>

  );
};

export default RepositoryItem;