import React from 'react'
import { PiHandshake } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { IoLogOutOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import LanguageCom from '../LanguageCom';
import { useSelector } from 'react-redux';



function Sidebar() {
  const lang = useSelector((state) => state.user.language.data.sidebar);

  const pages = [
    {
      "title": lang.dashboard,
      "link": "/",
      "icon": <RxDashboard size={24} />
    },
    {
      "title": lang.properties,
      "link": "/properties",
      "icon": <BsBuildings size={24} />
    },
    {
      "title": lang.myWallet,
      "link": "/my-wallet",
      "icon": <IoWalletOutline size={24} />
    },
    {
      "title": lang.myDeals,
      "link": "/my-deals",
      "icon": <PiHandshake size={24} />
    },
    {
      "title": lang.settings,
      "link": "/settings/profile",
      "icon": <IoSettingsOutline size={24} />
    },
  ]


  const navigate = useNavigate()

  const LogoutFun = () => {
    localStorage.removeItem("stake-user")
    navigate("/")
    window.location.reload()
  }


  return (
    <div className='h-screen shadow bg-white w-80 sticky top-0 py-4 flex flex-col justify-between'>
      <div>
        <div className='mt-6 mb-8 flex items-center justify-between px-6'>
          <Link to="/">
            <img src="/logo.jpg" className='w-26 mx-auto ' />
          </Link>

          <LanguageCom />
        </div>

        {pages.map((item,key)=>(
          <NavLink
            key={key}
            to={item.link}
            className={({ isActive }) =>
              `text-lg cursor-pointer px-8  mt-1 py-3 w-full flex space-x-2 items-center border-r-6 transition-all 
              ${isActive ? 'bg-teal-100/60 transition-all text-teal-500  opacity-90 border-teal-400' : 'border-transparent transition-all text-gray-400 hover:bg-teal-100/60 hover:text-teal-500'}`
            }
          >
            {item.icon}
            <p>{item.title}</p>
          </NavLink>
        ))}
      </div>

      <button onClick={LogoutFun} className='text-lg cursor-pointer px-8 py-3 w-full flex space-x-2 items-center border-r-6 transition-all border-transparent text-gray-500 hover:bg-teal-100 hover:text-teal-500 '>
        <IoLogOutOutline size={24} />
        <p> {lang.logout} </p>
      </button>
    </div>
  )
}

export default Sidebar