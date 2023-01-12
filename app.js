const express = require('express');
const bodyParser = require('body-parser');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose.connect( "mongodb://localhost:27017/graphql", { useNewUrlParser: true, useUnifiedTopology: true });

//connection
const connection = mongoose.connection;

//event listeners
connection.on('error', () => console.log("error connecting database"));

connection.once('open', async () => {
    console.log("Database connected");
});
app.listen(3000, () => {
  console.log("Running on port 3000");
});
