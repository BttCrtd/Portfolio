import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/scrollToTop'
import Layout from './components/Layout/layout'
import Index from './pages/index'
import Projet from './pages/projet/projet'

import './style/style.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projet" element={<Projet />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
)
