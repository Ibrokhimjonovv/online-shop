import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import DonateAlertions from './components/donate-alertions/donate-alertions'
import Header from './components/header/header'

function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <DonateAlertions />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
