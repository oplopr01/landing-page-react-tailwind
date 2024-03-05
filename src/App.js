import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Banner from './components/Banner'
import Page1 from './components/Page1'
import NewsLetter from './components/NewsLetter'
import Plans from './components/Plans'
const App = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Page1/>
        <NewsLetter/>
        <Plans/>
    </div>
  )
}

export default App