import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import DonateAlertions from './components/donate-alertions/donate-alertions'
import Header from './components/header/header'
import NotFound from './pages/not-found/not-found'
import Details from './pages/product-details/details'

function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <DonateAlertions />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop/:id" element={<Details />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
