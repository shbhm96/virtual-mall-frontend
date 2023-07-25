import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap';
import SellerLogin from './screens/seller/SellerLogin';
import HomeScreen from './screens/HomeScreen';
import SellerRegister from './screens/seller/SellerRegister';
import CustRegister from './screens/customer/CustRegister';
import CustLogin from './screens/customer/CustLogin';
import SellerProfile from './screens/seller/SellerProfile';
import PageNotFound from './components/PageNotFound';
import CustomerLisInShop from './screens/seller/CustomersListInShop';
import CustomerProfile from './screens/customer/CustomerProfile';
import SellerProductsList from './screens/seller/SellerProductsList';
import SellerCreateProduct from './screens/seller/SellerCreateProduct';
import SellerHomePage from './screens/seller/SellerHomePage';
import SellerOrdersList from './screens/seller/SellerOrdersList';
import CustViewProduct from './screens/customer/CustViewProduct';
import CartScreen from './screens/customer/CartScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/seller/login' element={<SellerLogin/>}/>  
            <Route path="/seller/register" element={<SellerRegister/>}/>
            <Route path="/seller/:id/profile" element={<SellerProfile/>}/>
            <Route path="/seller/:id/customers" element={<CustomerLisInShop/>}/>
            <Route path="/seller/:id/products" element={<SellerProductsList/>}/>
            <Route path="/seller/product/:id?/edit" element={<SellerCreateProduct/>}/>
            <Route path="/seller/:id" element={<SellerHomePage/>}/>
            <Route path="/seller/:id/orders" element={<SellerOrdersList/>}/>


            <Route path="/cust/login" element={<CustLogin/>}/>
            <Route path="/cust/register" element={<CustRegister/>}/>
            <Route path="/cust/profile" element={<CustomerProfile/>}/>
            <Route path='/product/:id' element={<CustViewProduct/>}/>
            <Route path="/cart/:id?" element={<CartScreen/>}/>
            {/* Customer Profile */}

            

            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
