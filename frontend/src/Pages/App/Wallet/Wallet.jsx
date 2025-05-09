import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"
import Table from "./Table"
import { useSelector } from "react-redux"
import DepositModal from "./Modals/DepositModal"
import WithdrawModal from "./Modals/WithdrawModal"
import { useState } from "react"
import { FiHelpCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";


export default function Wallet() {
  const lang = useSelector((state) => state.user.language.data.myWallet);


    const balance = useSelector(state => state.wallet.balance)
    const rewards = useSelector(state => state.wallet.rewards)


    const [openDeposit, setOpenDeposit] = useState(false)
    const [openWithdraw, setOpenWithdraw] = useState(false)
    const [openHelp, setOpenHelp] = useState(false)

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen pb-30'>
          <Header pageTitle={lang.title} />

          <div className="grid grid-cols-2 gap-6 px-8 mb-8 mt-12">
            <div className="flex justify-between border pb-10 border-gray-200 shadow-md bg-white rounded-md px-8 py-6 items-start">
                <div className="space-y-4 flex flex-col">
                    <label className="text-xl font-medium"> {lang.cash} </label>
                    <p className="font-bold text-4xl"> $ {balance} </p>
                </div>
                <div className="flex flex-col space-y-3">
                    <button onClick={()=> setOpenDeposit(true)} className="bg-gray-600 hover:bg-gray-500 transition-all cursor-pointer text-white px-10 py-2 rounded-md text-sm font-medium"> {lang.deposit} </button>
                    <button onClick={()=> setOpenWithdraw(true)} disabled={balance === 0} className={`${balance === 0 ? " cursor-not-allowed opacity-40" : "cursor-pointer opacity-100"} bg-transparent border border-gray-600 text-shadow-gray-600 hover:bg-gray-100 transition-all   px-10 py-2 rounded-md text-sm font-medium`}> {lang.withdraw} </button>
                </div>
            </div>
            <div className="flex justify-between border pb-10 border-gray-200 shadow-md bg-white rounded-md px-8 py-6">
                <div className="space-y-4 flex flex-col ">
                    <div className="flex items-baseline space-x-2">
                        <label className="text-xl font-medium"> {lang.rewards} </label>
                        <div className="relative">
                            <button 
                                onMouseEnter={()=> setOpenHelp(true)} 
                                onMouseLeave={()=> setOpenHelp(false)} 
                                className=" cursor-pointer hover:text-teal-600 transition-all"
                            > 
                                <FiHelpCircle /> 
                            </button>
                            <p className={`${openHelp ? "opacity-100 visible" : "opacity-0 hidden"} absolute w-80 transition-opacity duration-200 -top-1 left-6 z-60 bg-gray-500 text-white rounded-md shadow-md px-4 text-sm font-medium py-3`}> 
                                {lang.p}
                            </p>
                        </div>
                    </div>
                    <p className="font-bold text-4xl"> $ {rewards} </p>
                </div>
                <div>
                    <FaStar size={80} className="text-teal-500" />
                </div>
            </div>
          </div>

          <div className="px-8 mt-16">
            <h2 className="text-2xl font-medium mb-4"> {lang.transactions} </h2>
            <Table />
          </div>
        </main>

        {openDeposit && <DepositModal setOpen={setOpenDeposit} />}
        {openWithdraw && <WithdrawModal setOpen={setOpenWithdraw} />}
      </div>

      <Footer />
    </>
  )
}
