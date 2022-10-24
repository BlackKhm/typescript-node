const epxress = require("express");

import "reflect-metadata";
// import { rootQuery, schema } from "./Entities/User";
import cors from "cors";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";

require('dotenv').config()

import { graphqlHTTP } from 'express-graphql';
import { ConstantType } from './constant';
import { schema } from './Schema';

import { Users } from "./Entities/User";

const main = async() => {
  const app = epxress();
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.set('view engine', 'ejs');
  app.use(cors());

  app.get('/', (req: any, res: any) => {
      const age: number = 30;
      res.json(ConstantType["BAD REQUEST"])
  })

  await createConnection({
      type: "mysql",
      port: 3306,
      host: process.env.HOST_NAME,
      database: process.env.HOST_DATABASE,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      connectTimeout: 30000,
      logging: true,
      synchronize: false,
      // cache: true,
      entities: [Users]
  });
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    // schema: GraphQLSchema,
    // graphiql?: ?boolean,
    // rootValue?: ?any,
    // context: {ErrorName},
    pretty: false,
    customFormatErrorFn: (error: any) => {
        return error.message
    },

}));

app.listen(process.env.SERVER_PORT, () => console.log(`Server has started http://localhost:${process.env.SERVER_PORT}`));

}
main().catch((err) => {
  console.log(err);
});

