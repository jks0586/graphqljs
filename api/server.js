import { ApolloServer, gql } from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import typeDefs from "./src/grpghql/Type/type.js";
import resolvers from "./src/grpghql/resolvers/resolvers.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
})

server.listen().then(({url})=>{
    console.log(url)
})