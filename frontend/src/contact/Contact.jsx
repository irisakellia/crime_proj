// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <p className='mt-8 text-2xl font-serif font-bold ml-96'>Get in <span className='text-orange-600'>Touch</span></p>
//       <div className=''>
//         <p className='font-medium text-sm ml-96 mt-10'>Contact us via:</p>
//         <p className='text-black text-opacity-80 ml-96 text-xs mt-2'>lawfirm@gmail.com</p>
//       </div>
//       <div>
//         <form className=''>
//             <div className='inline-flex ml-56 mt-4 w-60 h-10 border-1 border-orange-500'>
//             <label>FULL NAME</label>
//             <input type="text" placeholder='ex.John Carter' className='w-60 h-10'/>
//             <label>EMAIL ADDRESS</label>
//             <input type="email" placeholder='example@gmail.com' className='w-60 h-10'/>
//             </div>
//             <div className='ml-56 mt-10'>
//             <label>PHONE</label>
//             <input type="number" placeholder='(250) 79 13 22 055' className='w-60 h-10'/>
//             <label>SUBJECT</label>

//             <input type="text" placeholder='ex.crime' className='w-60 h-10'/>
//             </div>
//             <label>LEAVE US A MESSAGE</label>
           
//             <textarea placeholder='please type your message here ...'></textarea>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contact

import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <p className="text-2xl font-serif font-bold text-center">Get in <span className="text-orange-600">Touch</span></p>
        <div className="mt-6">
          <p className="font-medium text-sm">Contact us via:</p>
          <p className="text-xs text-black text-opacity-80 mt-2">lawfirm@gmail.com</p>
        </div>
        <form className="mt-6">
          <div className="flex flex-col">
            <label className="text-sm mb-1">FULL NAME</label>
            <input type="text" placeholder="ex. John Carter" className="border border-orange-500 rounded-lg h-10 px-4 mb-4" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">EMAIL ADDRESS</label>
            <input type="email" placeholder="example@gmail.com" className="border border-orange-500 rounded-lg h-10 px-4 mb-4" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">PHONE</label>
            <input type="tel" placeholder="(250) 79 13 22 055" className="border border-orange-500 rounded-lg h-10 px-4 mb-4" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">SUBJECT</label>
            <input type="text" placeholder="ex. crime" className="border border-orange-500 rounded-lg h-10 px-4 mb-4" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">LEAVE US A MESSAGE</label>
            <textarea placeholder="Please type your message here ..." className="border border-orange-500 rounded-lg h-24 px-4 py-2 mb-4"></textarea>
          </div>
          <button type="submit" className="bg-orange-500 text-white rounded-lg py-2 px-6 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
