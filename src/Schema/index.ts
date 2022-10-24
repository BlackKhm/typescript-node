import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { CREATE_USER } from './Mutations/User';

// const RootQuery = new GraphQLObjectType({
//     name: "RootQuery",
//     fields: {
       
//     }
// });

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        InviteUserAccount: CREATE_USER,
    }
});

export const schema = new GraphQLSchema({
    // query: RootQuery,
    mutation: Mutation,
});
