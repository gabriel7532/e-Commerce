import React, { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  

  return (
    <>
    <div className="App">
        <div>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path = '/categoryId' element= {<ItemListContainer />} />
                <Route path='/detail/:productId' element = {<ItemDetailContainer/>}/>
              </Routes>
          </BrowserRouter>
        </div>        
    </div>
    </>
  );
}

export default App;
