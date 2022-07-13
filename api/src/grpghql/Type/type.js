import { gql } from 'apollo-server'
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteWithName]
    myprofile: User
    uquote(_id: ID!): [Quote]
  }
  type QuoteWithName {
    _id: String
    name: String
    by: IdName
  }

  type IdName {
    _id: String
    firstName: String
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
    token: String
  }
  type Quote {
    _id: String
    name: String
    by: ID
  }

  type Token {
    token: String
  }
  type Mutation {
    signupUser(UserNew: UserInput!): User
    signInUser(ExistUser: SignInInput!): User
    createQuote(name: String!): String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String
    password: String
  }

  input SignInInput {
    email: String!
    password: String!
  }
`

export default typeDefs
