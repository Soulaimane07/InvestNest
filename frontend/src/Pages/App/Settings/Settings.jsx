import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"
import { NavLink } from "react-router-dom"

export default function Settings() {

  const pages = [
    {
      "title": "Profile",
      "link": "/settings/profile"
    },
    {
      "title": "Password",
      "link": "/settings/password"
    },
    {
      "title": "Billing",
      "link": "/settings/billing"
    },
    {
      "title": "Plans",
      "link": "/settings/plans"
    },
  ]


  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen'>
          <Header pageTitle="Settings" />

          <div className="px-8 mt-6 space-x-2">
            {pages?.map((item,key)=>(
              <NavLink 
                to={item.link}
                className={({ isActive }) =>
                  `text-lg cursor-pointer px-8  mt-1 py-3 w-full flex space-x-2 items-center border-r-6 transition-all 
                  ${isActive ? 'bg-teal-100/60 transition-all text-teal-500  opacity-90 border-teal-400' : 'border-transparent transition-all text-gray-400 hover:bg-teal-100/60 hover:text-teal-500'}`
                }
                // className="bg-white rounded-md px-8 py-2 font-medium border border-gray-300 hover:bg-teal-600 hover:text-white cursor-pointer transition-all"
                key={key}
              > 
                {item.title} 
              </NavLink>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
