import { ApolloServer } from 'apollo-server-express';

import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import express from 'express';

import http from 'http';

const typeDefs = gql`
  type User {
    name: String
    email: String
  }
  type Query {
    users: [User]
  }
`;

const users = [
    {
      name: 'The Awakening',
      email: 'test@test.com',
    },
    {
      name: 'City of Glass',
      email: 'test1@test.com',
    },
  
  ];

const resolvers = {
    Query: {
      users: () => users,
    },
  };
  
async function startApolloServer(typeDefs, resolvers) {

  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({

    typeDefs,

    resolvers,

    csrfPrevention: true,

    cache: 'bounded',

    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

  });


  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

}