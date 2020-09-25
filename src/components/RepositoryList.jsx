import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory, useParams } from 'react-router-native';
import CustomTouchableOpacity from './CustomTouchableOpacity';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

export const renderRepository = ({item }) => {
  
  return (
        <CustomTouchableOpacity item={item} />
        /* <TouchableOpacity onPress={onPress}><RepositoryItem item={item} testID="repositoryItem"/></TouchableOpacity>  */
  );
    
};

export const RepositoryListContainer = ({ repositories }) => {
  
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderRepository}
      keyExtractor={item => item.id}
      testID="flatList"
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;

/* const RepositoryList = () => {

  const { repositories } = useRepositories();
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []; 

  return (
    <FlatList
      
      data={repositoryNodes} 
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderRepository}
      keyExtractor={item => item.id}
    />
  );
}; */

//export default RepositoryList;