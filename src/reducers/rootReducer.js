import { combineReducers } from "redux";
import { sellerLoginReducer, sellerRegisterReducer } from "./seller/sellerReducer";
import { custRegisterReducer,custLoginReducer } from "./cust/custReducer";


const rootReducer = combineReducers({
    //seller Reducers
    sellerLogin         :       sellerLoginReducer,
    sellerRegister      :       sellerRegisterReducer,

    //User or Customer Reducers
    custLogin           :       custLoginReducer,
    custRegister        :       custRegisterReducer,
    


    //General Reducer


    //Admin Reducers
})

localStorage.clear()

const sellerInfoFromLocalStorage = localStorage.getItem("sellerInfo") ? JSON.parse(localStorage.getItem("sellerInfo")) : []

const custInfoFromLocalStorage = localStorage.getItem("custInfo") ? JSON.parse(localStorage.getItem("custInfo")) : []

const initialState = {
    
    //seller State
    sellerLogin : {sellerInfo : sellerInfoFromLocalStorage},

    //Customer State
    custLogin : {custInfo : custInfoFromLocalStorage},
}

export {initialState,rootReducer}