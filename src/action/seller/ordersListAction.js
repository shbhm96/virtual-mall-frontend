import backendApi from "../../api/backend"
import { 
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

export {getSellerAllOrdersList}