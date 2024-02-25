import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css'

import Layoute from './pages/Layoute';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layoute />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
