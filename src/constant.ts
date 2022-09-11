
export const ConstantName = {
    UNAUTHORIZED: "Unauthorized",
    EXPIRED: "Sxpired",
    SUCCESS: "Success",
    "CREATED SUCCESSFULLY": "Created successfully",

    "USER NOT EXIST": "User not exist",
    "LOGIN SUCCESS": "Login success",
    "UPDATED SUCCESSFULLY": "Updated successfully",
    "INVALID TOKEN": "Invalid token",
    "STATUS UPDATED SUCCESSFULLY": "Status updated successfully",

    "NOT ACCEPTABLE": "Not acceptable",
    "CONFLECT": "Conflect",
    "CURRENT PASSWORD IS INCORRECT": "Current password is incorrect",
    "CONFIRM PASSWORD IS NOT MATCH": "Confirm password is not match"
}

export const ConstantError = (InputMsg: any, status_code: any) => {
    return {
        message: InputMsg,
        statusCode: status_code,
        error: null,
        meta: null,
        data: null
    }
}

export const ConstantType = {
    "BAD REQUEST": {
        message: "Bad Request",
        statusCode: 400, //400 Bad Request
        error: null,
        meta: null,
        data: null
    },
    "Banned": {
        message: "You're temporarily banned, please contact to support, for further assistance",
        statusCode: 400, //400 Bad Request
        error: null,
        meta: null,
        data: null
    },

    UNAUTHORIZED: {
        message: "Invalid credentials",
        statusCode: 400, //401 Unauthorized is the status code to return when the client provides no credentials or invalid credentials.
        error: null,
        meta: null,
        data: null
    },

    EXPIRED: {
        message: "Token has expired",
        statusCode: 400, //Invalid Token,
        error: null,
        meta: null,
        data: null,
    },

    FORBIDDEN: {
        message: "Forbidden",
        statusCode: 400, //403 Forbidden
        error: null,
        meta: null,
        data: null,
    },

    "USER NOT EXIST": {
        message: "User not exist",
        statusCode: 401,  //Not Found,
        error: null,
        meta: null,
        data: null,
    },

    "METHOD NOT ALLOWED": {
        message: "Method Not Allowed",
        statusCode: 401,  //Method Not Allowed,
        error: null,
        meta: null,
        data: null,
    },

    "NOT ACCEPTABLE": {
        message: "Not Acceptable",
        statusCode: 401,  //Not Acceptable,
        error: null,
        meta: null,
        data: null,
    },

    "CONFLECT": {
        message: "Conflect",
        statusCode: 401,  //Not Acceptable,
        error: null,
        meta: null,
        data: null,
    },

    // 407 Proxy Authentication Required
    // 408 Request Timeout
    // 409 Conflict
    // 500 Internal Server Error
    // 501 Not Implemented
    // 502 Bad Gateway
    // 503 Service Unavailable
    // 504 Gateway Timeout
    // 505 HTTP Version Not Supported
    // 506 Variant Also Negotiates
    "CURRENT PASSWORD IS INCORRECT": {
        message: "Current password is invalid",
        statusCode: 401,
        error: null,
        meta: null,
        data: null
    },

    "PHONE NUMBER ALREADY USE": {
        message: "Phone number already use ",
        statusCode: 401,
        error: null,
        meta: null,
        data: null
    },

    "EMAIL ALREADY USE": {
        message: "Email already use",
        statusCode: 401,
        error: null,
        meta: null,
        data: null
    },

    "CONFIRM PASSWORD IS NOT MATCH": {
        message: "Confirm password is not match",
        statusCode: 401,
        error: null,
        meta: null,
        data: null
    },

    SUCCESS: {
        message: "Success",
        statusCode: 200,
        error: null,
        meta: null,
        data: null
    },

    "CREATED SUCCESSFULLY": {
        message: "Created successfully ",
        statusCode: 200,
        error: null,
        meta: null,
        data: null
    },

    "LOGIN SUCCESS": {
        message: "Login success",
        statusCode: 200,
        error: null,
        meta: null,
        data: null
    },

    "UPDATED SUCCESSFULLY": {
        message: "Updated successfully",
        statusCode: 200,
        error: null,
        meta: null,
        data: null
    },

    "STATUS UPDATED SUCCESSFULLY": {
        message: "Status updated successfully",
        statusCode: 200,
        error: null,
        meta: null,
        data: null
    },

    "INVALID TOKEN": {
        message: "Invalid Token",
        statusCode: 403,
        error: null,
        meta: null,
        data: null
    },
}


// export const     {
//     data: null,//await category.skip(skip).take(per_page).getMany(),
//     meta: null,//Helper.PaginateMeta(page, per_page, categoryRepo),
//     statusCode: 498, ///Invalid Invalid Organization (Esri)
//     message: "Invalid Invalid",
// };


// export const getErrorCode = ErrorName=> {
//     return this.ErrorType
