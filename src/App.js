import './App.css';
import { createContext } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { useState } from 'react';

export const Context = createContext()

function App() {
   const [cart, setCart] = useState([])
  console.log(cart)
  return (
    <>
    <div className="App">
        <section>
          <Context.Provider value={{cart, setCart}}>
            <BrowserRouter>
              <Navbar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting='Encuentra todo lo que necesitas para tu entrenamiento'/>} />
                  <Route path = '/ofertas/:ofertaId' element= {<ItemListContainer />} />
                  <Route path='/detail/:itemId' element = {<ItemDetailContainer/>}/>
                </Routes>
            </BrowserRouter>
          </Context.Provider>
        </section>        
    </div>
    </>
  )
}

export default App;
