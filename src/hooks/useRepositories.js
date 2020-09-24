import { useQuery } from '@apollo/react-hooks';
import { useState, useEffect } from 'react';
import { GET_ALL_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  //const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);

  /* const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.0.2:5000/api/repositories');
    const json = await response.json();
    console.log(json)
    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};
 */
  //console.log('Alussa!')
  const { data, error, loading } = useQuery(GET_ALL_REPOSITORIES);
  const [repositories, setRepositories] = useState();
  
  useEffect(() => {
    if (data) {
      setRepositories(data.repositories)
    }
    //console.log('Repositoriot: ', data);
    
  }, [data]); 

  if (loading) {
    //console.log('Loading: ', loading)
    //return loading;
  }
  
  return { repositories, loading/* , refetch: fetchRepositories */ }

}
export default useRepositories;