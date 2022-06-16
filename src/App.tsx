import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'


function App() {

  return (
    <div className="App">
      <MainLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
