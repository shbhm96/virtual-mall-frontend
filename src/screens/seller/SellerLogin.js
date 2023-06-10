import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import FormContainer from '../../components/FormContainer'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { loginSeller } from '../../action/seller/sellerAction.js'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

const SellerLogin = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const history = useNavigate()
  const dispatch = useDispatch()

  const{loading,error,sellerInfo} = useSelector(state=>state.sellerLogin)
  
  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(loginSeller(email,password))
  }

  useEffect(()=>{
    if(sellerInfo){
        history('/')
    }
  },[sellerInfo,history])

  return ( 
    <FormContainer>
      <h1>Seller Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler} >
        <Form.Group controlId='emailId'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control placeholder='enter your email address' type='email' onChange={(e)=>setEmail(e.target.value)} value={email}/ >
        </Form.Group>
        <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder='enter your password' type='password' onChange={(e)=>setPassword(e.target.value)} value={password}/ >       
        </Form.Group>
        <Button type="submit" variant="primary" className='my-3'>
          Sign In
        </Button>
        <Row>
          <Col>
            New Customer?<Link to={'/seller/register'}>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default SellerLogin
