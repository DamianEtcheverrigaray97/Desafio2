import './App.css';
import Navbar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import './components/Footer.css';

function App() {
  return (
    <div>
        <Navbar />
        <ItemListContainer />
        <Footer />
    </div>
  )
}

export default App;
