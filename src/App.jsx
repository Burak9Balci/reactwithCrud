import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryForm from './components/category/CategoryForm'
import ProductForm from './components/product/ProductForm'


function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/categories" element={<CategoryForm/>}/>   
          <Route path="/products" element={<ProductForm/>}/>   
        </Routes>
      </Router>
    </main>
  )
}

export default App
