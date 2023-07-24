import React from 'react'
import "./home.css"
import Navbar from "../../componets/navbar/Navbar"
import Header from '../../componets/header/Header'
import Featured from '../../componets/featured/Featured'
import PropertyList from '../../componets/propertyList/PropertyList'
import FeaturedList from '../../componets/featuredList/FeaturedList'
import MailList from '../../componets/maillist/MailList'
import Footer from '../../componets/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
         <Featured />
         <h1 className='homeTitel'>Browse by property type</h1>
         <PropertyList />
         <h1 className='homeTitel'> Homes guests love</h1>
         <FeaturedList />
         <MailList />
         <Footer />
      </div>
    </div>
  )
} 

export default Home;