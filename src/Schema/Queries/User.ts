import { GraphQLInt, GraphQLString } from "graphql";
import { Users } from "../../Entities/User";
import { UserResponse } from "../TypeDefs/Response/UserResponse";


export const GET_USER_LIST ={
    type: UserResponse,
    args: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString}
    },
    async resolve(parent: any, args: any, request: any) {
        return Users.findOne({where:{id: args.id}});
    }
}