import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"

export default function MyDeals() {
  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen'>
          <Header pageTitle="My Deals" />
        </main>
      </div>

      <Footer />
    </>
  )
}
