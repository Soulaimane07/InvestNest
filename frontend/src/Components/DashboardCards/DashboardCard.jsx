import React from 'react'
import { MdAttachMoney } from "react-icons/md";


function DashboardCard({data}) {
  return (
      <div className='bg-white border border-gray-200 shadow-sm  flex items-center rounded-lg  '>
        <div className='bg-gray-300 p-4 flex items-center justify-center m-3 rounded-full mr-6   '>
            <MdAttachMoney size={30} />
        </div>
        <div>
          <h1 className='font-semibold text-lg mb-1'> $ {data.amount}</h1> 
          <h3 className='text-gray-500 text-sm'> {data.title} </h3>
        </div>
      </div>
  )
}

export default DashboardCard 