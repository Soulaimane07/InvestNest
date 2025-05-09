import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import DashboardCard from '../../../Components/DashboardCards/DashboardCard';
import DashboardPropert from '../../../Components/Properties/DashboardProperty';
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from '../../../Components/Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import { useSelector } from 'react-redux';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { FaPiggyBank } from "react-icons/fa6";


function Home() {
    const lang = useSelector((state) => state.user.language.data.dashboard);
  
    const user = JSON.parse(localStorage.getItem("stake-user"))
    const propertiesList = useSelector(state => state.properties.data)


    const cards = [
      {
        "title": lang.balance,
        "amount": useSelector(state => state.wallet.balance),
        "icon": <IoWallet size={30} />,
      },
      {
        "title": lang.income,
        "amount": 0,
        "icon": <FaMoneyBillTrendUp size={30} />,
      },
      {
        "title": lang.rental,
        "amount": 0,
        "icon": <FaPiggyBank size={30} />,
      }
    ]

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 pb-40 '>
          <Header pageTitle={lang.title} />
          
          <div className='py-3 px-8 mb-6 '>
            <h1 className='text-black text-2xl font-medium '> {lang.welcome} {user?.fullname}!</h1>
            <h2 className='text-gray-500 mt-2'> {lang.p} </h2>
          </div>

          <div className=' px-8 grid grid-cols-3 gap-4 pb-14 '>
            {cards?.map((item,key)=>(
              <DashboardCard data={item} key={key} />
            ))}
          </div>
          
          <div>
            <div className=' px-8  mb-6 '>
              <div className='flex justify-between space-x-56'>
                <h1 className='text-black font-medium text-2xl'> {lang.title2} </h1>
                <Link to="/properties" className='flex items-center space-x-4 '>
                <h2 className='text-gray-500 text-md font-semibold hover:text-teal-500 transition-all'> {lang.button} </h2>
                <IoIosArrowRoundForward size={40} className='text-gray-400 hover:text-teal-500 transition-all' />
                </Link>
              </div>
              <h2 className='text-gray-500 text-md font-semibold '> {lang.title2sub} </h2>
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