import { combineReducers } from "redux";
import { sellerLoginReducer } from "./seller/sellerReducer";


const rootReducer = combineReducers({
    sellerLogin : sellerLoginReducer
})


// const sellerInfoFromLocalStorage = localStorage.getItem("sellerInfo") ? JSON.parse(localStorage.getItem("sellerInfo")) : null

const initialState = {
    sellerLogin : {sellerInfo : []}
}

export {initialState,rootReducer}