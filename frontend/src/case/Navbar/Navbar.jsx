import React from 'react'
import justice from '../../assets/justice.png'

const Navbar = () => {
  return (
    <div>
        <div>
            <img src={justice} alt='justice' className='float-right mt-px'/>
            
        </div>
    <div className='ml-60 mt-20'>
      <p className='text-3xl text-orange-500 font-medium font-serif'>
        Save Your case
      </p>
      <div className='text-black text-opacity-60 text-sm mt-10'>
      <p>To make your cases to be easily added , We offer you</p>
      <p>with our databases where we keep and help you to store your</p>
      <p>information , In short we manage the info for you .</p>
      </div>
      
    </div>
    <div className='ml-60 mt-20'>
         <p className='text-3xl text-orange-500 font-serif font-medium'>Justice served for all</p>
         </div>
    </div>
  )
}

export default Navbar
