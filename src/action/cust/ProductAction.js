import backendApi from "../../api/backend"
import { CUSTOMER_PRODUCT_DETAILS_FAIL, CUSTOMER_PRODUCT_DETAILS_REQUEST, CUSTOMER_PRODUCT_DETAILS_SUCCESS } from "../../constants/customer/ProductConstant"

const getCustomerProductDetails =(id) => async (dispatch)=>{
    try{
        dispatch({
            type: CUSTOMER_PRODUCT_DETAILS_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}= await backendApi.get(`/cust/products/getProduct/${id}`,config)



        data.mrp = Math.floor(data.price*1.23)


        

        dispatch({
            type:CUSTOMER_PRODUCT_DETAILS_SUCCESS,
            payload:data,
        })
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:CUSTOMER_PRODUCT_DETAILS_FAIL,payload:error})

    }
}

export {getCustomerProductDetails}