import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
// import Login from './pages/UserAccount/Login/Login';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import SignUp from './pages/UserAccount/SignUp/SignUp';
import Footer from './pages/Footer/Footer';
import ProductDetail from './pages/Productdetail/ProductDetail';
import Maintheme from './pages/Maintheme/Maintheme';
import Login from './pages/UserAccount/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Maintheme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
