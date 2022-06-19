import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext';


function App() {
   
  return (
    <>
    <div className="App">
        <section>
          <CartProvider>

            <BrowserRouter>
              <Navbar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting='Encuentra todo lo que necesitas para tu entrenamiento'/>} />
                  <Route path = '/ofertas/:ofertaId' element= {<ItemListContainer />} />
                  <Route path='/detail/:itemId' element = {<ItemDetailContainer/>}/>
                  <Route path='/cart' element={<h1>CART</h1>}/>
                </Routes>
            </BrowserRouter>
          </CartProvider>
          
        </section>        
    </div>
    </>
  )
}

export default App;
