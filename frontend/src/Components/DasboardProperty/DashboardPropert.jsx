import React from 'react'
import { CiLocationOn } from "react-icons/ci";

function DashboardPropert() {
  return (

    <div className=' bg-white rounded-lg overflow-hidden '>
      <img className='' src="property1.jpg" alt="property" />
      <div className='px-4'> 
        <div className='flex items-center text-gray-400 space-x-1.5  pt-2'>
          <CiLocationOn />  
          <h1 className='text-gray-400' >Morocco</h1> 
        </div>
        <h3 className='text-xl' >House Name</h3>
        <div className='flex justify-between'>
        <h2 className='text-green-400 font-medium text-md'>$ 400k</h2>
        <h2 className='text-gray-400  text-md'>100 Investors</h2>
        </div>
      </div>
    </div>
  )
}

export default DashboardPropert