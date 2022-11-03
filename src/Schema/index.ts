import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { SIGN_UP_ACCOUNT, UPDATE_USER_ACCOUNT ,DELETED_USER_ACCOUNT} from './Mutations/User';
import {GET_USER_LIST}  from './Queries/User';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
       getUserList: GET_USER_LIST,
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: SIGN_UP_ACCOUNT,
        updateUser: UPDATE_USER_ACCOUNT,
        deleteUserAccount: DELETED_USER_ACCOUNT,
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
