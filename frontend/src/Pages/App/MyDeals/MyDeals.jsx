import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"
import { useSelector } from "react-redux";

export default function MyDeals() {
  const lang = useSelector((state) => state.user.language.data.myDeals);


  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen'>
          <Header pageTitle={lang.title} />
        </main>
      </div>

      <Footer />
    </>
  )
}
