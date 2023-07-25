import React, { useEffect } from 'react'
import { Alert, Button, Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSellerProduct } from '../../action/seller/productAction'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SellerProductsList = () => {

    const {error,loading,sellerProducts} = useSelector(state=>state.getSellerProduct)

    const dispatch = useDispatch()
    const params = useParams()
    const history= useNavigate()
    const sellerId = params.id

    const createProductHandler= (e) =>{
        history(`/seller/product/edit`)
    }

    const deleteHandler = (id) =>{
        <Alert variant='danger'>
            <Alert.Heading>
                You want to delete this product ${id}?
            </Alert.Heading>
        </Alert>
    }

    useEffect(()=>{
        dispatch(getSellerProduct(sellerId))
    },[dispatch,sellerId])

  return (
    <>
        <Row className='align-items-center'>
            <Col>
                <h1>Products</h1>
            </Col>
            <Col className='text-right'>
                <Button className='my-3' onClick={createProductHandler}>
                    <i className='fas fa-plus'></i>Create Product
                </Button>
            </Col>
        </Row>
        <Table striped hover bordered responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {sellerProducts && sellerProducts.map((product)=>{
                    return<tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <Link to={`/seller/product/${product._id}/edit`}>
                                <Button variant="light" className='btn-sm'>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </Link>
                            <Button variant='danger' className='btn-sm' onClick={()=>
                                deleteHandler(product._id)}>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>

                    </tr>
                }

                )}
            </tbody>

        </Table>
    </>
  )
}

export default SellerProductsList
