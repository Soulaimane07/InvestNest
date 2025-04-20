import React from 'react'
import { FaLandmark } from "react-icons/fa6";
import { IoBookmarks } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";


function Box1() {
  return (
    <div className='min-h-screen'>
        <h2 className='text-teal-500 text-center font-medium mb-6 text-lg'>How it works</h2>
        <h1 className='text-4xl font-bold text-center'>Build an income-generating <br></br> real estate portfolio, easily</h1>
    
        <div className='flex mt-44 space-x-10 justify-center px-20 items-center '>
            <div className='w-full '>
                <h2 className='text-teal-500 font-medium text-2xl mb-4'> Browse </h2>
                <h1 className='font-bold text-4xl mb-8'> Access prime real estate <br></br> across multiple markets </h1>
                <p className=' text-sm opacity-80'> Sign up in less than 3 minutes and browse our collection of global properties and funds, sourced by experts </p>
            </div>
            <div className=' w-full flex items-center justify-end'>
                <img  src='/box1.png' className='px-4'  />
            </div>
        </div>

        <div className='flex mt-44 space-x-10 justify-center px-20 items-center '>
            <div className='w-full '>
                <h2 className='text-teal-500 font-medium text-2xl mb-4'> Invest </h2>
                <h1 className='font-bold text-4xl mb-8'> Grab a piece of the ones you love, from only AED 500 </h1>
                <p className=' text-sm opacity-80'> Skip the hassle, and buy shares in your favourite deals, no matter where you are in the world. </p>
                <ul className='flex items-center space-x-5 mt-4'> 
                    <li><img src="visa.png" className='w-14' /></li>
                    <li><img src="Mastercard.png" className='w-14' /></li>
                </ul>
            </div>
            <div className=' w-full flex items-center justify-end'>
                <img  src='/box2.png' className='px-4'  />
            </div>
        </div>

        <div className='flex mt-44 space-x-10 justify-center px-20 items-center '>
            <div className='w-full '>
                <h2 className='text-teal-500 font-medium text-2xl mb-4'> Earn </h2>
                <h1 className='font-bold text-4xl mb-8'> Enjoy regular passive income  with no effort </h1>
                <p className=' text-sm opacity-80'> Sit back and earn consistent rental income from your brand new real estate portfolio </p>
                <li className='flex items-center space-x-3 mt-8'> <FaWallet className='text-teal-500' /> <p> Paid directly to your Stake wallet </p> </li>
            </div>
            <div className=' w-full flex items-center justify-end'>
                <img  src='/box3.png' className='px-4'  />
            </div>
        </div>
        
        <div className='flex mt-44 space-x-10 justify-center px-20 items-center '>
            <div className='w-full '>
                <h2 className='text-teal-500 font-medium text-2xl mb-4'> Sell </h2>
                <h1 className='font-bold text-4xl mb-8'> Tap into liquidity when you <br></br> need it most </h1>
                <p className=' text-sm opacity-80'> Realise your full investment appreciation at maturity or take early profits by selling within our community</p>
                <ul className='mt-8 space-y-3'>
                    <li className='flex items-center space-x-3'> <FaLandmark className='text-teal-500' /> <p> Sell during our Exit Windows </p> </li>
                    <li className='flex items-center space-x-3'> <IoBookmarks className='text-teal-500' /> <p> Full sale of properties and funds </p> </li>
                </ul>
            </div>
            <div className=' w-full flex items-center justify-end'>
                <img  src='/box4.png' className='px-4'  />
            </div>
        </div>
    </div>
  )
}

export default Box1