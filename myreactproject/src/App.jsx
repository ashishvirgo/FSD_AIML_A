import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import { useState } from 'react'
import Dashboard from './Components/Dashboard'
import Logout from './Components/Logout'

const App = () => {
  const [regData,setRegData]=useState();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
           <Route path="/login" element={<Login regdata={regData}/>}></Route>
           <Route path="/register" element={<Register setregdata={setRegData}/>}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard regdash={regData}/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
