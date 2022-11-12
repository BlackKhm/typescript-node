import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
import { UserType } from '../User';

export const UserResponse = new GraphQLObjectType({
    name: "UserResponse",
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

export const UserResponseSignleType = new GraphQLObjectType({
    name: "UserResponseSingle",
    fields: () => ({
        data: { type: UserType },
        // meta: { type: MetaType },
        // links: { type: LinksType },
        statusCode: { type: GraphQLInt },
        message: { type: GraphQLString },
        error: { type: GraphQLString },
        token_secret: { type: GraphQLString },
        token_expiration: { type: GraphQLInt },
    })
});