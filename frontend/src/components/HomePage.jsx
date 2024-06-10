


import Button from '../components/button/Button';
import Navbar from '../components/navbar/Navbar';
import Number from '../components/number/Number';
import Picture from '../components/picture/Picture';
import AboutUs from '../containers/AboutUs';
import AddCase from '../case/AddCase';
import BlogPage from '../blog/BlogPage';
import ContactPage from '../contact/ContactPage'


import React from 'react'
import Header from '../components/header/Header';

const HomePage = () => {
  return (
    <div className='mt-0 p-0'>
    <div className='bg-orange-50'>
  <Header/>
  <Number/>
  <Navbar/>
  
  <Button/>
  <Picture/>
  <AboutUs/>
  <AddCase/>
  <BlogPage/>
  <ContactPage/>
  </div>
 
</div>
  )
}

export default HomePage

