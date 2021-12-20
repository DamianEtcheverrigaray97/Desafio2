import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import './components/Footer.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ItemListContainer />
      <Footer />
      <Routes>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/" element={''}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
