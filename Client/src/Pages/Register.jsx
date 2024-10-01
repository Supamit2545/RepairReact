import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/Css/Register.css"
import AOS from 'aos'
import "aos/dist/aos.css"

const Register = () => {
    const [username , setUsername] = useState()
    function MouseOver(){
        useEffect(()=>{
            const toregis = document.getElementById('toregis')
            const underto = document.getElementById('underline-b')
            
            toregis.addEventListener('mouseover',function(){
                underto.classList.add('active')
            })
            toregis.addEventListener("mouseout",function(){
                underto.classList.remove('active')
            })

            AOS.init()
        },[])
    }
    MouseOver()
  return (
    <div className='register-container'>
        <p className="register-Text-Login" data-aos="zoom-in">Sign Up</p>
        <form action="" className="register-Form" data-aos="flip-up">
            <div className='flex justify-center'>
                <p className='flex gap-2 mt-10    text-2xl font-bold text-white text-center'>ALREADY AN ACCOUT ? <Link to={'/Login'}><span id='toregis' className='flex flex-col text-blue-500 hover:text-blue-700 hover:cursor-pointer w-auto transition-all'>Click To Login<span id='underline-b' className='underline-b'></span></span></Link></p>
                
            </div>
            <div className="register-input-username-form">
                <input className='register-input-username' type="text" name="username" id="username" required onChange={(e)=>{setUsername(e.target.value)}}/>    
                <p className='register-text-user-input'>USERNAME</p>
            </div>
            <div className="register-input-password-form">
                <input className='register-input-password' type="password" name="password" id="password" required onChange={(e)=>{setUsername(e.target.value)}}/>    
                <p className='register-text-password-input'>PASSWORD</p>
            </div>
            <div className="register-input-conpass-form">
                <input className='input-conpass' type="password" name="password" id="password" required onChange={(e)=>{setUsername(e.target.value)}}/>    
                <p className='text-conpass-input'>CONFIRM PASSWORD</p>
            </div>
            <div className="register-submitbtn">
                <button className='loginbtn'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register