import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Bascet from './pages/Basket/Bascet';
import CreateProducts from './pages/CreateProducts/CreateProducts';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Register from './pages/Register/Regidter';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/products" element={
          <Layout>
            <Products />
          </Layout>
        } />
        <Route path="/bascet" element={
          <Layout>
            <Bascet />
          </Layout>
        } />
        <Route path="/createproducts" element={
          <Layout>
            <CreateProducts />
          </Layout>
        } />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;
