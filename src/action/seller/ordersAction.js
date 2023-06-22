import backendApi from "../../api/backend"
import { 
    AMOUNT_PAID_FAIL,
    AMOUNT_PAID_REQUEST,
    AMOUNT_PAID_SUCCESS,
    ORDER_DELIVERED_FAIL,
    ORDER_DELIVERED_REQUEST,
    ORDER_DELIVERED_SUCCESS,
    SELLER_ORDERS_LIST_FAIL,
    SELLER_ORDERS_LIST_REQUEST, 
    SELLER_ORDERS_LIST_SUCCESS 
} from "../../constants/seller/orderConstants"

const getSellerAllOrdersList = (id) =>async(dispatch,getState)=>{
    try{
        dispatch({
            type:SELLER_ORDERS_LIST_REQUEST
        })

        const {sellerLogin : { sellerInfo }} = getState()

        const config = {
            headers:{
                Authorization:`Bearer ${sellerInfo.token}`
            }
        }

        const {data} = await backendApi.post("/seller/getAllOrders",{},config)
        console.log("data",data)
        dispatch({
            type:SELLER_ORDERS_LIST_SUCCESS,
            payload:data
        })

    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:SELLER_ORDERS_LIST_FAIL,payload:error,loading:true })


    }
}
export const amountPaid=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:AMOUNT_PAID_REQUEST,
            loading:true
        })

        const {userLogin : { userInfo }} = getState()

        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data}= await backendApi.get(`/seller/order/paid/${id}`,config)
        console.log("admin orders",data)
        dispatch({
            type:AMOUNT_PAID_SUCCESS,
            payload:data,
        })           
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:AMOUNT_PAID_FAIL,payload:error,loading:true })
    }
}

export const orderDelivered=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:ORDER_DELIVERED_REQUEST,loading:true
        })

        const {userLogin : { userInfo }} = getState()

        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data}= await backendApi.get(`/seller/order/delivered/${id}`,config)
        console.log("admin orders",data)
        dispatch({
            type:ORDER_DELIVERED_SUCCESS,
            payload:data,
        })           
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:ORDER_DELIVERED_FAIL,payload:error,loading:true })
    }
}
export {getSellerAllOrdersList}