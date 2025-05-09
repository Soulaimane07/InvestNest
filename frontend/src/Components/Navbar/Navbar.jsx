import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import LanguageCom from '../LanguageCom';

function Navbar() {
    const lang = useSelector((state) => state.user.language);

    return (
    <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 px-14">
            <div className='flex items-center space-x-10'>
                <img src="/logo.jpg" className="w-26" alt="Logo" />
            </div>

            <div className="flex space-x-6">
                <LanguageCom />
                <div className="flex space-x-3">
                    <Link to="/login" className="transition-all cursor-pointer bg-white border-1 text-teal-600 hover:bg-teal-50 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center"> {lang.data.form.login} </Link>
                    <Link to="/signup" className="transition-all cursor-pointer text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center"> {lang.data.form.signup} </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar