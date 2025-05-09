import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { BackendURL } from "../../../Components/Functions"
import { login } from "../../../../app/Slices/userSlice"

export default function Password() {
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

  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)

  const [oldpassword, setoldPassword] = useState("")
  const [newPassword, setnewPassword] = useState("")
  const [conPassword, setconPassword] = useState("")

  let disabled = oldpassword !== user?.password || newPassword === "" || conPassword === "" || conPassword !== newPassword
  

  const Save = (e) => {
    e.preventDefault();

    axios.put(`${BackendURL}/users/${user?.id}/password?newPassword=${newPassword}`)
      .then(res => {
        dispatch(login(res.data))

        setoldPassword("")
        setnewPassword("")
        setconPassword("")
      })
      .catch(err => {
        console.error(err);
      })

  }
  

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen pb-20'>
          <Header pageTitle={lang.password} />

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
              <h1 className="px-10 py-4 font-medium text-lg text-gray-600"> {lang.reset} </h1>
              <hr className="text-gray-300"></hr>

              <form onSubmit={Save} className="w-2/5 min-h-90 px-10 mt-6">
                <div className="mb-4 flex flex-col">
                  <label className="text-gray-500 font-medium mb-2"> {lang.current} </label>
                  <input value={oldpassword} type="password" onChange={(e)=> setoldPassword(e.target.value)} className="border rounded-md border-gray-500 py-2 px-4" />
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="text-gray-500 font-medium mb-2"> {lang.new} </label>
                  <input value={newPassword} type="password" onChange={(e)=> setnewPassword(e.target.value)} className="border rounded-md border-gray-500 py-2 px-4" />
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="text-gray-500 font-medium mb-2"> {lang.confirm} </label>
                  <input value={conPassword} type="password" onChange={(e)=> setconPassword(e.target.value)} className="border rounded-md border-gray-500 py-2 px-4" />
                </div>

                <button disabled={disabled} className={`${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-500 cursor-pointer"}  px-10 py-2   transition-all mt-5 text-white rounded-md font-medium`}> {lang.save} </button>
              </form>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
