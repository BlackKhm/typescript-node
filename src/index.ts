import "reflect-metadata"
import { rootQuery, schema } from "./entity/User";
const epxress = require("express");
import { graphqlHTTP } from 'express-graphql';

const app = epxress();
const hostName = "127.0.0.1";
const port = 3000;


app.get('/', function (req : any , res : any) {
  res.render("index",{name: ""});
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootQuery,
  graphiql: true,
}));

app.listen(port,hostName, function(){
    console.log(`Serve runnign at http://${hostName}:${port}`);
});
