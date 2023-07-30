import backendApi from "../../api/backend"
import { 
    GET_SELLER_PRODUCTS_FAIL, 
    GET_SELLER_PRODUCTS_REQUEST, 
    GET_SELLER_PRODUCTS_SUCCESS, 
    GET_SELLER_PRODUCT_DETAILS_FAIL, 
    GET_SELLER_PRODUCT_DETAILS_REQUEST,
    GET_SELLER_PRODUCT_DETAILS_SUCCESS
} from "../../constants/seller/productConstants"

export const getSellerProduct = (id) => async(dispatch,getState)=>{
    try{
        dispatch({
            type:GET_SELLER_PRODUCTS_REQUEST
        })

        const {sellerLogin : {sellerInfo}} = getState()
        const config = {
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${sellerInfo.token}`
            }
        }
        console.log("seller Product")
        const {data} = await backendApi.get(`/seller/products/getProducts/${id}`,config)
        console.log("data",data)

        dispatch({
            type:GET_SELLER_PRODUCTS_SUCCESS,
            payload:data
        })
        localStorage.setItem("sellerProducts",JSON.stringify(data))
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:GET_SELLER_PRODUCTS_FAIL,payload:error,loading:true })

    }
}
export const getSellerProductDetails = (id) =>async(dispatch,getState)=>{
    try{
        dispatch({
            type:GET_SELLER_PRODUCT_DETAILS_REQUEST          
        })

        const {sellerLogin : {sellerInfo}} = getState()
        const config = {
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${sellerInfo.token}`
            }
        }
        console.log("seller Product")
        const {data} = await backendApi.get(`/seller/product/${id}/edit`,{},config)
        console.log("data",data)

        dispatch({
            type:GET_SELLER_PRODUCT_DETAILS_SUCCESS,
            payload:data

        })
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:GET_SELLER_PRODUCT_DETAILS_FAIL,payload:error,loading:true })
    }
}