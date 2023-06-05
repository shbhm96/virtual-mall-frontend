import React, { useEffect, useState } from 'react'

import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer';
import Message from '../../components/Message';




const CustRegister = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState(0)
  const [password,setPassword]= useState('')
  const [confPass,setConfPass]= useState('')
  const [msg,setMsg]= useState(null)
  const history = useNavigate()

  const dispatch = useDispatch()

//   const {loading,error,userInfo} = useSelector(state=>state.userRegister)

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
    //   dispatch(registerUser(name,email,password))
      setMobile(0)
      setEmail('')
      setPassword('')
      setName('')
      setConfPass('')
    }
  }
  
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {msg && <Message variant="info">{msg}</Message>}
      {/* {error &&<Message variant="danger">{error}</Message>}
      {loading && <Loader/>} */}
      <Form onSubmit={submitHandler} >
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder='enter your name' type='name' onChange={(e)=>setName(e.target.value)} value={name}/ >
      </Form.Group>
        <Form.Group controlId='emailId'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control placeholder='enter your email address' type='email' onChange={(e)=>setEmail(e.target.value)} value={email}/ >
        </Form.Group>
        <Form.Group controlId='Mobile'>
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control placeholder='enter your Mobile No' type='text' onChange={(e)=>{setMobile(e.target.value) || setMsg('')}} value={mobile}/ >       
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
            Have an Account?<Link to={redirect ? `/cust/login?redirect=${redirect}`:'/login'}>Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>  
    
  )
}

export default CustRegister
