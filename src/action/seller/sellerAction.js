import backendApi from "../../api/backend"
import { 
    SELLER_LOGIN_FAIL, 
    SELLER_LOGIN_REQUEST, 
    SELLER_LOGIN_SUCCESS, 
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

        const {data} = backendApi.post("/seller/login",{email,password},config)

        dispatch({
            type:SELLER_LOGIN_SUCCESS,
            payload : data,
        })
        localStorage.setItem("sellerInfo",JSON.stringify(data))
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:SELLER_LOGIN_FAIL,payload:error,loading:true })
    }
}

export const registerSeller = (BusinessName,businessOwnerName,sellerMobile,aadharNumber,sellerEmail,password) => async (dispatch)=>{    
    console.log(BusinessName,businessOwnerName,sellerMobile,aadharNumber,sellerEmail,password)
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

        console.log(data)
        return

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