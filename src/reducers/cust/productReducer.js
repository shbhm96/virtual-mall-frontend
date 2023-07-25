import { 
    CUSTOMER_PRODUCT_DETAILS_FAIL,
    CUSTOMER_PRODUCT_DETAILS_REQUEST, 
    CUSTOMER_PRODUCT_DETAILS_SUCCESS
} from "../../constants/customer/ProductConstant";

export const CustomerProductDetailsReducer = (state={},action)=>{
    switch(action.type){
        case CUSTOMER_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case CUSTOMER_PRODUCT_DETAILS_SUCCESS:
            return{ loading:false,productDetails:action.payload}
        case CUSTOMER_PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}