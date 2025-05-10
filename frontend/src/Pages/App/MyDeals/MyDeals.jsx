import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"
import { useSelector } from "react-redux";
import PropertiesPropety from "../../../Components/Properties/PropertiesPropety";

export default function MyDeals() {
  const lang = useSelector((state) => state.user.language.data.myDeals);

    const dealsList = useSelector(state => state.properties.deals)
    

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen'>
          <Header pageTitle={lang.title} />

          <div className='grid grid-cols-3 gap-6 px-8'>
            {dealsList?.map((item,key)=>(
              <PropertiesPropety data={item.property} key={key} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
