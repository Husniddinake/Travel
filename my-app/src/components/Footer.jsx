import React, { useState } from 'react';
import Footerimg from '../assets/footerimg.svg';
import Golobe2 from '../assets/Golobe2.svg';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
    } else {
      alert('Please enter your email address');
    }
  };

  return (
   
      <footer className="text-white  mt-[150px] w-full max-width-[1600px] mx-auto">
        <div className='w-[1200px] h-[305px] flex mx-auto rounded-3xl  bg-[rgba(205,234,225,1)] hover:scale-105 transition-all duration-300'>
          <div className='pl-[50px] pt-[20px] flex-1'>
            <p className="text-[40px] font-bold text-black">
              Subscribe <br /> Newsletter
            </p>
            <p className='pt-[5px] text-black text-[18px]'>The Travel</p>
            <p className='pt-[5px] text-black'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
            <div className='flex space-x-2 mt-4'>
              <input
                type="email"
                placeholder='Your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='flex-1 px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-500'
              />
              <button
                onClick={handleSubscribe}
                className='px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold'
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className='flex-1'>
            <img src={Footerimg} alt="" className='pl-[150px]'/>
          </div>
          
        </div>
       <div className='bg-[rgba(141,211,187,1)]  border-2 mt-[-20px] pt-[80px] h-[200px]'>
        <img src={Golobe2} alt="" className='pt-[20px] pl-[100px] hover:scale-105 transition-all duration-300' />
        <div className=' gap-2 text-black ml-[1110px] mt-[-50px]'>
         <p className='text-[28px] font-bold'>Contact US:</p>
         <div className='ml-[170px] mt-[-40px] '>
         <a className='+998970042563 hover:text-[#559b82] transition-200'>+998970042563</a> <br />

          <a className='+998970042563  hover:text-[#559b82] transition-200'>+998977770778</a>
          </div>
          </div>
       </div>
      </footer>
    
  );
};

export default Footer;