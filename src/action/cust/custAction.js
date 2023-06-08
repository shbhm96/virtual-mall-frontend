import backendApi from "../../api/backend"
import { 
    CUST_LOGIN_REQUEST,
    CUST_LOGIN_FAIL,    
    CUST_LOGIN_SUCCESS, 
    CUST_REGISTER_FAIL, 
    CUST_REGISTER_REQUEST,
    CUST_REGISTER_SUCCESS } from "../../constants/customer/custConstant"

const loginCust = (email,password) => async(dispatch)=>{
    try{
        dispatch({
            type:CUST_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = backendApi.post("/cust/login",{email,password},config)
        console.log("cust data",data)
        dispatch({
            type:CUST_LOGIN_SUCCESS,
            payload : data,
        })
        localStorage.setItem("custInfo",JSON.stringify(data))
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:CUST_LOGIN_FAIL,payload:error,loading:true })
    }
}

const registerCust = (name,email,password,mobile) => async (dispatch)=>{    
    console.log(name,email,password,mobile)
    try{
        dispatch({
            type:CUST_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}= await backendApi.post("/cust/create",{
            name,email,password,mobile
        },config)

        dispatch({
            type:CUST_REGISTER_SUCCESS,
            payload:data,
            loading: false
        })
        console.log("Cust registered")
        dispatch({
            type:CUST_LOGIN_SUCCESS,
            payload:data
        })
        console.log("New CUst Logged in")

        localStorage.setItem("custInfo",JSON.stringify(data))
        
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:CUST_REGISTER_FAIL,payload:error,loading:true })
    }
}

export{loginCust,registerCust}