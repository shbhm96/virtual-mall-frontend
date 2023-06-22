import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FormContainer from "../../components/FormContainer.js"
import { Button, Form } from 'react-bootstrap'
import Loader from '../../components/Loader.js'
import Message from '../../components/Message.js'
import { useDispatch, useSelector } from 'react-redux'
import { getSellerProductDetails } from '../../action/seller/productAction.js'
import uploadImageApi from '../../api/uploadImageApi.js'

const SellerCreateProduct = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const productId = params.id

    const {loading,error,} = useSelector(state=>state)

  const[Name,setName] = useState("Sample Product")
  const[Price,setPrice] = useState(0)
  const[Category,setCategory] = useState("sample")
  const[Brand,setBrand] = useState("sample")
  const[CountInStock,setCountInStock] = useState(0)
  const[Description,setDescription] = useState("This is a sample description.")
  const[Image,setImage] = useState("/images/sample.jpg")
  const[file,setFile] = useState("")
  const [errorMsg,setErrorMsg] = useState("")



  const submitHandler= (e) =>{
    e.preventDefault()
  }

  const uploadImageHandler = (e)=>{
    const validFileTypes = ['image/jpg','image/jpeg','image/png']
    if(validFileTypes.find(type => type === file.type)){
      setErrorMsg("Uploaded image must be in JPG/JPEG/PNG format")
      return
    }
   const formData = new FormData()
   formData.append("image",file)
   const result = uploadImageApi(formData)
   console.log("result",result)
  }

  useEffect(()=>{
    if(productId){
        dispatch(getSellerProductDetails(productId))
    }
  },[])

    
  return (
    <>
      <Link to="/admin/products" className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Create Product</h1>
        <Form className='py-4' onSubmit={submitHandler}>
          <Form.Group className="my-2"controlId='productName'>
            <Form.Label>Product Name</Form.Label>
            <Form.Control placeholder='Enter Product Name' type="text" onChange={(e)=>setName(e.target.value)} value={Name}  />
          </Form.Group>
          <Form.Group className="my-2"controlId='productPrice'>
            <Form.Label>Product Price</Form.Label>
            <Form.Control placeholder='Enter Product Price' type="Number" onChange={(e)=>setPrice(e.target.value)} value={Price}  />
          </Form.Group>
          <Form.Group className="my-2"controlId='productCategory'>
            <Form.Label>Product Category</Form.Label>
            <Form.Control placeholder='Enter Product Category' type="text" onChange={(e)=>setCategory(e.target.value)} value={Category}  />
          </Form.Group>
          <Form.Group className="my-2"controlId='productBrand'>
            <Form.Label>Product Brand</Form.Label>
            <Form.Control placeholder='Enter Product Brand' type="text" onChange={(e)=>setBrand(e.target.value)} value={Brand}  />
          </Form.Group>
          <Form.Group className="my-2"controlId='productCountInStock'>
            <Form.Label>Product Count In Stock</Form.Label>
            <Form.Control placeholder='Enter Product CountInStock' type="text" onChange={(e)=>setCountInStock(e.target.value)} value={CountInStock}  />
          </Form.Group>
          <Form.Group className="my-2"controlId='productDescription'>
            <Form.Label>Product Description</Form.Label>
            <Form.Control placeholder='Enter Product Description' type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}  />
          </Form.Group>
          <Form.Group className="my-2"controlId='productImage'>
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="text" value={Image}/>
            <Form.Control type="file" onChange={uploadImageHandler}  />
              {loading && <Loader/>}
              {error && <Message variant="danger">{error}</Message>}
              {errorMsg && <Message variant="danger">{errorMsg}</Message>}
          </Form.Group>
          <Button type="submit" varinat="primary" className='my-2'>
            Submit
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default SellerCreateProduct