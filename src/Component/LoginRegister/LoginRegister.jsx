import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './LoginRegister.css';

const LoginRegister = () => {
    const [action, setAction] = useState('login');

    const handleRegisterClick = () => {
        setAction('register');
    };

    const handleLoginClick = () => {
        setAction('login');
    };

    return (
        <div className={`wrapper ${action}`}>
            {/* Login Form */}
            <div className={`form-box login ${action === 'login' ? 'visible' : ''}`}>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' /> Remember Me</label>
                        <a href='#'>Forgot Password?</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account? <a href='#' onClick={handleRegisterClick}>Register</a></p>
                    </div>
                </form>
            </div>
             {/* Login Form */}

            {/* Register Form */}
            <div className={`form-box register ${action === 'register' ? 'visible' : ''}`}>
                <form action=''>
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='email' placeholder='Email' required />
                        <MdEmail className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' /> I agree to the terms & conditions</label>
                    </div>

                    <button type='submit'>Register</button>

                    <div className='register-link'>
                        <p>Already have an account? <a href='#' onClick={handleLoginClick}>Login</a></p>
                    </div>
                </form>
            </div>
            {/* Register Form */}
            
        </div>
    );
};

export default LoginRegister;
