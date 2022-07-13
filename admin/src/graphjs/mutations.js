import { gql } from '@apollo/client'

export const SIGNUP_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: signupUser(UserNew: $userNew) {
      firstName
    }
  }
`

export const SIGNIN_USER = gql`
  mutation signInUser($existUser: SignInInput!) {
    user: signInUser(ExistUser: $existUser) {
      token
    }
  }
`

export const CREATE_QUOTE = gql`
  mutation createQuote($name: String!) {
    quote: createQuote(name: $name)
  }
`
