import React from 'react'
import { FaLandmark } from "react-icons/fa6";
import { IoBookmarks } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { useSelector } from 'react-redux';


function Box1() {
    const lang = useSelector((state) => state.user.language.data.welcome.main);


  return (
    <div className='min-h-screen'>
        <h2 className='text-teal-500 text-center font-medium mb-6 text-lg'> {lang.how} </h2>
        <h1 className='text-4xl font-bold text-center'> {lang.p1} <br></br> {lang.p2} </h1>
    
        <div className='flex mt-44 space-x-10 justify-center px-20 items-center '>
            <div className='w-full '>
                <h2 className='text-teal-500 font-medium text-2xl mb-4'> {lang.box1.sub} </h2>
                <h1 className='font-bold text-4xl mb-8'> {lang.box1.title} </h1>
                <p className=' text-sm opacity-80'> {lang.box1.p} </p>
            </div>
            <div className=' w-full flex items-center justify-end'>
                <img  src='/box1.png' className='px-4'  />
            </div>
        </div>

        <div className='flex mt-44 space-x-10 justify-center px-20 items-center '>
            <div className='w-full '>
                <h2 className='text-teal-500 font-medium text-2xl mb-4'> {lang.box2.sub} </h2>
                <h1 className='font-bold text-4xl mb-8'> {lang.box2.title} </h1>
                <p className=' text-sm opacity-80'> {lang.box2.p} </p>
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
                <h2 className='text-teal-500 font-medium text-2xl mb-4'> {lang.box3.sub} </h2>
                <h1 className='font-bold text-4xl mb-8'> {lang.box3.title} </h1>
                <p className=' text-sm opacity-80'> {lang.box3.p} </p>
                <li className='flex items-center space-x-3 mt-8'> <FaWallet className='text-teal-500' /> <p> {lang.box3.l1} </p> </li>
            </div>
            <div className=' w-full flex items-center justify-end'>
                <img  src='/box3.png' className='px-4'  />
            </div>
        </div>
        
        <div className='flex mt-44 space-x-10 justify-center px-20 items-center '>
            <div className='w-full '>
                <h2 className='text-teal-500 font-medium text-2xl mb-4'> {lang.box4.sub} </h2>
                <h1 className='font-bold text-4xl mb-8'> {lang.box4.title} </h1>
                <p className=' text-sm opacity-80'> {lang.box4.p} </p>
                <ul className='mt-8 space-y-3'>
                    <li className='flex items-center space-x-3'> <FaLandmark className='text-teal-500' /> <p> {lang.box4.l1} </p> </li>
                    <li className='flex items-center space-x-3'> <IoBookmarks className='text-teal-500' /> <p> {lang.box4.l2} </p> </li>
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