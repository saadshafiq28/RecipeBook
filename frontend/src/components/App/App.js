import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from '../Pages/Home/Home'
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import Tasks from '../Pages/Tasks/Tasks'
import AddTask from '../Pages/Tasks/AddTask'
import Stats from '../Pages/Tasks/Stats'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recipes/add' element={<AddTask />} />
        <Route path='/recipes/stats' element={<Stats />} />
        <Route path='/recipes' element={<Tasks />} />
      </Routes>
    </>
  )
}

export default App
