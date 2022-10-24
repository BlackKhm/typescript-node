import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
// import { RoleType } from './Role';
export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        // username: { type: GraphQLString },
        // code: { type: GraphQLString },
        // email: { type: GraphQLString },
        // phone: { type: GraphQLString },
        // profile: { type: GraphQLString },
        // user_type: { type: GraphQLString },
        // isActive: { type: GraphQLBoolean },
        // banned: { type: GraphQLBoolean },
        // added_by: { type: GraphQLString },
        // isOnline: { type: GraphQLBoolean },
        // role: { type: RoleType }
    })
})