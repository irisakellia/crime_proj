import React from 'react'
import mama from '../../assets/mama.png'
import star from '../../assets/star.png'



const Testimony = () => {
  return (
    <div>
          <div>
            <p className='text-orange-500 ml-[550px] bg-orange-100 w-24 rounded mt-10'>Testimonials</p>
            <p className='font-serif text-2xl ml-[490px] mt-6'>Legal Victory Starts Here</p>
            </div>
      <section className=''>
     
       <div className='text-xs font-medium border-2 border-white bg-white rounded-xl w-96 ml-96 mt-20'>
       <div className='inline-flex w-10 h-10 mt-4 mb-4'>
     <img src={star} alt='star'/>
     <img src={star} alt='star'/>
     <img src={star} alt='star'/>
     <img src={star} alt='star'/>
     <img src={star}  alt='star'/>
     </div>
        <p className='ml-2'>"I cannot express how grateful I am for the legal has</p>
        <p className='ml-2'>expertise and support provided by Your Law Firm to</p>
        <p className='ml-2'>Name. Facing criminal charges was a nightmare, but</p>
        <p className='ml-2'> their team was a beacon of hope my darkest"</p>
        <div className='inline-flex'>
            <img src={mama} alt='mama' className='w-20 h-20'/>
            <p className='mt-4'>Ben Stokes</p>
           
        </div>
        <p className='ml-10 '>Owner taxfirm</p>
       </div>
        </section>
    </div>
  );
};

export default Testimony
