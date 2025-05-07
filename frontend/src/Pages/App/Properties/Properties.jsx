import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import PropertiesPropety from "../../../Components/Properties/PropertiesPropety"
import Footer from "../../../Components/Footer/Footer"
import { useSelector } from "react-redux"

export default function Properties() {

  const propertiesList = useSelector(state => state.properties.data)
  
  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 pb-20'>
          <Header pageTitle="Properties" />

          <div className="grid grid-cols-3 gap-6 px-8">
            {propertiesList?.map((item,key)=>(
              <PropertiesPropety data={item} key={key} />
            ))}
          </div>
        </main>
      </div>
      
      <Footer />
    </>

  )
}
