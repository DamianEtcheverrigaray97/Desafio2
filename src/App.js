import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import './components/Footer.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import CustomProvider from "./components/Context";
import Nosotros from "./components/Pages/Nosotros";
import './CormorantGaramond-Light.ttf';
import Garantias from "./components/Pages/Garantias";

const App = () => {

  return (
    <CustomProvider>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/we" element={<Nosotros/>}/>
          <Route path="/warranty" element={<Garantias/>}/>
          <Route path="*"/>
        </Routes>
        <img className="bannerPay" src="https://i.imgur.com/R0d0fv4.jpeg"></img>
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  );
};

export default App;
