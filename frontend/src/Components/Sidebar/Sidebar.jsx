import React from 'react'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SlHome } from "react-icons/sl";
import { PiHandshake } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className='h-screen bg-white w-1/5'>
        <div>
            <img src="/logo.jpg" className='w-32 mx-auto py-6' />
      </div>
       <div>
        <ul className='space-y-2'>
          <button className='bg-green-100 text-gray-400 text-lg cursor-pointer px-5 opacity-90 py-3 border-r-6 border-green-400  w-full flex space-x-2 items-center  '>
            <TbLayoutDashboardFilled size={28} />
           <p>Dashboard</p> 
          </button>
       
           <button className='bg-green-100 text-gray-400 text-lg cursor-pointer px-5 opacity-90 py-3 border-r-6 border-green-400 w-full flex space-x-2 items-center  '>
            <SlHome  size={28} />
           <p>Properties</p> 
          </button>

          <button className='bg-green-100 text-gray-400 text-lg cursor-pointer px-5 opacity-90 py-3 border-r-6 border-green-400  w-full flex space-x-2 items-center  '>
            <PiHandshake size={28} />
           <p>My Deals</p> 
          </button>
           <button className='bg-green-100 text-gray-400 text-lg cursor-pointer px-5 opacity-90 py-3 border-r-6 border-green-400 w-full flex space-x-2 items-center  '>
            <IoSettingsOutline  size={28} />
           <p>Settings</p> 
          </button>
        </ul>
      </div>
     
    </div>
  )
}

export default Sidebar