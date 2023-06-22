import React, { useEffect, useState } from 'react'

import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
// import Loader from '../../components/Loader';
import { getSellerDetails } from '../../action/seller/sellerAction';

const SellerProfile
 = () => {
  const {sellerInfo} = useSelector((state)=>state.sellerLogin)

  const [BusinessName,setBusinessName] = useState(sellerInfo.businessName);
  const [businessOwnerName,setBusinessOwnerName] = useState(sellerInfo.businessOwnerName);
  const [sellerEmail,setSellerEmail] = useState(sellerInfo.sellerEmail);
  const [mobile,setMobile] = useState(sellerInfo.sellermobile)
  const [aadharNumber,setAadharNumber] = useState(sellerInfo.aadharNumber)
  const [password,setPassword]= useState('')
  const [confPass,setConfPass]= useState('')
  const [msg,setMsg]= useState(null)
  const history = useNavigate()

  const dispatch = useDispatch()
  const params = useParams()
  const id = params.id
  
  // const {success} =useSelector((state)=>state.userUpdateProfile)
  // const {loading:loadingOrders,orders,error:errorOrders} = useSelector((state)=>state.myOrderList)

  const redirect= window.location ? window.location.search.split("=")[1]: "/"

  useEffect(()=>{
    if(!sellerInfo.length === 0){
      history("/seller/login")
    }
    dispatch(getSellerDetails(id))
  },[dispatch,history,sellerInfo,id])

  const submitHandler=(e)=>{
    e.preventDefault()
    if(password !== confPass){
      setMsg("Password Do not match")
    }else{
      // const user = {id: sellerInfo._id,name,email,password}
      // dispatch(updateUserProfile(user))
    //   setEmail('')
    //   setPassword('')
    //   setBusinessName('')
    //   setConfPass('')
    }
  }
  return (
    <Row>
      <Col md={3}>
      <h2>User Profile</h2>
      {msg && <Message variant="info">{msg}</Message>}
      {/* {error &&<Message variant="danger">{error}</Message>}
      {loading && <Loader/>} */}
      {/* {success && <Message variant='sucess'>Profile Updated!</Message>} */}
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
          Update
        </Button>
      </Form>
    </Col>

      {/* <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders && <Loader/>}
        {errorOrders ? <Message variant="danger">{errorOrders}</Message>:(
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Id</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th> 
                <th>DELIVERED</th>
              </tr>
            </thead>
            <tbody>
              {console.log("order kya hai",orders)}
              {orders && orders.map((order)=>{
                return <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.toString().substring(0,10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid ? order.paidAt : (
                    <i className='fas fa-times' style={{color:'red'}}></i>
                  )} </td>
                  <td>
                    {order.isDelivered ? order.isDelivered.toString().substring(0,10):(
                      <i className='fas fa-times' style={{color:'red'}}></i>
                    )}
                  </td>
                  <td>
                    <Link to={`/order/${order._id}`}>
                      <Button variant="light" className='btn-block btn-sm'>Details</Button>
                    </Link>
                  </td>
                </tr>
              })}
            </tbody>

          </Table>
        )}
      </Col> */}
    </Row>    
  )
}


export default SellerProfile

