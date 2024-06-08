import React from 'react'
import opinions from '../../assets/opinions.png'

const Button = () => {
  return (
    <div>
<div className='font-medium ml-10 text-xs'>
    <p>
        Lawsy Lawyer Our
    </p>
    <p>
        Expert Attorneys
    </p>
    <img src={opinions} alt='opinions'/>
</div>

      <div  className='ml-96 '>
   <button className='border-2 bg-orange-400 p-2 py-2'>
    Request Code Evolution 
   </button>
   <button className='border-2 border-black ml-4 bg-white p-2 py-2'> 
Learn More 
   </button>
      </div>
    </div>
  )
}

export default Button
