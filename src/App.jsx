import React from 'react'
import ProductList from './components/ProductList'
import { BrowserRouter, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Product from './components/Product'



export default function App() {
  return (
    <div  className="bg-gray-50 text-gray-800">
      <BrowserRouter>
        <Routes>
            {/* <Route path="/"  element={<Signup />}/>
            <Route path="/signin"  element={<Signin />}/> */}
            <Route path="/products"  element={<ProductList />}/>
            <Route path="/products"  element={<Product />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
