import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'

function Home() {
  return (
    <div className='flex'>
      
      <Sidebar />

      <main className='bg-gray-100 h-screen w-full px-10 '>
        <div className='bg-white medium-bold border-white rounded-xl  my-6 px-8 py-4 w-full text-lg'>
          <h1>Dashboard</h1>
        </div>
       <div className='py-32 px-12 '>
        <h1 className='text-black text-2xl'>Welcome Test!</h1>
        <h2 className='text-gray-500'>Explore Tailored Investment Opportunities</h2>
       </div>
      </main>
      
    </div>
  )
}

export default Home