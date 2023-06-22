import backendApi from "../../api/backend"
import { 
    SELLER_DETAILS_FAIL,
    SELLER_DETAILS_REQUEST,
    SELLER_DETAILS_SUCCESS,
    SELLER_GET_CUSTOMERS_LIST_REQUEST,
    SELLER_GET_CUSTOMERS_LIST_SUCCESS,
    SELLER_LOGIN_FAIL, 
    SELLER_LOGIN_REQUEST, 
    SELLER_LOGIN_SUCCESS, 
    SELLER_LOGOUT_SUCCESS, 
    SELLER_REGISTER_FAIL, 
    SELLER_REGISTER_REQUEST,
    SELLER_REGISTER_SUCCESS
} from "../../constants/seller/sellerConstant"

export const loginSeller = (email,password) => async(dispatch)=>{
    try{
        dispatch({
            type:SELLER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await backendApi.post("/seller/login",{email,password},config)

        dispatch({
            type:SELLER_LOGIN_SUCCESS,
            payload : data,
            loading:false
        })
        localStorage.setItem("sellerInfo",JSON.stringify(data))
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:SELLER_LOGIN_FAIL,payload:error,loading:true })
    }
}

export const getSellerDetails = (id) => async(dispatch)=>{
    try{
        dispatch({
            type:SELLER_DETAILS_REQUEST
        })

        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const {data} = await backendApi.get(`/seller/details/${id}`,config)
        dispatch({
            type:SELLER_DETAILS_SUCCESS,
            payload:data
        })
        localStorage.setItem("sellerInfo",JSON.stringify(data))
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:SELLER_DETAILS_FAIL,payload:error,loading:true })
    }

}

export const registerSeller = (BusinessName,businessOwnerName,sellerMobile,aadharNumber,sellerEmail,password) => async (dispatch)=>{    
    try{
        dispatch({
            type:SELLER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}= await backendApi.post("/seller/register",{
            businessName:BusinessName,
            businessOwnerName,
            sellerMobile,
            aadharNumber,
            sellerEmail,
            password
        },config)

        dispatch({
            type:SELLER_REGISTER_SUCCESS,
            payload:data,
            loading: false
        })
        console.log("User registered")
        dispatch({
            type:SELLER_LOGIN_SUCCESS,
            payload:data
        })
        console.log("New User Logged in")

        localStorage.setItem("sellerInfo",JSON.stringify(data))
        
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:SELLER_REGISTER_FAIL,payload:error,loading:true })
    }
}

export const getCustomersList = (id)=>async(dispatch)=>{
    try{
        dispatch({
            type:SELLER_GET_CUSTOMERS_LIST_REQUEST
        })

        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        const {data} = await backendApi.post("/seller/getcustomers",{id},config)
        dispatch({
            type:SELLER_GET_CUSTOMERS_LIST_SUCCESS,
            loading:false,
            payload:data
        })
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:SELLER_REGISTER_FAIL,payload:error,loading:true })   
    }
}

export const logoutSeller = () =>async(dispatch)=>{
    dispatch({
        type:SELLER_LOGOUT_SUCCESS
    })
    localStorage.removeItem("sellerInfo")
}