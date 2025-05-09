import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from './Image'
import { BackendURL } from '../../../Components/Functions'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../../../app/Slices/userSlice'
import LanguageCom from '../../../Components/LanguageCom'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginFun = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BackendURL}/users/login?email=${e.target.email.value}&password=${e.target.password.value}`, {
                email: e.target.email.value,
                password: e.target.password.value,
            });

            if (response.data) {
                dispatch(login(response.data))
                navigate("/");
                window.location.reload()
            }
        } catch (err) {
            console.error(err.response?.data?.error || "An error occurred");
        }
    };


    const lang = useSelector((state) => state.user.language.data.login);


  return (
    <div className='flex items-centerr h-screen'>
        <div className='w-full'>
            <div className='px-12 py-6 flex justify-between'>
                <img src='logo.jpg' className='w-24' />
                <LanguageCom />
            </div>
            <hr className='text-gray-300'></hr>
            <div className='mt-20 px-40'>
                <h1 className='text-3xl font-semibold text-center'> {lang.welcome} </h1>
                <p className='text-gray-500 text-center mt-2'> {lang.p} </p>
                <form onSubmit={loginFun} className='mt-10 flex flex-col space-y-6'>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email" className='text-sm font-semibold'> {lang.email} </label>
                        <input type="email" id='email' className='border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500'
                        placeholder={lang.emailP} required />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email" className='text-sm font-semibold'> {lang.password} </label>
                        <input type="password" id='password' className='border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500'
                        placeholder={lang.passwordP} required />
                    </div>

                    <button type="submit" className="transition-all cursor-pointer text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-3 text-center">
                        {lang.login}
                    </button>
                </form>

                <div className=' flex items-center space-x-3 mt-10'>
                    <p> {lang.account} </p>
                    <Link to="/signup" className='text-teal-500 hover:underline transition-all'> {lang.signup} </Link>
                </div>
            </div>
        </div>
        <Image />
    </div>
  )
}

export default Login