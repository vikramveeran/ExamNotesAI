import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
import { getCurrentUser } from './services/api'
export const serverUrl = "http://localhost:8000"
const App = () => {
  useEffect(()=>{
      getCurrentUser()
  },[])
  return (
   <>
   <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/auth" element={<Auth/>}/>
   </Routes>
   </>
  )
}

export default App