import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../Login/Image'

function Signup() {

  const navigate = useNavigate()

  const signupFun = (e) => {
        e.preventDefault()

        navigate("/home")
  }

  return (
    <div className='flex items-centerr h-screen'>
        <div className='w-full'>
            <div className='px-12 py-6'>
                <img src='logo.jpg' className='w-24' />
            </div>
            <hr className='text-gray-300'></hr>
            <div className='mt-20 px-40'>
                <h1 className='text-3xl font-semibold text-center'> Start inversting </h1>
                <p className='text-gray-500 text-center mt-2'> Enter your credentials to create your new account </p>
                <form onSubmit={signupFun} className='mt-10 flex flex-col space-y-6'>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="full name" className='text-sm font-semibold'> Full name </label>
                        <input type="text" id='full name' className='border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500'
                        placeholder='Enter your full name' required />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email" className='text-sm font-semibold'> Email </label>
                        <input type="email" id='email' className='border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500'
                        placeholder='Enter your email' required />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email" className='text-sm font-semibold'> Password </label>
                        <input type="password" id='password' className='border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500'
                        placeholder='Enter your password' required />
                    </div>

                    <button type="submit" className="transition-all cursor-pointer text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-3 text-center">Create account</button>
                </form>

                <div className=' flex items-center space-x-3 mt-10'>
                    <p> Already have an account ? </p>
                    <Link to="/login" className='text-teal-500 hover:underline transition-all'>Login</Link>
                </div>
            </div>
        </div>
        <Image />
    </div>
  )
}

export default Signup