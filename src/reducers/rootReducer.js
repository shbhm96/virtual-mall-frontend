import { combineReducers } from "redux";
import { 
    sellerGetCustomerDetailsReducer, 
    sellerLoginReducer, 
    sellerRegisterReducer 
} from "./seller/sellerReducer";
import { custRegisterReducer,custLoginReducer } from "./cust/custReducer";
import { getSellerProductDetailsReducer, getSellerProductReducer } from "./seller/productReducers";
import { sellerOrderListReducer } from "./seller/orderReducer";
import { CustomerProductDetailsReducer } from "./cust/productReducer";
import { cartReducer } from "./cust/cartReducer";


const rootReducer = combineReducers({
    //seller Reducers
    sellerLogin         :       sellerLoginReducer,
    sellerRegister      :       sellerRegisterReducer,
    getCustomersList    :       sellerGetCustomerDetailsReducer,
    getSellerProduct    :       getSellerProductReducer,
    sellerAllOrdersList:        sellerOrderListReducer,
    sellerProductDetails:       getSellerProductDetailsReducer,
    

    //User or Customer Reducers
    custLogin           :       custLoginReducer,
    custRegister        :       custRegisterReducer,
    cart                :       cartReducer,
    customerProductDetails :    CustomerProductDetailsReducer,


    //General Reducer


    //Admin Reducers
})


const sellerInfoFromLocalStorage = localStorage.getItem("sellerInfo") ? JSON.parse(localStorage.getItem("sellerInfo")) : []

const cartItemsfromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]

const custInfoFromLocalStorage = localStorage.getItem("custInfo") ? JSON.parse(localStorage.getItem("custInfo")) : []

const sellerProductFromLocalStorage = localStorage.getItem("sellerProducts") ? JSON.parse(localStorage.getItem("sellerProducts")) : []

const shippingAddressFromStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}

const initialState = {
    
    //seller State
    sellerLogin : {sellerInfo : sellerInfoFromLocalStorage},
    getSellerProduct : {sellerProduct:sellerProductFromLocalStorage},
    sellerAllOrdersList: {sellerOrders:[]},
    sellerProductDetails:{sellerProductDetails:{}},

    //Customer State
    custLogin : {custInfo : custInfoFromLocalStorage},
    cart:{cartItems:cartItemsfromLocalStorage,shippingAddress : shippingAddressFromStorage},
    customerProductDetails:{productDetails:{}}
    
}

export {initialState,rootReducer}