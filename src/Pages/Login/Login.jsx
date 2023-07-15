import { Link } from 'react-router-dom';
import '../Login/Login.css';
import React from 'react'
import Register from './../Register/Register';

const Login = () => {
  return (
    <div className='login'>
        <div className='logincon'>
            <div className='leftcon'>
                <h2>Malakabook</h2>
                <p>Connect with friends and the world <br/>
                 around you on Malakabook</p>
            </div>
            <div className='rightcon'>
                <form action="">
                    <input type='email' className='email' placeholder='email'/>
                    <input type='password' className='password' placeholder='Password'/>
                    <Link className='btnl' to='/home'><button >Log in</button></Link>
                    <span > Forgot password?</span>
                    <Link to="/register" className='btny'><button>Create a new account</button></Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;