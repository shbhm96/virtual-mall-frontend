import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSellerProduct } from '../../action/seller/productAction'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { Col, Row } from 'react-bootstrap'
import Product from '../../components/Product'

const SellerHomePage = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const {error,loading,sellerProducts}=useSelector(state=>state.getSellerProduct)
  const{sellerInfo} = useSelector(state=>state.sellerLogin)
  console.log("sellerproduct",sellerProducts)
  console.log(sellerInfo)

  const id = params.id
  console.log("seller_id",id)

  useEffect(()=>{
    if(!sellerProducts){
      dispatch(getSellerProduct(id))
    }
  },[dispatch,id])
  return (
    <>
      <h1>Latest Product</h1>
      {loading ? (<Loader/>) : error ? (<Message variant="danger">{error}</Message>):(
    <Row>      
      {sellerProducts && sellerProducts.map((product)=>{
        return <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product}/>
                </Col>
      })}
    </Row>
  )}

    </>

  )
}

export default SellerHomePage
