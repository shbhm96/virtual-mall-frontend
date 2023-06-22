import backendApi from "../../api/backend"
import { 
    GET_SELLER_PRODUCTS_FAIL, 
    GET_SELLER_PRODUCTS_REQUEST, 
    GET_SELLER_PRODUCTS_SUCCESS 
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

        const {data} = await backendApi.get("/seller/products/getProducts",config)
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
export const getProductDetails = (id) =>async(dispatch,getState)=>{
    try{
        dispatch({
            
        })
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:GET_SELLER_PRODUCTS_FAIL,payload:error,loading:true })
    }
}