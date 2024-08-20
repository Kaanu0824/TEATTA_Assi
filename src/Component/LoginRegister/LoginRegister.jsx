import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './LoginRegister.css';

const LoginRegister = () => {
    const [action , setAction] = useState('');

    const registerLink = () => {
        setAction ('active');
    };

    const LoginLink = () => {
        setAction ('active'); 
    };

  return (
    <div className={`wrapper${action}`}> 
        {/* Login Code */}

        <div className='form-box login'>
            <form action=''>
                <h1> Login </h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label> <input type='checkbox'/> Remember Me </label>
                    <a href='#'> Forgot Password?</a>
                </div>

                <button type='submit'> Login </button>

                <div className='register-link'>
                    <p> Don't hvae an account? <a href='#' onClick={registerLink}> Register </a></p>
                </div>
            </form>
        </div>
        
        {/* Login Code */}

        {/* Register Code  */}

        <div className='form-box register'>
            <form action=''>
                <h1> Registration </h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required />
                    <MdEmail className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label> <input type='checkbox'/> I agree to the terms & conditions </label>
                </div>

                <button type='submit'> Register </button>

                <div className='register-link'>
                    <p> Already hvae an account? <a href='#' onClick={LoginLink}> Login </a></p>
                </div>
            </form>
        </div>

         {/* Register Code  */}

    </div>
  )
}

export default LoginRegister