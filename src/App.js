import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap';
import SellerLogin from './screens/seller/SellerLogin';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/seller/login' element={<SellerLogin/>}/>
            
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
