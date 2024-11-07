import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'

// components
import Navbar from './components/Navbar'
import Product from './pages/Product'


function App() {

  return (
    <>
    <h1>React Router</h1>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* 4- rota dinamica */}
        <Route path='/products/:id' element={<Product></Product>}/>
      </Routes>
    </BrowserRouter>
    


    </>
  )
}

export default App
