import { GraphQLInt, GraphQLString, GraphQLFloat } from 'graphql';
import jwt from "jsonwebtoken";

import { ConstantName, ConstantType } from '../../constant';
import { UserType } from '../TypeDefs/Response/UserResponse';
import { Users } from "../../Entities/User";

const USER_FIELDs = {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
}

export const CREATE_USER = {
    type: UserType,
    args: USER_FIELDs,
    async resolve(parent: any, args: any, request: any) {
        console.log(request)
        // if (args.password !== args.password_confirm) {
        //     return ConstantType['CONFIRM PASSWORD IS NOT MATCH'];
        // }

        // if (await Helper.IfEmailExits(args.email)) { //check if email address already use in system
        //     return ConstantType['EMAIL ALREADY USE']
        // }

        // if (await Helper.IfPhoneExits(args.phone)) { //check if phone number already use in system
        //     return ConstantType['PHONE NUMBER ALREADY USE']
        // }

        // const AccountCode = await Helper.GenerateAccountCode(Users, "000000000");
        // if (await Helper.IfUserAccountExits(AccountCode)) {
        //     return ConstantType['NOT ACCEPTABLE']
        // }

        // const roleId = args.role_id ? args.role_id : 1;
        const user = new Users();
        user.first_name = args.first_name;
        // user.username = args.username;
        // user.code = AccountCode; //generate new account  code for new account
        // user.email = args.email;
        // user.user_type = 'primary';
        // user.phone = args.phone;
        // user.role = await Role.findOne(roleId);;
        // user.password = await bcrypt.hash(args.password, 10); //args.password;
        // const errors = await validate(user);
        // if (errors.length > 0) {
        //     const labelstring: any = Helper.ValidationErrorField(errors[0].property, errors[0].value)
        //     const strMessage = labelstring.split(",");
        //     return {
        //         data: "",
        //         meta: "",
        //         statusCode: 401,
        //         error: strMessage[0].trim(),
        //         message: strMessage[1].trim()
        //     }
        // } else {
        //     user.save();
        //     return {
        //         data: user,
        //         meta: null,
        //         statusCode: 200,
        //         message: ConstantName.SUCCESS
        //     }
        // }
    }
}

