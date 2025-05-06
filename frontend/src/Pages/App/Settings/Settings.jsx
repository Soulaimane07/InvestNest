import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"

export default function Settings() {
  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen'>
          <Header pageTitle="Settings" />
        </main>
      </div>

      <Footer />
    </>
  )
}
