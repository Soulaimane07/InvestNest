import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

function DashboardProperty({data}) {
  return (

    <Link to={`properties/${data.id}`} className=' bg-white rounded-lg overflow-hidden pb-3 '>
      <img className='' src="property1.jpg" alt="property" />
      <div className='px-4 mt-1'> 
          <div className='flex items-center text-gray-400 space-x-1.5  pt-2'>
            <CiLocationOn />  
            <h1 className='text-gray-400' > {data.location} </h1> 
          </div>
          <h3 className='text-xl font-medium mt-2' > {data.title} </h3>
          <div className='flex justify-between mt-1'>
            <h2 className='text-green-400 font-semibold  text-xl'>$ {data.price}</h2>
            <h2 className='text-gray-400  text-md'> {data.totalInvestors} Investors</h2>
          </div>
        </div>
    </Link>
  )
}

export default DashboardProperty