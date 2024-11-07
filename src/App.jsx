import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'

// components
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'


function App() {

  return (
    <>
    <h1>React Router</h1>
    <BrowserRouter>
    <Navbar/>
    {/* 9 - search params */}
    <SearchForm/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* 4- rota dinamica */}
        <Route path='/products/:id' element={<Product></Product>}/>
        {/* 6- nested route */}
        <Route path='/products/:id/info' element={<Info />}></Route>
        {/* 9 - search params */}
        <Route path='/search' element={<Search/>}></Route>
        {/* 10 - redirect */}
        <Route path='/company' element={<Navigate to='/about' />}></Route>
        {/* 7 - no match route */}
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    


    </>
  )
}

export default App
