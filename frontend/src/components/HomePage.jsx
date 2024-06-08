


import Button from '../components/button/Button';
import Navbar from '../components/navbar/Navbar';
import Number from '../components/number/Number';
import Picture from '../components/picture/Picture';


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
  </div>
 
</div>
  )
}

export default HomePage

