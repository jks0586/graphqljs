import { ApolloServer, gql } from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import mongoose from "mongoose";
import MONGODB_URL from "./src/config.js"

mongoose.connect(MONGODB_URL,{
    useNewUrlParse:true,
    useUnifiedTopology:true
})


mongoose.connection.on("connected",()=>{
    console.log('connected to mongodb');
})
mongoose.connection.on("error",(err)=>{
    console.log("error connection",err)
})

import './src/models/User.js';
import './src/models/Quote.js';
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


// mongodb+srv://letscms:letscms@1243@cluster0.rirwt.mongodb.net/graphqldb?retryWrites=true&w=majority