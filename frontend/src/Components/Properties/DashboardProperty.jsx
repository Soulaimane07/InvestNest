import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DashboardProperty({data}) {
   const [imageDisplayed, setImageDisplayed] = useState(0)
  
    const listImages =  data?.listImages
    
  
  return (

    <div className='Property hover:scale-102 transition-all shadow-md bg-white rounded-lg overflow-hidden pb-3 '>
      <div className='relative'>
        <div className=' absolute w-full space-x-1.5 bottom-2 flex items-center justify-center' >
          {listImages?.map((item,key)=>(
            <div key={key} className={key === imageDisplayed ? 'bg-white p-1 border-2 border-white transition-all rounded-full' : 'border-2 transition-all border-white p-1 rounded-full'}></div>
          ))}
        </div>

        <div>
            <img className='h-52 w-full' src={listImages[imageDisplayed]} alt="property" />
        </div>

        <div>
          <button onClick={()=> setImageDisplayed(imageDisplayed - 1 < 0 ? 3 : imageDisplayed - 1)} className='bg-white absolute top-25 left-4 rounded-full p-0.5 cursor-pointer'> <FaAngleLeft  size={15}/> </button>
          <button onClick={()=> setImageDisplayed(imageDisplayed + 1 > 3 ? 0 : imageDisplayed + 1)} className='bg-white absolute top-25 right-4 rounded-full p-0.5 cursor-pointer'> <FaAngleRight size={15} /> </button>
        </div>
      </div>
      
      <Link to={`properties/${data.id}`}>
        <div  className='px-6 pt-1 pb-3'> 
          <div className='flex items-center text-gray-400 space-x-1.5  pt-2'>
            <CiLocationOn />  
            <h1 className='text-gray-400' > {data.location} </h1> 
          </div>
          <h3 className='text-xl font-medium mt-2' > {data.title} </h3>
          <div className='flex justify-between mt-1'>
            <h2 className='text-teal-400 font-semibold  text-xl'>$ {data.price}</h2>
            <h2 className='text-gray-400  text-md'> {data.totalInvestors} Investors</h2>
          </div>
        </div> 
      </Link>
    </div>
  )
}

export default DashboardProperty