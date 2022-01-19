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
          <Route path="*"/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  );
};

export default App;
