import React from 'react'
import police from '../../assets/police.png'
import check from '../../assets/check.png'

const Navbar = () => {
  return (
    <div className='ml-20'>
        <div className='float-right mt-10 mr-20'>


<img src={police} alt='police'/>
</div>

        <div className='mt-10'>
            <p className='text-orange-500 border-px bg-orange-50 w-20 rounded-sm mt-4 '>About Us</p>
            <p className='font-serif text-2xl mt-4'>Navigating & Legal Maze with </p>
            <p className='font-serif text-2xl mt-px'>a Criminal Defense Expert</p>
            <p className='text-black text-opacity-80 text-sm mt-4'>Service providers can differentiate themselves by offering high-quality and</p>
            <p className='text-black text-opacity-80 text-sm mt-px'>reliable services . Airlines , for instance , promote their safely records and .</p>
        </div>

<div className='mt-10'>
    <div className='block'>
    <div className='text-sm font-medium inline-flex'>
   <img src={check} alt='check' className='w-8 h-8'/> <p>Expertise & Knowledge</p>
   </div>
   <div className='text-sm font-medium inline-flex ml-6'>
    <img src={check}alt='check' className='w-8 h-8'/><p>Quality & Reliability</p>
    </div>
    </div>
    <div className='text-sm font-medium inline-flex'>

    <img src={check} alt='check' className='w-8 h-8'/><p className=''>Improved Efficiency</p>
    </div>
    <div className='text-sm font-medium inline-flex ml-12'>
    <img src={check} alt='check' className='w-8 h-8'/><p>Environment Benefits</p>
    </div>
    
</div>
<section className='inline-flex'>
<div className='mt-10 h-20 w-2 bg-orange-500 rounded-2xl'>

</div>
<div className='bg-orange-50  font-sans w-[500px] mt-10 text-xs'>
    
    <p className='ml-4'>Some services emphasize environmental sustainability as a benefit,</p>
    <p className='ml-4'>Car-sharing services like Zipcar promote reduced emissions and the </p>
    <p className='ml-4'>use of fewer vehicles , contributing to a greener environment .</p>
</div>
</section>

<div>
    <button className='border-2 border-orange-500 p-2 py-2 mt-8 bg-orange-500'> Explore More -></button>
</div>

    </div>
  )
}

export default Navbar
