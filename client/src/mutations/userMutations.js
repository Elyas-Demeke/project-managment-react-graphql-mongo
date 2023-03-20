import { gql } from '@apollo/client'

const REGISTER_USER = gql`
mutation registerUser($email: String!, $password: String!, $username: String!) {
  registerUser(email:$email, password: $password, username: $username){
    username
    id
    createdAt
    email
    token
  }
}
`

export { REGISTER_USER }