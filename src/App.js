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

            <Route path="/cust/login" element={<CustLogin/>}/>
            <Route path="/cust/register" element={<CustRegister/>}/>

          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
