import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCustomerProductDetails } from '../../action/cust/ProductAction'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import Rating from '../../components/Rating'
import { RupeeSign } from '../../assets/Symbols'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const CustViewProduct = () => {

    const [qty,setQty] = useState(1)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const params = useParams()
    const productId = params.id

    const{loading,error,productDetails} = useSelector(state=>state.customerProductDetails)
    const{sellerInfo} = useSelector(state=>state.sellerLogin)

    const sellerid = sellerInfo._id

    const productDiscount = (price,mrp)=>{
      let mrp1 = Math.round(mrp)
      let price1 = Math.round(price)
      return Math.round((mrp1-price1)*100/mrp1)
  }

    const addToCartHandler=()=>{
      navigate(`/cart/${productId}?qty=${qty}`)
    }
    console.log("product ",productDetails)
    useEffect(()=>{
        if(productDetails && productDetails.length == 0){
            console.log("leo")
            dispatch(getCustomerProductDetails(productId))
        }
    },[productId,dispatch,productDetails])



  return (
    <>
        <Link className='btn btn-dark my-3' to={`/seller/${sellerid}`}>Go Back</Link>
        {loading && <Loader/>}
        {error && <Message variant="danger">{error}</Message>}
        {productDetails &&        
        <Row>
            <Col md={5}>
                <Image src={productDetails && productDetails.image} alt={productDetails.name} fluid thumbnail />
            </Col> 
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{productDetails.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={productDetails.rating} text={`${productDetails.numReviews} reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        
                        <span className='m-2' style={{color:"red",fontSize:"30px"}}>
                            
                            -{productDiscount(productDetails.price,productDetails.price*1.23)}%
                        </span>{RupeeSign}{productDetails.price}<br className='m-3'/>
                        <span className='text-decoration-line-through fw-bold'>{RupeeSign}{Math.round(productDetails.price*1.23)} </span>
                        
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Description: </b><br/>
                        {productDetails.description &&  productDetails.description.toString().split("\n").map((x)=>{
                            return(
                                <li key={x}>{x}</li>
                            )
                        })}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>
                                        {RupeeSign}{productDetails.price}
                                    </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>{productDetails.countInStock > 0 ? "In Stock":"Out of Stock"}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {productDetails.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>                                    
                                    <Col>Qty:</Col>
                                    <Col><Form.Control 
                                            as="select" 
                                            value={qty} 
                                            onChange={(e)=>setQty(e.target.value)}>
                                                {[...Array(productDetails.countInStock).keys()].map( x => {
                                                    return <option key={x+1} value={x+1}>{x+1}</option>
                                                })}
                                        </Form.Control></Col>
                                </Row>
                            </ListGroup.Item>       
                        )}
                        <ListGroup.Item>
                            <Button
                                onClick={addToCartHandler}
                                className='btn-block' 
                                type="button" 
                                disabled={productDetails.countInStock===0}
                            >
                                    Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
}
    </>
  )
}

export default CustViewProduct