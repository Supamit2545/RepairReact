import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/Css/Login.css"
import AOS from 'aos'
import "aos/dist/aos.css"
import google from '../assets/img/google.png'

const Login = () => {
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
    <div className='login-container'>
        <p className="Text-Login" data-aos="zoom-in">Sign In</p>
        <form action="" className="Login-Form" data-aos="flip-up">
            <div className='flex justify-center'>
                <p className='flex gap-2 mt-10 text-2xl font-bold text-white text-center'>DON'T HAVE AN ACCOUT ? <Link to="/Register"><span id='toregis' className='flex flex-col text-blue-500 hover:text-blue-700 hover:cursor-pointer w-auto transition-all'>Click To Register<span id='underline-b' className='underline-b'></span></span></Link></p>
                
            </div>
            <div className="input-username-form">
                <input className='input-username' type="text" name="username" id="username" required onChange={(e)=>{setUsername(e.target.value)}}/>    
                <p className='text-user-input'>Username</p>
            </div>
            <div className="input-password-form">
                <input className='input-password' type="password" name="password" id="password" required onChange={(e)=>{setUsername(e.target.value)}}/>    
                <p className='text-password-input'>Password</p>
            </div>
            <div className="submitbtn">
                <div className='mt-5'>
                    <p className='text-center text-white'>Forgot Accout ? <Link><span className='underline text-blue-500 font-bold hover:text-blue-700'>Click</span></Link></p>
                </div>
                <button className='loginbtn'>Login</button>
            </div>
            <div className='text-center'>
                <p className='line text-center'></p>
            </div>
            <div className="google-login text-center">
                <button className='googlebtn'><img className='Google-Icon my-auto' src={google} width={50}></img><p className='Google-text my-auto'>Login with Google</p></button>
            </div>
        </form>
    </div>
  )
}

export default Login