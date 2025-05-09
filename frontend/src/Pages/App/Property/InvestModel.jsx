import React from 'react'
import { MdClose } from 'react-icons/md'
import { useSelector } from 'react-redux';

function InvestModel({setOpen}) {
  const lang = useSelector((state) => state.user.language.data.myWallet);

  return (
    <div className='w-full fixed left-0 flex items-center justify-center z-60 top-0 h-screen bg-black/40'>
        <div className='bg-white border border-gray-400 overflow-hidden h-2/3 w-2/4  rounded-md flex flex-col'>
            <div className='font-medium border-b border-gray-200 text-2xl px-8 py-5 bg-gray-50 flex items-center justify-between'>
                <h1 className='text-gray-700'> Start investing </h1>
                <button 
                    onClick={()=> setOpen(false)}
                    className='border border-gray-300 text-gray-500 hover:text-gray-900 transition-all cursor-pointer p-2 hover:bg-gray-100 rounded-md'
                >
                    <MdClose />
                </button>
            </div>

            <div className='px-10 flex flex-col justify-between h-full overflow-y-scroll pb-6'>
                <div className='mt-8'>
                    
                </div>

                <div className='flex items-baseline justify-end space-x-3'>
                    <button 
                        button 
                        onClick={()=> setOpen(false)}
                        className='px-6 cursor-pointer py-2 rounded-md font-medium bg-white text-gray-600 border border-gray-500 hover:bg-gray-200 transition-all '
                    > {lang.cancel} </button>
                    <button 
                        button
                        onClick={null}
                        className='px-6 cursor-pointer py-2 rounded-md font-medium bg-gray-800 text-white border border-gray-800 hover:bg-gray-600 transition-all '
                    > {lang.deposit} </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvestModel