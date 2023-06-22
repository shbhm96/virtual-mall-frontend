import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSellerAllOrdersList } from '../../action/seller/ordersListAction'
import { useParams } from 'react-router-dom'

const SellerOrdersList = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const id = params.id

    useEffect(()=>{
        dispatch(getSellerAllOrdersList(id))
    },[])
    
  return (
    <h2>My Orders</h2>

  )
}

export default SellerOrdersList
