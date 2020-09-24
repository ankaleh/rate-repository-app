import { gql } from 'apollo-boost';

export const GET_ALL_REPOSITORIES = gql`
query {
  repositories {
   	edges {
      node {
      	id,
    	fullName,
    	description,
    	language,
    	forksCount,
    	stargazersCount,
    	ratingAverage,
    	reviewCount,
    	ownerAvatarUrl
    
      }
    }
  }
}
`
export const GET_AUTHORIZED_USER = gql`
query {
	authorizedUser {
	  id
	  username
	}
  }

`