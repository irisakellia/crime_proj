import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../blog/navbar/Navbar'
import Testimony from '../blog/testimony/Testimony'


const BlogPage = () => {
  return (
    <div className='bg-orange-50'>
      <Header/>
      <Navbar/>
      <Testimony/>
   
    </div>
  )
}

export default BlogPage
