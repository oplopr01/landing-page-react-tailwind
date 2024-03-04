import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Banner from './components/Banner'
const App = () => {
  return (
    <div>
        <Header/>
        <Banner/>
    </div>
  )
}

export default App