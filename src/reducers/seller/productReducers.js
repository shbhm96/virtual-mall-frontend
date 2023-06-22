import { 
    GET_SELLER_PRODUCTS_FAIL,
    GET_SELLER_PRODUCTS_REQUEST, 
    GET_SELLER_PRODUCTS_SUCCESS, 
    GET_SELLER_PRODUCT_DETAILS_FAIL, 
    GET_SELLER_PRODUCT_DETAILS_REQUEST,
    GET_SELLER_PRODUCT_DETAILS_SUCCESS
} from "../../constants/seller/productConstants";

export const getSellerProductReducer = (state={},action)=>{
    switch(action.type){
        case GET_SELLER_PRODUCTS_REQUEST:
            return {loading:true}
        case GET_SELLER_PRODUCTS_SUCCESS:
            return {loading:false,sellerProducts:action.payload}
        case GET_SELLER_PRODUCTS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
export const getSellerProductDetailsReducer = (state={},action)=>{
    switch(action.type){
        case GET_SELLER_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case GET_SELLER_PRODUCT_DETAILS_SUCCESS:
            return {loading :false,sellerProductDetails:action.payload}
        case GET_SELLER_PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }

}