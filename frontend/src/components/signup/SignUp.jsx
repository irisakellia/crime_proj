import React from 'react';



const SignUp = () => {
   return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <p className="text-2xl font-serif font-bold text-center">Get in <span className="text-orange-600">Touch</span></p>
        <form className="mt-6">
          <div className="flex flex-col">
            <label className="text-sm mb-1"> NAME</label>
            <input
              type="text"
              placeholder="ex. John Carter"
              className="border border-orange-500 rounded-lg h-10 px-4 mb-4"
              
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">EMAIL </label>
            <input
              type="email"
              placeholder="exampe@gmail.com"
              className="border border-orange-500 rounded-lg h-10 px-4 mb-4"
                   />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">PASSWORD</label>
            <input
              type="password" // Changed to password type
              placeholder="Enter your password"
              className="border border-orange-500 rounded-lg h-10 px-4 mb-4"
             // Fixed the onChange handler
            />
          </div>
          <button type="submit" className="bg-orange-500 text-white rounded-lg py-2 px-6 w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
