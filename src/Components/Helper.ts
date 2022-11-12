import { ConstantName } from '../constant';
import { Users } from '../Entities/User';
import { getConnection, getRepository } from 'typeorm';

class Helper {
    // Simple function
    static printSum = (a: any, b: any) => {
        return a + b;
    };
    // Simple function
    static multiply = (a: any, b: any) => {
        return a * b;
    };
    static GenerateAccountCode = async (EntityName: any, digit: string,) => {
        let Lastest = await EntityName.findOne({
            order: { id: 'DESC' },
        });

        //console.log(Lastest);
        const Lastestcode = Lastest ? Lastest.code : "";

        let NumberIncreas;
        if (Lastestcode || Lastestcode !== '') {
            NumberIncreas = Lastestcode; //Check Old code
        } else {
            NumberIncreas = digit; //number of digit to show
        }

        // coerce the previous variable as a number and add 1
        let incrementvalue = (+NumberIncreas) + 1;
        // insert leading zeroes with a negative slice

        const dncrementvalue = (`${digit}` + incrementvalue).slice(- digit.length); // -> result: "0126"
        return dncrementvalue;
    }


    static GenerateCode = async (organization_id: any, EntityName: any, digit: string) => {
        let Lastest = await EntityName.find({
            order: { id: 'DESC' },
            where: { organization: organization_id },
            take: 1
        });

        const Lastestcode = Lastest.length > 0 ? Lastest[0].code : "";
        const splitCode = Lastestcode.split("-");
        let getCode = splitCode[1];

        let NumberIncreas;
        if (getCode || getCode !== '') {
            NumberIncreas = getCode; //Check Old code
        } else {
            NumberIncreas = digit; //number of digit to show
        }
        // coerce the previous variable as a number and add 1
        let incrementvalue = (+NumberIncreas) + 1;
        // insert leading zeroes with a negative slice
        const dncrementvalue = (`${digit}` + incrementvalue).slice(- digit.length); // -> result: "0126"
        return dncrementvalue;
    }

    static getYearMonthDay = async () => {
        const date: any = new Date();
        const invdate = await date.getMonth() + 1 + "" + date.getDate();
        return await date.getFullYear() + "0" + invdate;
    }

    static calulationDiscount = (price: any, discount: any, discount_type: any) => {
        if (discount_type == "percent") {
            return (price * discount) / 100;
        } else {
            return discount;
        }
    }

    static calulationTax = (price: any, tax: any) => {
        return (price * tax) / 100;
    }

    // static checkProductStock = async (item: any, checktype: any) => {
    //     const product = await Product.findOne(item.product_id);
    //     const productStock = getConnection()
    //         .createQueryBuilder()
    //         .update(ProductStock)

    //     if (product?.variant_product == true) {
    //         const prostock = await getConnection().getRepository(ProductStock)
    //             .createQueryBuilder("product_stock")
    //             .where("productId = :productId AND variant = :variant", { productId: item.product_id, variant: item.variation })
    //             .getOne();
    //         let totalQty = prostock ? (prostock?.quantity! + item.quantity) : item.quantity;
    //         if (checktype == "invoice") {
    //             totalQty = prostock ? (prostock?.quantity! - item.quantity) : item.quantity;
    //         }
    //         await productStock
    //             .set({ quantity: totalQty })
    //             .where("productId = :productId AND variant = :variant", { productId: item.product_id, variant: item.variation })
    //             .execute()

    //     } else {
    //         const prostock = await getConnection().getRepository(ProductStock)
    //             .createQueryBuilder("product_stock")
    //             .where("productId = :productId ", { productId: item.product_id })
    //             .getOne();

    //         let totalQty = prostock ? (prostock?.quantity! + item.quantity) : item.quantity;
    //         if (checktype == "invoice") {
    //             totalQty = prostock ? (prostock?.quantity! - item.quantity) : item.quantity;
    //         }

    //         await productStock
    //             .set({ quantity: totalQty })
    //             .where("productId = :productId", { productId: item.product_id })
    //             .execute()
    //     }
    // }
    //

    public static getPromiseData = () => {
        return Promise.resolve({ name: "JsMount", id: 123 });
    };

    public static validateEmail = (email: String) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    public static IfEmailExits = async (email: String, ExceptEmail: any = null) => {
        let checkUserEmail;
        if (ExceptEmail == null) {
            checkUserEmail = await Users.findOne({ where: { email: email } })
        } else {
            checkUserEmail = await getRepository(Users)
                .createQueryBuilder("users")
                .where('users.email = :email', { email: email })
                .andWhere('users.email NOT IN (:...emails)', { emails: [ExceptEmail] })
                .getOne();
        }

        if (checkUserEmail) return true;
        return false;
    }

    public static IfPhoneExits = async (phone: String) => {
        const userPhone = await Users.findOne({ where: { phone: phone } })
        if (userPhone) return true;
        return false;
    }

    public static IfUserAccountExits = async (account_code: String) => {
        const userAccount = await Users.findOne({ where: { code: account_code } })
        if (userAccount) return true;
        return false;
    }

    public static IfCodeExits = async (EntityName: any, codeValue: String, organization_id: any) => {
        const orgCode = await EntityName.findOne({ where: { code: codeValue, organization: organization_id } })
        if (orgCode) return true;
        return false;
    }

    public static isAuthenticated = (user: any, organization_id: any) => {
        const checkOrganzation = user?.organization.filter((item: any) => item.id === parseInt(organization_id));
        if (Array.isArray(checkOrganzation) && checkOrganzation.length) return true
        return false
    }

    public static ifNameExists = async (nameValue: string, EntityName: any) => {
        const AccountName = await EntityName.findOne({ where: { name: nameValue } });
        if (AccountName) return true
        return false
    }

    public static Pagination = async (page: number, limit: number, EntityName: any) => {
        const EntityCount = await EntityName.getCount();
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const data = await EntityName.skip(startIndex).take(limit).getMany();
        return {
            data: data,
            meta: {
                current_page: page,
                from: startIndex + 1,
                to: endIndex,
                last_page: Math.ceil(EntityCount / limit),
                per_page: limit,
                total: EntityCount,
            },
            statusCode: 200,
            message: ConstantName.SUCCESS,
        };
    }


    public static ValidationErrorField = (name: string, value: string) => {
        let require;
        switch (name) {
            case "name":
                if (value.length < 3 || value.length > 255) {
                    require = "name, Name must be longer than or equal to 255 characters";
                } else {
                    require = "name, Name field is required";
                }
                break;
            case "username":
                if (value.length < 5 || value.length > 50) {
                    require = "username, User name must be longer than or equal to 50 characters";
                } else {
                    require = "username, User name field is required";
                }
                break;
            case "user_type":
                require = "user_type, User type field is required";
                break;
            case "first_name":
                if (value.length < 3 || value.length > 50) {
                    require = "first_name, First name must be longer than or equal to 50 characters";
                } else {
                    require = "first_name, First name field is required";
                }
                break;
            case "last_name":
                if (value.length < 3 || value.length > 50) {
                    require = "last_name, Last name must be longer than or equal to 50 characters";
                } else {
                    require = "last_name, Last name field is required";
                }
                break;

            case "total_amount":
                require = "total_amount, Total amount field is required";
                break;

            case "partner_code":
                require = "partner_code, Partner code field is required";
                break;

            case "partner_name":
                require = "partner_name, Partner name field is required";
                break;

            case "purchase_date":
                require = "purchase_date, Purchase date field is required";
                break;

            case "due_date":
                require = "due_date, Due date field is required";
                break;

            case "revision_date":
                require = "revision_date, Revision date field is required";
                break;

            case "title":
                if (value.length < 3 || value.length > 255) {
                    require = "title, Title must be shorter than or equal to 255 characters";
                } else {
                    require = "title, Title field is required";
                }
                break;
            case "description":
                require = "description, Description field is required";
                break;
            case "legal_name":
                require = "legal_name, Legal name field is required";
                break;
            case "product_type":
                require = "product_type, Product type field is required";
                break;
            case "code":
                require = "code, Code field is required";
                break;

            case "account_code":
                require = "account_code, Account code field is required";
                break;

            case "contact_phone":
                require = "contact_phone, Contact phone field is required";
                break;

            case "email":
                if (!this.validateEmail(value)) {
                    require = "email, Email value must be invalid";
                } else {
                    require = "email, Email field is required";
                }
                break;

            case "phone":
                if (value.length < 6 || value.length >= 18) {
                    require = "phone, Phone number must be shorter than or equal to 18 characters";
                } else {
                    require = "phone, Phone field is required";
                }
                break;
            case "password":
                if (value.length < 8 || value.length >= 50) {
                    require = "password, Password must be shorter than or equal to 50 characters";
                } else {
                    require = "password, Password field is required";
                }
                break;
            case "user_type":
                require = "user_type, User type field is required";
                break;

            case "revision_date":
                require = "revision_date, Revision date field is required";
                break;
            // case 6:
            //     day = "Saturday";

            // default:
            //     text = "Looking forward to the Weekend";

        }
        return require;
    }

    public static mapColumnName = (ColumnName: any) => {
        let Column;
        let status = false;
        switch (ColumnName) {
            case "id":
                Column = "id";
                status = true;
                break;
            case "phone":
                Column = "phone";
                status = true;
                break;
            case "email":
                Column = "email";
                status = true;
                break;
            case "name":
                Column = "name";
                status = true;
                break;
            case "username":
                Column = "username";
                status = true;
                break;
            case "user_type":
                Column = "user_type";
                status = true;
                break;
            case "filename":
                Column = "filename";
                status = true;
                break;
            case "original_filename":
                Column = "original_filename";
                status = true;
                break;
            case "size":
                Column = "size";
                status = true;
                break;
            case "title":
                Column = "title";
                status = true;
                break;
            case "cost":
                Column = "cost";
                status = true;
                break;
            case "price":
                Column = "price";
                status = true;
                break;
            case "sku":
                Column = "sku";
                status = true;
                break;
            case "price":
                Column = "price";
                status = true;
                break;
            case "unit":
                Column = "unit";
                status = true;
                break;
            case "description":
                Column = "description";
                status = true;
                break;
            case "discount":
                Column = "discount";
                status = true;
                break;
            case "status":
                Column = "status";
                status = true;
                break;
            case "categoryId":
                Column = "categoryId";
                status = true;
                break;
            case "brandId":
                Column = "brandId";
                status = true;
                break;
            case "countryRegionId":
                Column = "countryRegionId";
                status = true;
                break;
            // Purchase Order
            case "code":
                Column = "code";
                status = true;
            case "payment_term":
                Column = "payment_term";
                status = true;
            case "partner_name":
                Column = "partner_name";
                status = true;
            case "partner_phone":
                Column = "partner_phone";
                status = true;

            case "first_name":
                Column = "first_name";
                status = true;
            // default:
            //     Column = "title";
        }
        return status;
        // return {
        //     status: status,
        //     Column: Column
        // };
    }
}
export default Helper;