import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Plans() {
  const lang = useSelector((state) => state.user.language.data.settings);



  const pages = [
    {
      "title": lang.profile,
      "link": "/settings/profile"
    },
    {
      "title": lang.password,
      "link": "/settings/password"
    },
    {
      "title": lang.plans,
      "link": "/settings/plans"
    },
  ]


  const Save = (e) => {
    e.preventDefault();

    console.log("saved");
  }
  

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen pb-20'>
          <Header pageTitle="Plans" />

          <div className="px-8 ">
            <div className="space-x-2 mt-14">
              {pages?.map((item,key)=>(
                <NavLink 
                  to={item.link}
                  className={({ isActive }) =>
                    ` font-medium px-8 py-2 rounded-md border
                    ${isActive ? ' bg-teal-500 transition-all text-white border-teal-500' : ' bg-white transition-all text-gray-600 border-gray-300 hover:bg-teal-500 hover:text-white'}`
                  }
                  key={key}
                > 
                  {item.title} 
                </NavLink>
              ))}
            </div>

            <div className="bg-white shadow pb-10 mt-8 rounded-md">
              <h1 className="px-10 py-4 font-medium text-lg text-gray-600"> {lang.CP} </h1>
              <hr className="text-gray-300"></hr>

              <form onSubmit={Save} className="w-2/5 min-h-90 px-10 mt-6">
              </form>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
