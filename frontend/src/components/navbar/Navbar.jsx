import React from 'react'
import igitebo from '../../assets/igitebo.png'
import play from '../../assets/play.png'

const Navbar = () => {
  return (
    <div>
      <div className='inline-flex'>
        <img src={igitebo} alt='igitebo' className='ml-10 mt-24'/>
        <div className='ml-20 mt-24 '>
            <p className='text-4xl font-serif'>Expert Criminal Defense,</p>
            <p className='text-4xl font-serif mt-2'><span className='inline-flex mt-2'>Strongest <img src={play} alt='play'/></span>Advocate</p>
           
        </div>
       
      </div>
      <div className='text-sm text-black text-opacity-70 ml-60 mt-10  font-sans'>
             <p>We have that every case is unique , and we approach each with meticulous attention</p>
             <p> has detail. Whether you're facing charges related DUI, drug offenses, assault.</p>   
                </div>
    </div>
  )
}

export default Navbar
