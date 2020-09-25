import React, {useState, useEffect} from 'react'
import RepositoryItem from './RepositoryItem';
import { ItemSeparator } from './RepositoryList'
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries'
import Text from './Text';
import { FlatList, View, StyleSheet, } from 'react-native';
import { format } from 'date-fns'
import theme from '../theme'
import { styles } from './RepositoryItem'

const ReviewItem = ({review}) => {

    const formattedDate = format(new Date(review.node.createdAt), 'dd.MM.yyyy')

    return (
        <View style={styles.flexContainerLogoAndBasics}>
            <View style={styles.roundContainer}><Text >{review.node.rating}</Text></View>
            <View style={styles.flexContainerBasics} >
                
                <Text fontWeight="bold">{review.node.user.username}</Text>
                <Text>{formattedDate}</Text>
            
                <View style={styles.flexText}>
                    <Text>{review.node.text}</Text>
                </View>
                
            </View>
            
        </View>

    )
}

const RenderRepositoryItem = (id) => {
    const {data, error, loading} = useQuery(GET_REPOSITORY, { 
        fetchPolicy: "cache-and-network",
        variables: {id: id.id} });

    const [repository, setRepository] = useState(null);
    
    useEffect (()=> {
        if (data) {
          console.log('Data valmis: ', data)
          setRepository(data.repository);
        }
        
      }, [data]); 

      if (!repository) {
          return (
          <Text fontWeight='bold' color='primary' fontSize="subheading">Loading repository.</Text>
          )
      }
      console.log(repository.reviews.edges)//edges on taulukollinen olioita (review),
      //joilla yksi kenttä, node. Noden arvona olio, jolla esim. kentät rating ja text
    
      return (
        <View style={styles.reviewsContainer}>
        <FlatList 
          data={repository.reviews.edges}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={( item ) => item.node.id} 
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={() => <RepositoryItem item={repository} pressed={true} />}
        />
        </View>
      );
}

export default RenderRepositoryItem;