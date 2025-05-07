import React from 'react'
import { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { formatDate } from '../Functions';


function PropertiesPropety({data}) {
  const [imageDisplayed, setImageDisplayed] = useState(0)

  const listImages = ["/property.jpeg", "/property1.jpg", "/property.jpeg", "/property1.jpg"]
  


  return (
    <Link to={`/properties/${data.id}`} className='Property bg-white rounded-lg overflow-hidden pb-3 shadow-md '>
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


      <div className='px-4 mt-1'> 
        <div className='flex items-center text-gray-400 space-x-1.5  pt-2'>
          <CiLocationOn />  
          <h1 className='text-gray-400' >Morocco</h1> 
        </div>
        <h3 className='text-xl font-medium mt-2' > {data.title} </h3>
        <div className='flex justify-between mt-1'>
          <h2 className='text-green-400 font-semibold  text-xl'>$ {data.price}</h2>
          <h2 className='text-gray-400  text-md'> {data.totalInvestors}  Investors</h2>
        </div>

        <div className=' mt-4 bg-gray-50 rounded-md py-2 px-4'>
          <div className='flex items-center justify-between'>
            <label className='opacity-60'> Funded date </label>
            <p className='font-medium opacity-80'> {formatDate(data.fundedDate)} </p>
          </div>
          <div className='flex items-center justify-between'>
            <label className='opacity-60'> Purchase price </label>
            <p className='font-medium opacity-80'> $ {data.purchasePrice} </p>
          </div>
          <div className='flex items-center justify-between'>
            <label className='opacity-60'> Total rental income </label>
            <p className='font-medium opacity-80'> $ {data.totalRentalIncome} </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertiesPropety