import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import DashboardCard from '../../../Components/DashboardCards/DashboardCard';
import DashboardPropert from '../../../Components/Properties/DashboardProperty';
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from '../../../Components/Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import { useSelector } from 'react-redux';

function Home() {
  const user = JSON.parse(localStorage.getItem("stake-user"))
  const propertiesList = useSelector(state => state.properties.data)

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 pb-40 '>
          <Header pageTitle="Dashboard" />
          
          <div className='py-3 px-8 mb-6 '>
            <h1 className='text-black text-2xl font-medium '>Welcome {user?.fullname}!</h1>
            <h2 className='text-gray-500'>Explore Tailored Investment Opportunities</h2>
          </div>

          <div className=' px-8 grid grid-cols-4 gap-6 pb-14 '>
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />          
          </div>
          
          <div>
            <div className=' px-8  mb-6 '>
              <div className='flex justify-between space-x-56'>
                <h1 className='text-black font-medium text-2xl '>Invesstement opportunities </h1>
                <Link to="/properties" className='flex items-center space-x-4 '>
                <h2 className='text-gray-500 text-md font-semibold hover:text-green-400 transition-all'>View all opportunties</h2>
                <IoIosArrowRoundForward size={40} className='text-gray-400 hover:text-green-400 transition-all' />
                </Link>
              </div>
              <h2 className='text-gray-500 text-md font-semibold '>Discover properties that matches your goals</h2>
            </div>
            
            <div className='grid grid-cols-3 gap-8 mx-8 '>
              {propertiesList?.map((item,key)=>(
                key < 3 && <DashboardPropert data={item} key={key} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Home