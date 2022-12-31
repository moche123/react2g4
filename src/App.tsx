import React, { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainContent from './components/MainContent'


function App() {

  return (
    
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
    
  )
}

export default App
