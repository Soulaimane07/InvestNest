import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight  } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Header() {
    const lang = useSelector((state) => state.user.language.data.welcome.header);
    

  return (
    <section className='h-screen flex   justify-center items-center -mt-20 '>
        <div className='w-full'>
            <div className='flex items-center space-x-2 border border-teal-500 bg-teal-50 text-teal-500 rounded-full px-4 py-2 w-fit mb-5'>
                <div className='bg-teal-500 text-white rounded-full p-1 -rotate-35'>
                    <FaArrowRight size={8} />
                </div>
                <p className='text-xs font-semibold'> {lang.alert} </p>
            </div>
            <h1 className='text-6xl font-bold '> 
                {lang.build1} <br></br> {lang.build2}
                <span className='text-teal-500'> {lang.estate} </span> 
            </h1>
            <p className=' text-gray-600 mt-5'>
                {lang.p}
            </p>
            <button type="button" className=" cursor-pointer mt-10 text-white flex items-center space-x-4 bg-teal-600 hover:bg-teal-700 transition-all focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-10 py-3 text-center">
                <span className='text-lg'> {lang.start} </span>
                <FaArrowRightLong size={20} />
            </button>
        </div>
        <div className='w-full flex justify-center items-center'>
            <img src='phone1.png' alt='phone' className='w-1/2 -mt-60 -rotate-20 h-auto object-cover hidden lg:block' />
            <img src='phone2.png' alt='phone' className='w-1/2 mt-28 -rotate-20 h-auto object-cover hidden lg:block' />
        </div>
    </section>
  )
}

export default Header