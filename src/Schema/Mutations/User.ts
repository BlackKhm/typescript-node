import { reverse } from 'dns';
import { GraphQLInt, GraphQLString, GraphQLFloat } from 'graphql';
import jwt from "jsonwebtoken";
import { Users } from '../../Entities/User';

import { UserType } from '../TypeDefs/Response/UserType';
const bcrypt = require('bcrypt');

const USER_FIELDs = {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: {type: GraphQLString},
    user_type: {type: GraphQLString},
    code: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: GraphQLString},
    password: { type: GraphQLString },
    password_confirm: { type: GraphQLString },
}
export const SIGN_UP_ACCOUNT = {
    type: UserType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        username: {type: GraphQLString},
        user_type: {type: GraphQLString},
        code: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        password: { type: GraphQLString },
        password_confirm: { type: GraphQLString }
    },
    async resolve(parent: any, args: any, request: any) {
        const user = new Users();
        user.name = args.name;
        user.user_type = args.user_type
        user.phone = args.phone;
        user.username = args.username;
        await user.save();  
        return user;
    }
}

export const UPDATE_USER_ACCOUNT = {
    type: UserType,
    args: USER_FIELDs,
    async resolve(parent: any, args: any, request: any) {
        console.log(args.id)
        const inputUser:any =  await Users.findOne({where:{id: args.id}});
        inputUser.name = args.name;
        inputUser.save(); return inputUser;
    }
}

export const DELETED_USER_ACCOUNT = {
    type: UserType,
    args: USER_FIELDs,
    async resolve(parent: any, args: any, request: any) {
        const inputUser:any =  await Users.findOne({where:{id: args.id}});
        return inputUser;
    }
}
