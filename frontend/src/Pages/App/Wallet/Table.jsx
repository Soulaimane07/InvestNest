import React from 'react'
import { GoClock } from "react-icons/go";
import { useSelector } from 'react-redux';
import { formatDate } from '../../../Components/Functions';


function Table() {
    const lang = useSelector((state) => state.user.language.data.myWallet);
    const transactions = useSelector(state => state.wallet.transactions)
    

  return (
    <div className='w-full shadow rounded-md px-6 py-3 bg-white'>
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs border-b border-gray-200 text-gray-700 uppercase bg-white">
            <tr>
                <th scope="col" className="px-6 py-3"> {lang.type} </th>
                <th scope="col" className="px-6 py-3"> {lang.status} </th>
                <th scope="col" className="px-6 py-3"> {lang.date} </th>
                <th scope="col" className="px-6 py-3"> {lang.amount} </th>
            </tr>
        </thead>
        <tbody>
            {transactions.length > 0 ? (
                transactions.map((item, key) => (
                <tr key={key} className="bg-white border-b border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.type}
                    </th>
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4">{ formatDate(item.date)}</td>
                    <td className="px-6 py-4 font-medium">${item.amount?.toLocaleString()}</td>
                </tr>
                ))
            ) : (
                <tr className='bg-white h-60 w-full'>
                    <td colSpan="4" className="text-center  py-6 text-gray-500">
                        <div className='flex items-center flex-col space-y-3'>
                            <GoClock size={40} />
                            <p className='font-medium'> No transactions yet.</p>
                        </div>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
    </div>
  
  )
}

export default Table