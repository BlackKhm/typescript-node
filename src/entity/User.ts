import {buildSchema} from 'graphql';

export const  schema = buildSchema(`type Query {
    firs_name: String,
    last_name: String
  }
  `);
// The root provides a resolver function for each API endpoint
export const rootQuery = {
    firs_name: () => {
        return 'Hello firsname!';
    },
    last_name: () => {
        return 'Hello last_name!';
    },
};

