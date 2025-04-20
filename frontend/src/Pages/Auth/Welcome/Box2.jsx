import React from 'react'

function Box2() {
  return (
    <div className='mt-60 mb-32'>
        <div className='bg-teal-600 pl-16 w-full h-96 flex items-center justify-between rounded-xl overflow-hidden'>
            <div className='text-white w-full'>
                <p className='text-lg font-medium mb-4'> Download our app </p>
                <h1 className='font-bold text-4xl'> The modern way for anyone <br></br> to invest in real estate </h1>
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