import React, { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrouserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [page, setPage] = useState('list')

  return (
    <>
    <div className="App">
        <Navbar />
        <div>
          <button onClick={() => setPage('list')}>List</button>
          <button onClick={() => setPage('detail')}>Detail</button>
          {page === 'list' && <ItemListContainer greeting = 'Encuentra todo lo que necesitas para tu entrenamiento'/>}
          {page === 'detail' && <ItemDetailContainer/>}
        </div>
        
    </div>
    </>
  );
}

export default App;
