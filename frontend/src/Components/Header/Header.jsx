import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

function Header({pageTitle}){
  const user = JSON.parse(localStorage.getItem("stake-user"))

  return (
    <div className='flex justify-between items-center bg-white medium-bold border-white rounded-xl  my-6 px-8 py-2 w-full text-lg'>
        <h1 className='font-medium'> {pageTitle} </h1>

        <button className='flex text-left items-center space-x-6 hover:bg-gray-100 px-2 py-2 rounded-md cursor-pointer'>
            <div>
                <h2 className='text-sm'> {user?.fullname} </h2>
                <h2 className='text-sm'> {user?.email} </h2>
            </div>
            <FaAngleDown size={24} className='opacity-60' />
        </button>
    </div>
  )
}

export default Header