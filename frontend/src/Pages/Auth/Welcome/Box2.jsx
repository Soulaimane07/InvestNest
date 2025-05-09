import React from 'react'
import { useSelector } from 'react-redux';

function Box2() {
    const lang = useSelector((state) => state.user.language.data.welcome.card);

  return (
    <div className='mt-60 mb-32'>
        <div className='bg-teal-600 pl-16 w-full h-96 flex items-center justify-between rounded-xl overflow-hidden'>
            <div className='text-white w-full'>
                <p className='text-lg font-medium mb-4'> {lang.download} </p>
                <h1 className='font-bold text-4xl'> {lang.title} </h1>
                <ul className='flex items-center space-x-4 mt-12'>
                    <li> <img src='google-play.webp' className='w-40' /> </li>
                    <li> <img src='apple-store.png' className='w-40' /> </li>
                </ul>
            </div>
            <div className='w-full'>
                <img src='/box5.png' className=' -rotate-25' />
            </div>
        </div>
    </div>
  )
}

export default Box2