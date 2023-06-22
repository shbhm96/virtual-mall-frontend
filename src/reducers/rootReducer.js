import { combineReducers } from "redux";
import { 
    sellerGetCustomerDetailsReducer, 
    sellerLoginReducer, 
    sellerRegisterReducer 
} from "./seller/sellerReducer";
import { custRegisterReducer,custLoginReducer } from "./cust/custReducer";
import { getSellerProductReducer } from "./seller/productReducers";


const rootReducer = combineReducers({
    //seller Reducers
    sellerLogin         :       sellerLoginReducer,
    sellerRegister      :       sellerRegisterReducer,
    getCustomersList    :       sellerGetCustomerDetailsReducer,
    getSellerProduct    :       getSellerProductReducer,

    //User or Customer Reducers
    custLogin           :       custLoginReducer,
    custRegister        :       custRegisterReducer,

    //General Reducer


    //Admin Reducers
})


const sellerInfoFromLocalStorage = localStorage.getItem("sellerInfo") ? JSON.parse(localStorage.getItem("sellerInfo")) : []

const custInfoFromLocalStorage = localStorage.getItem("custInfo") ? JSON.parse(localStorage.getItem("custInfo")) : []

const sellerProductFromLocalStorage = localStorage.getItem("sellerProducts") ? JSON.parse(localStorage.getItem("sellerProducts")) : []

const initialState = {
    
    //seller State
    sellerLogin : {sellerInfo : sellerInfoFromLocalStorage},
    getSellerProduct : {sellerProduct:sellerProductFromLocalStorage},

    //Customer State
    custLogin : {custInfo : custInfoFromLocalStorage},
    
}

export {initialState,rootReducer}