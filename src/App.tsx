import { useState } from 'react'
import  './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './calculator/pages/Index'
import Quiz from './quiz/pages/Quiz'
import Game from './memorygame/pages/Game'
import Roll from './Dice/pages/Roll'
// import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
     
     <Routes>
      <Route path='/calc' element={<Index/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/memory' element={<Game/>}/>
      <Route path='/roll' element={<Roll/>}/>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
