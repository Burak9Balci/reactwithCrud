import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryForm from './components/category/CategoryForm'
import ProductForm from './components/product/ProductForm'
import CategoryList from './components/category/CategoryList';
import ProductList from './components/product/ProductList';


function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/categories" element={<CategoryList/>}/>   
          <Route path="/products" element={<ProductList/>}/>   
          <Route path="/categories/new" element={<CategoryForm/>}/>   
          <Route path="/products/new" element={<ProductForm/>}/>   
        </Routes>
      </Router>
    </main>
  )
}

export default App
