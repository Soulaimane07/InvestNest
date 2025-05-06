import React from 'react'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SlHome } from "react-icons/sl";
import { PiHandshake } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { IoLogOutOutline } from "react-icons/io5";


function Sidebar() {
  const pages = [
    {
      "title": "Dashboard",
      "link": "/",
      "icon": <TbLayoutDashboardFilled size={20} />
    },
    {
      "title": "Properties",
      "link": "/properties",
      "icon": <SlHome size={20} />
    },
    {
      "title": "My Deals",
      "link": "/my-deals",
      "icon": <PiHandshake size={20} />
    },
    {
      "title": "Settings",
      "link": "/settings",
      "icon": <IoSettingsOutline size={20} />
    },
  ]


  const navigate = useNavigate()

  const LogoutFun = () => {
    localStorage.removeItem("stake-user")
    navigate("/")
  }


  return (
    <div className='h-screen bg-white w-74 sticky top-0 '>
      <Link to="/">
        <img src="/logo.jpg" className='w-32 mx-auto py-6' />
      </Link>
      <ul className='space-y-2 mt-5 flex flex-col justify-between'>
        <div>
          {pages.map((item,key)=>(
            <NavLink
              key={key}
              to={item.link}
              className={({ isActive }) =>
                `text-lg cursor-pointer px-5 py-3 w-full flex space-x-2 items-center border-r-6 transition-all 
                ${isActive ? 'bg-green-100 text-green-500  opacity-90 border-green-400' : 'border-transparent text-gray-400 hover:bg-green-100 hover:text-green-500'}`
              }
            >
              {item.icon}
              <p>{item.title}</p>
            </NavLink>
          ))}
        </div>

        <button onClick={LogoutFun} className='text-lg cursor-pointer px-5 py-3 w-full flex space-x-2 items-center transition-all '>
          <IoLogOutOutline />
          <p>Logout</p>
        </button>
      </ul>
    </div>
  )
}

export default Sidebar