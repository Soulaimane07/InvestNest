import React from 'react'
import { MdAttachMoney } from "react-icons/md";


function DashboardCard() {
  return (
      <div className='bg-white  flex items-center rounded-lg  '>
        <div className='bg-gray-300 p-4 flex items-center justify-center m-3 rounded-full mr-6   '>
            <MdAttachMoney size={30} />
        </div>
        <div>
          <h1 className='font-semibold text-lg mb-1'> $ 24,000</h1> 
          <h3 className='text-gray-500 text-sm'>total invested</h3>
        </div>
      </div>
  )
}

export default DashboardCard 