import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
 
import Carousel from '../componets/Carousel'
import Body from '../componets/LandingLayout'
import Burger from '../componets/Burger'


import Momos from '../componets/Momos'
import Pizza from '../componets/Pizza'



export default function Home() {
  return (
      <>
      <Navbar />
      <Body />  
      <div style={{padding:"30px"}} >
        <Burger/>
        <Pizza />
        <Momos/>
      </div>
    
 
      <div><Carousel /></div>





      <div><Footer />
      </div>
   </>
  )
}
