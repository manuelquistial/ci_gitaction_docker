require("../config/config");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../graphql/schema");
const resolvers = require("../graphql/resolvers");
const { mongoose } = require("../db/database");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
 
const app = express();
 
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);
 
//Graphql Playground route
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
 
module.exports = app;