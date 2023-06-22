import { 
    SELLER_DETAILS_FAIL,
    SELLER_DETAILS_REQUEST,
    SELLER_DETAILS_SUCCESS,
    SELLER_GET_CUSTOMERS_LIST_FAIL,
    SELLER_GET_CUSTOMERS_LIST_REQUEST,
    SELLER_GET_CUSTOMERS_LIST_SUCCESS,
    SELLER_LOGIN_FAIL,
    SELLER_LOGIN_REQUEST, 
    SELLER_LOGIN_SUCCESS, 
    SELLER_REGISTER_FAIL, 
    SELLER_REGISTER_REQUEST,
    SELLER_REGISTER_SUCCESS
} from "../../constants/seller/sellerConstant";

export const sellerLoginReducer = (state={},action)=>{
    switch(action.type){
        case SELLER_LOGIN_REQUEST:
            return{loading:true,...state}
        case SELLER_LOGIN_SUCCESS:
            return {loading:false,sellerInfo:action.payload}
        case SELLER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const sellerRegisterReducer = (state={},action)=>{
    switch(action.type){
        case SELLER_REGISTER_REQUEST:
            return {loading:true,...state}
        case SELLER_REGISTER_SUCCESS:
            return{loading:false,sellerInfo:action.payload}
        case SELLER_REGISTER_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const sellerDetailsReducer = (state ={},action)=>{
    switch(action.type){
        case SELLER_DETAILS_REQUEST:
            return {loading:true}
        case SELLER_DETAILS_SUCCESS:
            return {loading:false,sellerInfo:action.payload}
        case SELLER_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        default:
                return state
    }
}

export const sellerGetCustomerDetailsReducer =  (state={},action)=>{
    switch(action.type){
        case SELLER_GET_CUSTOMERS_LIST_REQUEST:
            return {loading:true}
        case SELLER_GET_CUSTOMERS_LIST_SUCCESS:
            return {loading:false,customers:action.payload}
        case SELLER_GET_CUSTOMERS_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}