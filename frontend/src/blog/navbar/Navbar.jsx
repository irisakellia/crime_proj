import React from 'react'
import inyundo from '../../assets/inyundo.jpg'
import hand from'../../assets/hand.jpg' 

const Navbar = () => {
  return (
    <div>
      <div className='mt-20 ml-96'>
      <p className='text-orange-500 bg-orange-100 w-20 rounded-sm ml-2'>Our Blog</p>
      <p className='text-3xl font-serif fonr-medium mt-4'>Our Latest Blog & News</p>
      </div>
      <section className='inline-flex mt-16 '>
      <div className=''>
<img src={inyundo} alt='inyundo' className='w-[480px] h-[440px] ml-20 relative rounded-xl'/>
 <div className='border-2 border-white text-black bg-white  bottom-0 right-0 left-0  absolute w-[450px] h-[140px] ml-24 rounded-xl'>
  <p className='text-xs font-medium mt-2 ml-2'>10 October 2023</p>
  <p className='text-xl font-medium font-serif mt-2 ml-2'>The Role of a Criminal Defense Our Best </p>
  <p className='text-black text-opacity-75 text-xs ml-2'>Our team of dedicated criminal defense attorneys is here to has</p>
  <p className='text-black text-opacity-75 text-xs ml-2'>provide unwavering support and expert legal guidance lawyer</p>
  <p className='font-medium text-sm mt-4  ml-2'>Learn More </p>
</div> 
      </div>
      <div>
        <img src={hand} alt='hand' className='w-[480px] h-[440px] ml-10 relative rounded-xl'/>
         <div className='border-2 border-orange-500 bottom-0 ml-14 bg-orange-500 h-[140px] w-[450px] absolute text-white rounded-xl'>
          <p className='font-medium text-xs mt-2 ml-2'>10 October 2023</p>
          <p className='text-xl font-medium font-serif mt-2 ml-2'>Stay Informed About Criminal Law Updates</p>
          <p className='text-xs ml-2'>we're committed to protecting your rights, preserving your </p>
          <p className='text-xs ml-2'>freedom and advocating for the best possible outcome in your</p>
          <p className='font-medium text-sm mt-4 ml-2'>Learn More</p>
        </div> 
      </div>
      </section>
      <div>
        <button className='ml-[500px] border-2 border-orange-500 bg-orange-500 p-4 py-2 mt-8 rounded'>
          Request Code Evolution
        </button>
      </div>

      
    </div>
  )
}

export default Navbar
