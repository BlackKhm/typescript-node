const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
import { GraphQLString } from 'graphql';
import { Users } from '../../Entities/User';
import { UserResponseSignleType } from '../TypeDefs/Response/UserResponse';
import { ConstantName, ConstantType } from '../../constant';
import { Not, IsNull } from 'typeorm';

export const LOGIN = {
    type: UserResponseSignleType,
    args: {
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        login_by: { type: GraphQLString }
    },
    async resolve(parent: any, args: any, request: any) {  //Whitemocha

        let userLogin: any;
        userLogin = await Users.findOne({ where: { email: args.email }});

        const isMatchUser = await bcrypt.compare(args.password, userLogin?.password);
        if (isMatchUser) {
            const token = jwt.sign({ userId: userLogin?.id, userLogin }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
            const decodeToken = await jwt.verify(token, process.env.JWT_SECRET);
            return {
                data: userLogin,
                statusCode: 200,
                message: ConstantName['LOGIN SUCCESS'],
                token_secret: token,
                token_expiration: decodeToken.exp,
            }
        } else {
            return ConstantType.UNAUTHORIZED
        }
    }
}
