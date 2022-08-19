import React from 'react';
import NavBarBoost from './components/NavBar/NavBar';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className='header'>
        <NavBarBoost />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/destino/:id' element={<Detail />} />
        <Route exat path='/destinos' element={<ItemListContainer />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
