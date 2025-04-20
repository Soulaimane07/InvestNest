import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 px-14">
            <div className='flex items-center space-x-10'>
                <>
                    <img src="/logo.jpg" className="w-26" alt="Logo" />
                </>

                <ul className="flex flex-row items-center space-x-6">
                    <li>
                        <a href="#" className="hover:text-teal-500 border-gray-700" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-teal-500 border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-teal-500 border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-teal-500 border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="flex space-x-3">
                <Link to="/login" className="transition-all cursor-pointer bg-white border-1 text-teal-600 hover:bg-teal-50 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Login</Link>
                <Link to="/signup" className="transition-all cursor-pointer text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Sign up</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar