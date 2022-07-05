const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type User {
    name: String
    email: String
  }
  type Query {
    users: [User]
  }
`;


export default typeDefs;