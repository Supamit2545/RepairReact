import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import SendToRepair from './Pages/SendToRepair';
import Requsted from './Pages/Requsted';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <main className=''>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SendRepair' element={<SendToRepair/>}/>
        <Route path='/Requsted' element={<Requsted/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </main>
  )
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}