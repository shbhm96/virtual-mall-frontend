import { 
    SELLER_ORDERS_LIST_REQUEST, 
    SELLER_ORDERS_LIST_SUCCESS 
} from "../../constants/seller/orderConstants";
import { SELLER_DETAILS_FAIL } from "../../constants/seller/sellerConstant";

export const sellerOrderListReducer = (state={},action)=>{
    switch(action.payload){
        case SELLER_ORDERS_LIST_REQUEST:
            return {loading : true}
        case SELLER_ORDERS_LIST_SUCCESS:
            return {loading:false, sellerOrders:action.payload}
        case SELLER_DETAILS_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state
    }
}