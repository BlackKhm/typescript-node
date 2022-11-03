import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
export const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        code: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        isActive: { type: GraphQLBoolean },
        banned: { type: GraphQLBoolean },
    })
})