import React, { useEffect, useState } from 'react'

import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import {loginCust} from "../../action/cust/custAction"

const CustLogin = () => {
  const params = useParams()
  const history = useNavigate()
  const dispatch = useDispatch()

  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('')
  const id = params.id

  const {loading,error,custInfo} = useSelector(state=>state.custLogin)


  // const redirect= window.location ? window.location.pathname.toString().split("=")[1] : "/"
  // console.log("value",redirect)

  useEffect(()=>{
    if(custInfo && custInfo.length!==0 ){
        history(`/seller/${id}`)
    }
  },[custInfo,history])

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(loginCust(email,password))
    // setEmail('')
    // setPassword('')
  }
  
  return (
    <FormContainer>
      <h1>Customer Sign In</h1>
      {error &&<Message variant="danger">{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler} >
        <Form.Group controlId='emailId'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control placeholder='enter your email address' type='email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
        </Form.Group>
        <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder='enter your password' type='password' onChange={(e)=>setPassword(e.target.value)} value={password} required/>       
        </Form.Group>
        <Button type="submit" variant="primary" className='my-3'>
          Sign In
        </Button>
        <Row>
          <Col>
            New Customer?<Link to={'/cust/register'}>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>  
    
  )
}

export default CustLogin
