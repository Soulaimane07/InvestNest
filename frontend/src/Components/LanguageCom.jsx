import React from 'react'
import { CiGlobe } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { langChange } from '../../app/Slices/userSlice';

function LanguageCom() {
    const lang = useSelector((state) => state.user.language);
    const dispatch = useDispatch()

  return (
    <div className='flex items-center hover:text-teal-500 cursor-pointer'>
        <CiGlobe size={22} />
        <select onChange={()=> dispatch(langChange())} className=' cursor-pointer text-gray-900 font-medium'>
            <option selected={lang?.subTitle === "en"}> EN </option>
            <option selected={lang?.subTitle === "fr"}> FR </option>
        </select>
    </div>
  )
}

export default LanguageCom