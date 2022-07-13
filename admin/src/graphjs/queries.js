import { gql } from '@apollo/client'

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      _id
      name
      by {
        _id
        firstName
      }
    }
  }
`

export const GET_ALL_QUOTES_BY_USER = gql`
  query getAllQuotesByUser {
    uquotes {
      _id
      name
    }
    me: myprofile {
      firstName
      lastName
      email
      quotes {
        name
      }
    }
  }
`

export const GET_MY_PROFILE = gql`
  query getMyProfile {
    me: myprofile {
      firstName
      lastName
      email
      quotes {
        name
      }
    }
  }
`
