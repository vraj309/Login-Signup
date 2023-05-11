import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center 700-w  vh-100 bg-primary'>
    <div className=' form_scontaioner p-5 rounded bg-white border border-dark'>
        <form>
              <h1 className='text-center'>sign-Up</h1>    
            <div className='mb-2'>
                <label htmlFor='fname'>First Name</label>
                <input type="text" placeholder='Enter First Name' className='form-control'/>
            </div>
            
            <div className='mb-2'>
                <label htmlFor='lname'>Last Name</label>
                <input type="text" placeholder='Enter Last Name' className='form-control'/>
            </div>

            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type="email" placeholder='Enter Email' className='form-control'/>
            </div>

            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder='Enter Passowrd' className='form-control'/>
            </div>
           
            <div className='d-grid'>
                <button className='btn btn-primary'>sign up</button>
            </div>
             <p  className='text-end mt-2'> 
               Alredy Registerd <Link to ='/' className='ms-2'>sign in</Link>
            </p>
        </form>
    </div>
    </div>
  )
}

export default Signup