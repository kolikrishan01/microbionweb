import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Home';
import CompanyProfile from './CompanyProfile';
import Our_Products from './Our_Products';
import Equipments from './Equipments';
import CardsStrips from './CardsStrips';
import ContactUs from './ContactUs';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Header />
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/company_profile' element={<CompanyProfile />}/>
  <Route path='/our_products' element={<Our_Products />}/>
  <Route path='/equipments' element={<Equipments/>}/>
  <Route path='/cardsStrips' element={<CardsStrips/>}/>
  <Route path='/contact_us' element={<ContactUs/>}/>
  
</Routes>
<Footer />

</BrowserRouter>
    </div>
  );
}

export default App;
