import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import DashboardCard from '../../../Components/DashboardCards/DashboardCard';

function Home() {
  return (
    <div className='flex'>
      
      <Sidebar />

      <main className='bg-gray-100 h-screen w-full px-10 '>
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
        
        <div className='bg-green-300 '>
          <div className='py-3 px-8 mb-12 '>
            <h1 className='text-black text-2xl '>Invesstement opportunities </h1>
            <h2 className='text-gray-500'>Discover properties that matches your goals</h2>
          </div>
        </div>
      </main>
      
    </div>
  )
}

export default Home