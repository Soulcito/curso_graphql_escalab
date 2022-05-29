const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { readdirSync } =require('fs');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./database');
const path = require('path');

//const { mergeTypes } require('@graphql/schema'); // deprecated graphql < 13
//const bodyParser = require('body-parser'); // deprecated < v.12 de Node

// express server
const app = express();

// db-connection
connectDB();

// middlewares express
app.use(cors());
app.use(express.json({ limit: "5mb" }));  // Esto antes se hacia con bodyparse

// middlewares routes express
readdirSync("./rest").map((r) => app.use('/api', require('./rest/' + r)));

// type-defs
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, "./typeDefs")));

// resolvers

// apollo-server config / sign
const apolloServer = new ApolloServer({
   typeDefs
})

// vinculation apollo-server with express
apolloServer.applyMiddleware({ app });

// server listen
app.listen( process.env.PORT, ()=> {
   console.log(`server is ready at http:localhost:${process.env.PORT}`); 
});