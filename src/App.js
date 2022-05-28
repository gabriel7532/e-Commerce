import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting = 'Encuentra todo lo que necesitas para tu entrenamiento'/>
    </div>
  );
}

export default App;
