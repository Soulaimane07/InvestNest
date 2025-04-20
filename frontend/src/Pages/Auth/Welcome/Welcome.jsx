import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import Header from './Header'
import Box1 from './Box1'
import Box2 from './Box2'

function Welcome() {
  return (
    <>
        <Navbar />
        <main className='px-44 text-gray-800'>
          <Header />
          <Box1 />
          <Box2 />
        </main> 
        <Footer /> 
    </>
  )
}

export default Welcome