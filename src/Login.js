import React from 'react'

import  '../src/style.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center 700-w vh-100 '>
    <div className=' form_container p-5 rounded bg-white border border-dark'>
        <form>
            <h1 className='text-center'>sign-In</h1>    

            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type="email" placeholder='Enter Email' className='form-control'/>
            </div>

            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder='Enter Passowrd' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
                <lable htmlFor="check" className='custom-input-lable ms-2' >
                Remember me
                </lable>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>sign in</button>
            </div>
            <p  className='text-end mt-2'> 
                Forgot<a href=''>Passowrd</a><Link to ='/Signup' className='ms-2'>sign up</Link>
            </p>
        </form>
    </div>
    </div>
  )
}

export default Login