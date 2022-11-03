import { GraphQLInt, GraphQLString } from "graphql";
import { Users } from "../../Entities/User";
import { UserType } from "../TypeDefs/Response/UserType";


export const GET_USER_LIST ={
    type: UserType,
    args: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString}
    },
    async resolve(parent: any, args: any, request: any) {
        return Users.findOne({where:{id: args.id}});
    }
}