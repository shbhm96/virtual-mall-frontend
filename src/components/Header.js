import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { logoutSeller } from '../action/seller/sellerAction'
import { logoutCust } from "../action/cust/custAction"

const Header = () => {

  const dispatch = useDispatch()
  const history = useNavigate()
  
  const {loading,error,sellerInfo} = useSelector(state=>state.sellerLogin)
  const sellerId = sellerInfo && sellerInfo._id
  
  const {loading:loadingCust,error:errorCust,custInfo} = useSelector(state=>state.custLogin)
  const customerId = custInfo && custInfo._id  

  const sellerLogoutHandler = (e) => {
    e.preventDefault()
    dispatch(logoutSeller())
  }

  const logoutCustHandler = (e)=>{
    e.preventDefault()
    dispatch(logoutCust())
  }

  const gotoHomePage=(e)=>{
    e.preventDefault()
    history(`/seller/${sellerId}/`)
  }

  return (
    <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>     
    <Container>
     <LinkContainer to="/">
       <Navbar.Brand onClick={gotoHomePage}>{sellerId ? sellerInfo.businessName : "Proshop"}</Navbar.Brand>
     </LinkContainer>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
          
         {custInfo.length !==0  ? 
            (<NavDropdown title={custInfo.name}>
              <LinkContainer to={"/cust/profile"}>
                <NavDropdown.Item>                
                  <i className="fa fa-industry" aria-hidden="true"></i>
                    Profile
                </NavDropdown.Item>
              </LinkContainer>
                <NavDropdown.Item onClick={logoutCustHandler}>
                  <i className="fa fa-industry" aria-hidden="true"></i>
                    Logout
                </NavDropdown.Item>
              
             </NavDropdown>) : (             
               <LinkContainer to="/cust/login">
                <Nav.Link>
                  <i className="fa fa-industry" aria-hidden="true"></i>Customer Login
                </Nav.Link>
               </LinkContainer>
            )}
            {sellerInfo.length !== 0 ? 
             <NavDropdown title={sellerInfo.businessName} id="username">
             <LinkContainer to={`/seller/${sellerInfo._id}/profile`}>
             <NavDropdown.Item>
               <i className="fa fa-user p-1" aria-hidden="true"></i>
                     Profile
             </NavDropdown.Item>
             </LinkContainer>
             <LinkContainer to={`/seller/${sellerInfo._id}/customers`}>
             <NavDropdown.Item>
               <i className="fa fa-user p-1" aria-hidden="true"></i>
                     Customer
             </NavDropdown.Item>
             </LinkContainer>
             <LinkContainer to={`/seller/${sellerInfo._id}/orders`}>
             <NavDropdown.Item>
               <i className="fa fa-user p-1" aria-hidden="true"></i>
                     Orders
             </NavDropdown.Item>
             </LinkContainer>
             <LinkContainer to={`/seller/${sellerInfo._id}/products`}>
             <NavDropdown.Item>
               <i className="fa fa-user p-1" aria-hidden="true"></i>
                     Products
             </NavDropdown.Item>
             </LinkContainer>
             <LinkContainer to="/profile">
             <NavDropdown.Item>
               <i className="fa fa-user p-1" aria-hidden="true"></i>
                     Sales
             </NavDropdown.Item>
             </LinkContainer>
             
             <NavDropdown.Item onClick={sellerLogoutHandler}>
             <i className="fa fa-sign-out p-1" aria-hidden="true"></i>
               Logout
             </NavDropdown.Item>
           </NavDropdown> :
             <LinkContainer to="/seller/login">
              <Nav.Link>
              <i className="fa fa-industry" aria-hidden="true"></i>Become a Seller
              </Nav.Link>
             </LinkContainer>
            }
         </Nav>
       </Navbar.Collapse>
     </Container> 
     </Navbar>
   </header>
  )
}

export default Header
