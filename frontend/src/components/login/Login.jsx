import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

const Login = () => {
  return (
    <div>
        <Header/>
    <div className='border-2 border-white items-center w-[400px] ml-60 mt-20'>
      <form className='flex flex-col'>
        <label className='text-xs'>Name</label>
        <input type='text' placeholder='name' className='mb-1 border-2 border-black h-10 rounded-xl'/>
        <label className='text-xs'>Email</label>
        <input type='email' placeholder='email' className='mb-1 border-2 border-black h-10 rounded-xl'/>
        <label className='text-xs'>Password</label>
        <input type='password' placeholder='put in password' className='mb-1 border-2 border-black h-10 rounded-xl'/>
        <div className="inline-flex mt-4 ">
          <button className='bg-orange-500 p-2 py-2 rounded-md'>
              Submit
          </button>
          <button className=' ml-6 bg-orange-500 p-2 py-2 rounded-md'>
            <Link to={"/sign"}>   Sign Up</Link>  
          </button>

        </div>
      </form>
      <p className='mt-10 text-xs'>You don't have an account SignUp !!</p>
    </div>
    </div>
  )
}

export default Login;
