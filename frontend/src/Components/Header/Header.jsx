import React from 'react'
import { FaBookmark } from 'react-icons/fa';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import { useSelector } from 'react-redux';

function Header({pageTitle}){
  const user = JSON.parse(localStorage.getItem("stake-user"))

  const savedPropertiesList = useSelector(state => state.properties.saved)
  const likedPropertiesList = useSelector(state => state.properties.liked)
  

  return (
    <div className=' sticky shadow top-4 z-40 flex justify-between items-center bg-white medium-bold border-white rounded-xl  my-6 px-8 py-2 w-full text-lg'>
        <h1 className='font-medium'> {pageTitle} </h1>

        <div className='flex items-center space-x-6'>
          <div className="flex space-x-2">
              <Link to={"/properties/liked"} className="relative bg-teal-50 cursor-pointer hover:bg-teal-100 transition-all hover:text-teal-500 text-gray-600 p-3 rounded-md"> 
                <MdFavorite size={20} /> 
                <p className='absolute -top-1 -right-1 bg-teal-400 p-2 py-1 text-white rounded-full text-xs font-bold'> {likedPropertiesList?.length} </p>
              </Link>
              <Link to={"/properties/saved"} className="relative bg-teal-50 cursor-pointer hover:bg-teal-100 transition-all hover:text-teal-500 text-gray-600 p-3 rounded-md"> 
                <FaBookmark size={20} /> 
                <p className='absolute -top-1 -right-1 bg-teal-400 p-2 py-1 text-white rounded-full text-xs font-bold'> {savedPropertiesList?.length} </p>
              </Link>
          </div>

          <Link to="/settings/profile" className='flex text-left items-center space-x-6 hover:bg-gray-100 px-2 py-2 rounded-md cursor-pointer'>
              <div>
                  <h2 className='text-sm font-medium'> {user?.fullname} </h2>
                  <h2 className='text-sm'> {user?.email} </h2>
              </div>
              <FaAngleDown size={24} className='opacity-60' />
          </Link>
        </div>
    </div>
  )
}

export default Header