import React, { useEffect } from 'react'
import { Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomersList, getSellerDetails } from '../../action/seller/sellerAction'
import { useNavigate, useParams } from 'react-router-dom'

const CustomerLisInShop = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const params = useParams()
    const sellerId = params.id


    const {error,loading,customers} = useSelector(state=>state.getCustomersList)
    const {sellerInfo} = useSelector(state=>state.sellerLogin)
    const{custInfo}  = useSelector(state=>state.custLogin)

   useEffect(()=>{
    if(sellerInfo.length === 0){
        history("/seller/login")
    }else{
        getCustomersList(sellerId)
    }
   },[sellerId,sellerInfo,history,dispatch])



  return (

    <Row>
        <h1>Customer Details</h1>
        <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <td>Customer Id</td>
                    <td>Customer Name</td>
                    <td>Mobile Number</td>
                    <td>Customer Address</td>
                    <td>Total Purchase</td>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.map(customer => {
                        return <tr key={customer._id}>
                                <td>{customer.name}</td>
                                <td>{customer.mobile}</td>
                                <td>{customer.address}</td>
                                <td>{customer.purchase}</td>
                        </tr>
                    })
                }

            </tbody>

        </Table>
    </Row>
  )
}

export default CustomerLisInShop
