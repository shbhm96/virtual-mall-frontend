import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>     
    <Container>
     <LinkContainer to="/">
       <Navbar.Brand href="/">Proshop</Navbar.Brand>
     </LinkContainer>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
          <LinkContainer to="/cust/login">
            <Nav.Link>
            <i className='fa fa-shopping-cart'></i>Customer Login
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/seller/login">
            <Nav.Link>
               <i className="fa fa-industry" aria-hidden="true"></i>Become a Seller
             </Nav.Link>
             </LinkContainer>
         </Nav>
       </Navbar.Collapse>
     </Container> 
     </Navbar>
   </header>
  )
}

export default Header
