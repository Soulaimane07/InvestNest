// import React from 'react'
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { SlHome } from "react-icons/sl";
// import { PiHandshake } from "react-icons/pi";
// import { IoSettingsOutline } from "react-icons/io5";

// function Sidebar() {
//   return (
//     <div className='h-screen bg-white w-1/5'>
//         <div>
//             <img src="/logo.jpg" className='w-32 mx-auto py-6' />
//       </div>
//        <div>
//         <ul className='space-y-2'>
//           <button className='bg-green-100 text-gray-400 text-lg cursor-pointer px-5 opacity-90 py-3 border-r-6 border-green-400  w-full flex space-x-2 items-center  '>
//             <TbLayoutDashboardFilled size={28} />
//            <p>Dashboard</p> 
//           </button>
       
//            <button className='bg-green-100 text-gray-400 text-lg cursor-pointer px-5 opacity-90 py-3 border-r-6 border-green-400 w-full flex space-x-2 items-center  '>
//             <SlHome  size={28} />
//            <p>Properties</p> 
//           </button>

//           <button className='bg-green-100 text-gray-400 text-lg cursor-pointer px-5 opacity-90 py-3 border-r-6 border-green-400  w-full flex space-x-2 items-center  '>
//             <PiHandshake size={28} />
//            <p>My Deals</p> 
//           </button>
//            <button className='bg-green-100 text-gray-400 text-lg cursor-pointer px-5 opacity-90 py-3 border-r-6 border-green-400 w-full flex space-x-2 items-center  '>
//             <IoSettingsOutline  size={28} />
//            <p>Settings</p> 
//           </button>
//         </ul>
//       </div>
     
//     </div>
//   )
// }



// export default Sidebar

"use client"

import { useState } from "react"
import { LayoutDashboard, Home, Handshake, Settings, HelpCircle, LogOut } from "lucide-react"
import "./Sidebar.css"

export default function Sidebar() {
  // Active state to highlight current page
  const [active, setActive] = useState("properties")

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-container">
        <a href="/" className="logo-link">
          <div className="logo">
            <div className="logo-circle">
              <div className="logo-inner-circle"></div>
            </div>
            <span className="logo-text">Onid</span>
          </div>
        </a>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li>
            <a
              href="/dashboard"
              className={`nav-link ${active === "dashboard" ? "active" : ""}`}
              onClick={() => setActive("dashboard")}
            >
              <LayoutDashboard size={20} className="nav-icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/properties"
              className={`nav-link ${active === "properties" ? "active" : ""}`}
              onClick={() => setActive("properties")}
            >
              <Home size={20} className="nav-icon" />
              <span>Properties</span>
            </a>
          </li>
          <li>
            <a
              href="/deals"
              className={`nav-link ${active === "deals" ? "active" : ""}`}
              onClick={() => setActive("deals")}
            >
              <Handshake size={20} className="nav-icon" />
              <span>My Deals</span>
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className={`nav-link ${active === "settings" ? "active" : ""}`}
              onClick={() => setActive("settings")}
            >
              <Settings size={20} className="nav-icon" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Bottom links */}
      <div className="sidebar-footer">
        <ul className="footer-list">
          <li>
            <a href="/help" className="nav-link">
              <HelpCircle size={20} className="nav-icon" />
              <span>Help</span>
            </a>
          </li>
          <li>
            <a href="/logout" className="nav-link">
              <LogOut size={20} className="nav-icon" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
