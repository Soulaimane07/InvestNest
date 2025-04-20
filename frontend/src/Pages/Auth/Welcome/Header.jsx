import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight  } from "react-icons/fa6";

function Header() {
  return (
    <section className='h-screen flex   justify-center items-center -mt-20 '>
        <div className='w-full'>
            <div className='flex items-center space-x-2 border border-teal-500 bg-teal-50 text-teal-500 rounded-full px-4 py-2 w-fit mb-5'>
                <div className='bg-teal-500 text-white rounded-full p-1 -rotate-35'>
                    <FaArrowRight size={8} />
                </div>
                <p className='text-xs font-semibold'> 10.1% average investor returns in 2024 </p>
            </div>
            <h1 className='text-6xl font-bold '> 
                Build your wealth <br></br> through 
                <span className='text-teal-500'> real estate </span> 
            </h1>
            <p className=' text-gray-600 mt-5'>
                Thousands of investors all over the world are using Stake to access income generating real estate deals in high growth markets, from only AED 500
            </p>
            <button type="button" className=" cursor-pointer mt-10 text-white flex items-center space-x-4 bg-teal-600 hover:bg-teal-700 transition-all focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-10 py-3 text-center">
                <span className='text-lg'> Start now </span>
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