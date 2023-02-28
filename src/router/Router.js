import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import About from '../pages/About';
const Routers = () =>  {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
        </Routes>
    );
}
export default Routers;