import { gql } from 'apollo-boost';

/* export const AUTHORIZE = gql`
    mutation authorize($username: String!, $password: String!) {
        authorize(credentials: { 
            username: $username,
            password: $password 
            }
        ) {
        accessToken
        }
    }
` */

export const AUTHORIZE = gql`
    mutation authorize($credentials: AuthorizeInput) {
        authorize(
            credentials: $credentials
        ) {
        accessToken
        }
    }

`
