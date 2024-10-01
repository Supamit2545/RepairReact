import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/Css/Navbar.css"
const Navbar = () => {
    const [user , setUser] = useState(0);
    const [ActiveTab  , setActive] = useState(1)
    const Active = (index) =>{
        setActive(index)
        
        localStorage.setItem('Active',index)
    }
    function AutoSetActive(){
        const SaveTab = localStorage.getItem('Active');
        const newTab = SaveTab ? parseInt(SaveTab,10):0;
        
        setActive(newTab);
    }
    useEffect(()=>{
        AutoSetActive()
    },[])

  return (
    <nav className='navbar'>
        <div className='nav-left font-bold text-4xl text-center my-auto'>Supamit Repair</div>
        <div className='nav-center'>
            <ul className='flex text-2xl font-bold space-x-10'>
                <Link to='/'><div className={`tabs ${ActiveTab === 1 ? 'active':""}`} onClick={()=>{Active(1)}}>Home<div className={`underline-c ${ActiveTab === 1 ? 'active':""}`}></div></div></Link>
                <Link to='/SendRepair'><div className={`tabs ${ActiveTab === 2 ? 'active':""}`} onClick={()=>{Active(2)}}>Send To Repair<div  className={`underline-c ${ActiveTab === 2 ? 'active':""}`}></div></div></Link>
                <Link to='/Requsted'><div className={`tabs ${ActiveTab === 3 ? 'active':""}`} onClick={()=>{Active(3)}}>Requst Repair<div  className={`underline-c ${ActiveTab === 3 ? 'active':""}`}></div></div></Link>
            </ul>
        </div>
        <div className='nav-right text-center font-bold my-auto'>
            {user ? (
                <p>Hello World!</p>
            ):(
                <Link to="/Login"><button className='login border-2 border-black bg-blue-500 rounded-2xl px-5 py-1 hover:bg-blue-800 hover:text-white' onClick={()=>{Active(4)}}>Login</button></Link>
            )}
        </div>
    </nav>
  )
}

export default Navbar