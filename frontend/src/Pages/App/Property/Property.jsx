import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import { RiHome3Fill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa6";
import Footer from "../../../Components/Footer/Footer";
import { LuSquareDashed } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import HowItWorks from "./HowItWorks";
import { useParams } from "react-router-dom";
import { BackendURL, formatDate, GetProperty } from "../../../Components/Functions";
import { MdFavorite } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikedProperties, fetchSavedProperties } from "../../../../app/Slices/PropertiesSlice";


export default function Property() {
    const dispatch = useDispatch()

    const {id} = useParams()
    const propertyData = GetProperty(id)
    const userId = useSelector(state => state.user.user?.id)
    


  const listImages = ["/property.jpeg", "/property1.jpg", "/property.jpeg", "/property1.jpg"]
  

    const FavFunction = () => {
        const data = {
            "idProperty": propertyData?.id,
            "idUser": userId
        }

        axios.post(`${BackendURL}/likedProperties`, data)
            .then(res => {
                if(res.status === 200 | res.status === 201){
                    dispatch(fetchLikedProperties(userId))
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    const SaveFunction = () => {
        const data = {
            "idProperty": propertyData?.id,
            "idUser": userId
        }

        axios.post(`${BackendURL}/savedProperties`, data)
            .then(res => {
                if(res.status === 200 | res.status === 201){
                    dispatch(fetchSavedProperties(userId))
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

  return (
    <>
        <div className='flex'>
            <Sidebar />

            <main className='bg-gray-100 w-full px-10'>
                <Header pageTitle="Property" />

                <div className="px-4">
                    <div className="flex items-stretch gap-2 ">
                        <img className=' w-1/2 rounded-md' src={listImages[0]} alt="property" />
                        <div className="grid grid-cols-2 gap-2">
                            {listImages.map((item,key)=>(
                                <img className=' w-full h-full rounded-md' src={item} key={key} alt="property" />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6 items-start pb-40">
                        <div className="bg-white w-full min-h-screen rounded-md  py-6 pb-20">
                            <div className="px-8">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-4xl font-bold"> {propertyData?.title} </h1>
                                    <div className="flex space-x-2">
                                        <button onClick={FavFunction} className="bg-green-50 cursor-pointer hover:bg-green-100 transition-all text-green-500 p-3 rounded-md"> <MdFavorite size={20} /> </button>
                                        <button onClick={SaveFunction} className="bg-green-50 cursor-pointer hover:bg-green-100 transition-all text-green-500 p-3 rounded-md"> <FaBookmark size={20} /> </button>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 mt-6">
                                    <div className="flex items-center space-x-2">
                                        <IoBedOutline className="opacity-60" size={22} />
                                        <p className="font-medium"> {propertyData?.totalRooms} </p>
                                    </div>

                                    <RxDividerVertical size={18} className="opacity-20" />
                                    
                                    <div className="flex items-center space-x-2">
                                        <LuSquareDashed className="opacity-60" size={22} />
                                        <p className="font-medium"> {propertyData?.squareSpace} </p>
                                    </div>
                                    
                                    <RxDividerVertical size={18} className="opacity-20" />
                                    
                                    <div>
                                        <p className="font-medium"> {propertyData?.location} </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-18">
                                <HowItWorks />
                            </div>

                            <div className="mt-18 px-8">
                                <div className="flex items-center space-x-2 opacity-80">
                                    <RiHome3Fill size={22} />
                                    <h2 className="text-lg font-medium"> Property Overview </h2>
                                </div>
                                <p className="mt-4 px-6"> 
                                    {propertyData?.overview}
                                </p>
                            </div>

                            <div className="mt-18 px-8">
                                <div className="flex items-center space-x-2 opacity-80">
                                    <MdLocationPin size={22} />
                                    <h2 className="text-lg font-medium"> Location </h2>
                                </div>
                                <div className="px-6">
                                    <p className="mt-4 flex items-center space-x-2">
                                        <IoLocationOutline className="text-green-400" size={21} />   
                                        {propertyData?.location}
                                    </p>

                                    <div className="w-full h-96 mt-4 rounded-md overflow-hidden">
                                        <iframe
                                        title="Google Map"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={propertyData?.mapsLocation}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="mt-18 px-8">
                                <div className="flex items-center space-x-2 opacity-80">
                                    <FaCommentDots size={22} />
                                    <h2 className="text-lg font-medium"> Have more questions about this property? </h2>
                                </div>
                                <div className="px-6 mt-4 flex items-start space-x-6">
                                    <img src="/logo-icon.jpg" className="w-16"  />
                                    <textarea 
                                        className="w-full p-4 rounded-md bg-gray-200/60 border-2 border-transparent focus:border-green-500 focus:outline-none transition duration-150" 
                                        placeholder="Enter your message here..." 
                                        
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-1/2 rounded-md py-6 sticky top-26">
                            <h2 className="text-center opacity-60 mb-4"> Property price </h2> 
                            <h1 className="text-center text-green-400 font-bold text-4xl"> $ {propertyData?.price} </h1> 

                            <div className='bg-gray-50 rounded-md py-2 px-4 mx-6 mt-8'>
                                <div className='flex items-center justify-between'>
                                    <label className='opacity-60'> Funded date </label>
                                    <p className='font-medium opacity-80'> {formatDate(propertyData?.fundedDate)} </p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='opacity-60'> Purchase price </label>
                                    <p className='font-medium opacity-80'> $ {propertyData?.purchasePrice} </p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='opacity-60'> Total rental income </label>
                                    <p className='font-medium opacity-80'> $ {propertyData?.totalRentalIncome} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <Footer />
    </>
  )
}
