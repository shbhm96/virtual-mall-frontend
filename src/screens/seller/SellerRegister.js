import React, { useEffect, useState } from 'react'
import FormContainer from '../../components/FormContainer';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { registerSeller } from '../../action/seller/sellerAction';

const SellerRegister = () => {
  const [BusinessName,setBusinessName] = useState('');
  const [businessOwnerName,setBusinessOwnerName] = useState('');
  const [sellerEmail,setSellerEmail] = useState('');
  const [mobile,setMobile] = useState(0)
  const [aadharNumber,setAadharNumber] = useState(0)
  const [password,setPassword]= useState('')
  const [confPass,setConfPass]= useState('')
  const [msg,setMsg]= useState(null)

  const history = useNavigate()
  const dispatch = useDispatch()

//    const {loading,error,userInfo} = useSelector(state=>state.userRegister)

  const redirect= window.location ? window.location.search.split("=")[1]: "/"

//   useEffect(()=>{
//     if(userInfo){
//         history('/cart')
//     }
//   },[userInfo,history,redirect])

  const submitHandler=(e)=>{
    e.preventDefault()
    if(mobile.toString().length !==10){
      setMsg("Invalid Mobile No.")
    }
    if(password !== confPass){
      setMsg("Password Do not match")
    }else{
      dispatch(registerSeller(BusinessName,businessOwnerName,mobile,aadharNumber,sellerEmail,password))
      // setBusinessName("")
      // setBusinessOwnerName("")
      // setAadharNumber(0)
      // setMobile(0)
      // setSellerEmail('')
      // setPassword('')
      // setConfPass('')
    }
  }
  
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {msg && <Message variant="info">{msg}</Message>}
      {/* {error &&<Message variant="danger">{error}</Message>}
      {loading && <Loader/>} */}
      <Form onSubmit={submitHandler} >
        <Form.Group controlId='Business Name'>
            <Form.Label>Buisness Name</Form.Label>
            <Form.Control placeholder='enter your business name' type='name' onChange={(e)=>setBusinessName(e.target.value)} value={BusinessName}/ >
        </Form.Group>
        <Form.Group controlId='Business Owner Name'>
            <Form.Label>Buisness Owner Name</Form.Label>
            <Form.Control placeholder='enter business Owner name' type='name' onChange={(e)=>setBusinessOwnerName(e.target.value)} value={businessOwnerName}/ >
        </Form.Group>
        <Form.Group controlId='emailId'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control placeholder='enter your email address' type='email' onChange={(e)=>setSellerEmail(e.target.value)} value={sellerEmail}/ >
        </Form.Group>
        <Form.Group controlId='aadharNumber'>
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control placeholder='enter aadhar number' type='Number' onChange={(e)=>setAadharNumber(e.target.value)} value={aadharNumber}/ >
        </Form.Group>
        <Form.Group controlId='Mobile'>
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control placeholder='enter your Mobile No' type='Number' onChange={(e)=>{setMobile(e.target.value) || setMsg('')}} value={mobile}/ >       
        </Form.Group>
        <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder='enter your password' type='password' onChange={(e)=>{setPassword(e.target.value) || setMsg('')}} value={password}/ >       
        </Form.Group>
        <Form.Group controlId='Confirm password'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control placeholder='enter your confirm password' type='password' onChange={(e)=>setConfPass(e.target.value) || setMsg('')} value={confPass}/ >       
        </Form.Group>
        <Button type="submit" variant="primary">
          Register
        </Button>
        <Row>
          <Col>
            Have an Account?<Link to={redirect ? `/login?redirect=${redirect}`:'/seller/login'}>Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>  
    
  )
}

export default SellerRegister
