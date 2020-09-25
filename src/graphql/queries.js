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
`;
export const GET_AUTHORIZED_USER = gql`
query {
	authorizedUser {
	  	id
		username
	}
  }

`;

export const GET_REPOSITORY = gql`
query getRepository($id: ID!) {
	repository(id: $id) {
		id
		fullName
		stargazersCount
		forksCount
		ownerAvatarUrl
		description
		language
		reviewCount
		ratingAverage
		url
		reviews {
			edges {
			  node {
				id
				text
				rating
				createdAt
				user {
				  id
				  username
				}
			  }
			}
		  }
	}
}
`