import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import DashboardCard from '../../../Components/DashboardCards/DashboardCard';
import DashboardPropert from '../../../Components/DasboardProperty/DashboardPropert';
import { IoIosArrowRoundForward } from "react-icons/io";

function Home() {
  return (
    <div className='flex'>
      
      <Sidebar />

      <main className='bg-gray-100 w-full px-10 '>
        <div className='bg-white medium-bold border-white rounded-xl  my-6 px-8 py-4 w-full text-lg'>
          <h1>Dashboard</h1>
        </div>

       <div className='py-3 px-8 mb-12 '>
          <h1 className='text-black text-2xl '>Welcome Test!</h1>
          <h2 className='text-gray-500'>Explore Tailored Investment Opportunities</h2>
        </div>

        <div className=' px-8 grid grid-cols-4 gap-6 pb-10 '>
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />          
        </div>
        
        <div>
          <div className=' px-8  mb-6 '>
            <div className='flex justify-between space-x-56'>
              <h1 className='text-black font-medium text-2xl '>Invesstement opportunities </h1>
              <div className='flex items-center space-x-4'>
               <h2 className='text-gray-500 text-md font-semibold'>View all opportunties</h2>
               <IoIosArrowRoundForward size={40} className='text-gray-400' />
              </div>
              </div>
            <h2 className='text-gray-500 text-md font-semibold '>Discover properties that matches your goals</h2>
          </div>
          <div className='grid grid-cols-3 gap-8 mx-8 '>
            <DashboardPropert />
            <DashboardPropert/>
            <DashboardPropert />

          </div>
        </div>


        <div className='h-screen'>

        </div>
      </main>
      
    </div>
  )
}

export default Home