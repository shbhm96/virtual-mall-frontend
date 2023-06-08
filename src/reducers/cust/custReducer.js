import { 
    CUST_LOGIN_FAIL,
    CUST_LOGIN_REQUEST, 
    CUST_LOGIN_SUCCESS, 
    CUST_REGISTER_FAIL, 
    CUST_REGISTER_REQUEST,
    CUST_REGISTER_SUCCESS
} from "../../constants/customer/custConstant";

export const custLoginReducer = (state={},action)=>{
    switch(action.type){
        case CUST_LOGIN_REQUEST:
            return{loading:true,...state}
        case CUST_LOGIN_SUCCESS:
            return {loading:false,custInfo:action.payload}
        case CUST_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}

export const custRegisterReducer = (state={},action)=>{
    switch(action.type){
        case CUST_REGISTER_REQUEST:
            return {loading:true,...state}
        case CUST_REGISTER_SUCCESS:
            return{loading:false,custInfo:action.payload}
        case CUST_REGISTER_FAIL:
            return {loading:false,error:action.payload}
        default:
            return {}
    }
}