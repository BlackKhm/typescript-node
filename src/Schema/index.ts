import { GraphQLObjectType, GraphQLSchema } from "graphql";
// import { CREATE_ATTRIBUTE, UPDATE_ATTRIBUTE } from "./Mutations/Attribute";
// import { LOGIN } from "./Mutations/Auth";
// import { CREATE_NEW_BRAND, UPDATE_BRAND, UPDATE_BRAND_STATUS } from "./Mutations/Brand";
// import { CREATE_NEW_CATEGORY, UPDATE_CATEGORY, UPDATE_CATEGORY_STATUS } from "./Mutations/Category";
// import { CREATE_GOODS_RECEIPT } from "./Mutations/GoodsReceipt";
// import { CREATE_INVOICE, UPDATE_INVOICE, UPDATE_INVOICE_STATUS } from './Mutations/Invoice';

// import { CHOOSE_ORGANIZATION, SETUP_NEW_ORGANIZATION, UPDATE_ORGANIZATION_PROFILE } from "./Mutations/Organization";
// import { CREATE_PARTNER, UPDATE_PARTNER, UPDATE_PARTNER_STATUS } from "./Mutations/Partner";

// import { CREATE_PRODUCT, UPDATE_PRODUCT, UPDATE_PRODUCT_STATUS } from './Mutations/Product';
// import { CREATE_PURCHASE, UPDATE_PURCHASE, UPDATE_PURCHASE_STATUS } from './Mutations/Purchase';
// // import { REMOVE_PURCHASEITEM } from "./Mutations/PurchaseItem";
// import { CREATE_QUATATION, UPDATE_QUATATION } from "./Mutations/Quatation";
// import { SIGN_UP_ACCOUNT, UPDATE_ACCOUNT_PASSWORD, UPDATE_ACCOUNT_PROFILE, UPDATE_ACCOUNT_STATUS, INVITE_USER_ACCOUNT } from './Mutations/User';
// import { GET_ALL_ATTRIBUTE, GET_ATTRIBUTEByID } from "./Queries/Attribute";
// import { GET_ALL_BRAND, GET_BRANDByID } from "./Queries/Brand";
// import { GET_ALL_CATEGORY, GET_CATEGORYByID } from "./Queries/Category";
// import { GET_INVENTORY_LIST, GET_INVENTORY_SINGLE, CHECK_PRODUCT_QUANTITY } from './Queries/Inventory';
// import { GET_ALL_INVOICE, GET_INVOICE_LATEST_CODE, GET_SINGLE_INVOICE } from './Queries/Invoice';
// import { MEDIALIST, MEDIASINGLE } from "./Queries/Media";
// import { GET_ORGANIZATION_LIST } from "./Queries/Organization";
// import { GET_ALL_PARTNER, GET_PARTNERByID } from "./Queries/Partner";
// import { GET_ALL_PRODUCT, GET_PRODUCT_SINGLE, GET_PRODUCT_QTY } from './Queries/Product';
// import { GET_ALL_PURCHASE, GET_PURCHASE_LATEST_CODE, GET_SIGNLE_PURCHASE } from './Queries/Purchase';
// import { GET_ALL_QUATATION, GET_QUATATION_ID } from "./Queries/Quatation";

// import { GET_USER_LIST } from './Queries/User';
// import { GET_INDUSTRY_LIST } from './Queries/Industry';
// import { CREATE_INDUSTRY, UPDATE_INDUSTRY } from './Mutations/Industry';
// import { GET_TIMEZONE } from "./Queries/TimeZone";
// import { GET_COUNTRY } from "./Queries/Country";
// import { CREATE_RECEIPT } from "./Mutations/Receipt";
// import { GET_ALL_RECEIPT, GET_RECEIPT_LATEST_CODE, GET_SINGLE_RECEIPT } from './Queries/Receipt';
// import { GET_TAX_ALL } from "./Queries/Taxes";
// import { CREATE_TAX, UPDATE_TAX } from "./Mutations/Taxes";
// import { CREATE_PAYMENT_TERM, UPDATE_PAYMENT_TERM } from './Mutations/PaymentTerm';
// import { GET_PAYMENT_TERM_ALL } from "./Queries/PaymentTerm";
// import { GET_ROLE } from "./Queries/Role";
// import { GET_ACCOUNT_NAME, GET_ACCOUNT_TYPE } from './Queries/AccountType';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        // getUserList: GET_USER_LIST,

        // getProductList: GET_ALL_PRODUCT,
        // getProductSingle: GET_PRODUCT_SINGLE, //id, uuid,
        // getProductCheckQty: GET_PRODUCT_QTY,

        // // BRAND
        // getBrandByID: GET_BRANDByID,
        // getBrandList: GET_ALL_BRAND,

        // // CATEGORY
        // getCategoryList: GET_ALL_CATEGORY,
        // getCategoryByID: GET_CATEGORYByID,

        // // ORGANIZATION
        // getOrganizationList: GET_ORGANIZATION_LIST,

        // // Partner
        // getPartnerList: GET_ALL_PARTNER,
        // getPartnerByID: GET_PARTNERByID,

        // // Purchase List
        // getPurchaseList: GET_ALL_PURCHASE,
        // getSinglePurchase: GET_SIGNLE_PURCHASE,
        // getPurchaseLastCode: GET_PURCHASE_LATEST_CODE,

        // // INVENTORY LIST SECTION
        // getInventoryList: GET_INVENTORY_LIST,
        // CheckProductQty: CHECK_PRODUCT_QUANTITY,
        // getInventoryView: GET_INVENTORY_SINGLE,

        // // Invoice
        // getInvoiceList: GET_ALL_INVOICE,
        // getSingleInvoice: GET_SINGLE_INVOICE,
        // getInvoiceLatestCode: GET_INVOICE_LATEST_CODE,

        // //SALE Receipt
        // getReceiptList: GET_ALL_RECEIPT,
        // getSingleReceipt: GET_SINGLE_RECEIPT,
        // getReceiptLatestCode: GET_RECEIPT_LATEST_CODE,

        // // Quatation
        // getQuatationList: GET_ALL_QUATATION,
        // getQuatationByID: GET_QUATATION_ID,

        // // Atttirbute for all supplier
        // getAttributeList: GET_ALL_ATTRIBUTE,
        // getAttributeByID: GET_ATTRIBUTEByID,

        // // Industry
        // getIndustryList: GET_INDUSTRY_LIST,
        // // getIndustryByID: GET_INDUSTRY_ByID,

        // // Media List from digital ocean
        // getMediaList: MEDIALIST,
        // mediaSingle: MEDIASINGLE,

        // getTimeZone: GET_TIMEZONE,
        // getTaxes: GET_TAX_ALL,
        // getCountry: GET_COUNTRY,
        // getPaymentTerm: GET_PAYMENT_TERM_ALL,
        // getRole: GET_ROLE,

        // getAccountName: GET_ACCOUNT_NAME,
        // getAccountType: GET_ACCOUNT_TYPE,

    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // createUser: SIGN_UP_ACCOUNT,
        // login: LOGIN,
        // InviteUserAccount: INVITE_USER_ACCOUNT,
        // updateAccountPassword: UPDATE_ACCOUNT_PASSWORD,
        // updateAccountStatus: UPDATE_ACCOUNT_STATUS,
        // updateAccountProfile: UPDATE_ACCOUNT_PROFILE,

        // // Product saction
        // createProduct: CREATE_PRODUCT,
        // updateProduct: UPDATE_PRODUCT,
        // updateProductStatus: UPDATE_PRODUCT_STATUS,

        // /// Brand Form Mutation
        // createBrand: CREATE_NEW_BRAND,
        // updateBrand: UPDATE_BRAND,
        // updateBrandStatus: UPDATE_BRAND_STATUS,

        // /// Category Form Mutation
        // createCategory: CREATE_NEW_CATEGORY,
        // updateCategory: UPDATE_CATEGORY,
        // updateCategoryStatus: UPDATE_CATEGORY_STATUS,

        // // Organization
        // setUpOrganization: SETUP_NEW_ORGANIZATION,
        // updateOrganizationProfile: UPDATE_ORGANIZATION_PROFILE,
        // chooseOrganization: CHOOSE_ORGANIZATION,

        // // Partner List saction
        // createPartner: CREATE_PARTNER,
        // updatePartner: UPDATE_PARTNER,
        // updatePartnerStatus: UPDATE_PARTNER_STATUS,

        // // Purchase ORDER
        // createPurchase: CREATE_PURCHASE,
        // updatePurchase: UPDATE_PURCHASE,
        // updatePurchaseStatus: UPDATE_PURCHASE_STATUS,

        // // Goods receipt purchase ordered
        // createGoodsReceipt: CREATE_GOODS_RECEIPT,

        // // Invoice
        // createInvoice: CREATE_INVOICE,
        // updateInvoice: UPDATE_INVOICE,
        // updateInvoiceStatus: UPDATE_INVOICE_STATUS,

        // //Receipt
        // createReceipt: CREATE_RECEIPT,

        // // Quatation
        // createQuatation: CREATE_QUATATION,
        // updateQuatation: UPDATE_QUATATION,

        // // Product Attribute
        // createAttribute: CREATE_ATTRIBUTE,
        // updateAttribute: UPDATE_ATTRIBUTE,

        // // Industry saction
        // createIndustry: CREATE_INDUSTRY,
        // updateIndustry: UPDATE_INDUSTRY,

        // createTax: CREATE_TAX,
        // updateTax: UPDATE_TAX,

        // createPaymentTerm: CREATE_PAYMENT_TERM,
        // updatePaymentTerm: UPDATE_PAYMENT_TERM,
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});


// published apis

// const RootQueryAPIS = new GraphQLObjectType({
//     name: "RootQuery",
//     fields: {
//         getProductAll: GETALLPRODUCT,


//     }
// });

// const MutationAPIS = new GraphQLObjectType({
//     name: "Mutation",
//     fields: { }
// });


// export const schemaAPIS = new GraphQLSchema({
//     query: RootQueryAPIS,
//     mutation: MutationAPIS,
// });