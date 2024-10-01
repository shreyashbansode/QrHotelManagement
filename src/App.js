import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './component/auth/Login'
import MainRoutes from './component/MainRoutes'
import './App.css'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/main/*' element={<MainRoutes />} />
    </Routes>
  )
}
export default App