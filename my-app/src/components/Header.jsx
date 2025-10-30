import React from 'react';
import Golobe from '../assets/Golobe.svg';  
import { FaPlane } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { HiTableCells } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className='flex h-[60px] items-center justify-around shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)]'>
        <div className='flex gap-11'>
          <div className='flex gap-1 hover:scale-120 transition-all duration-300'>
            <FaPlane className='mt-[5px]' />
            <Link to="/FlightAbu"><p>Find Flight</p></Link> 
          </div>
          <div className='flex gap-1 hover:scale-120 transition-all duration-300'>
            <IoBed className='mt-[5px]' />
           <Link to="Page"> <p>Find Stays</p> </Link> 
          </div>
          <div className='flex gap-1 hover:scale-120 transition-all duration-300'>
            <HiTableCells className='mt-[5px]' />
            <Link to='/Tablo'><p className='text-[17px]'>Tablo</p></Link>  
          </div>
        </div>
      
        <Link to="/">  
          <img src={Golobe} alt="Golobe logo" className='w-[110px] h-[36px] items-center justify-center max-auto flex hover:scale-120 transition-all duration-300' />
        </Link>
        
        <div className='flex hover:scale-105 transition-all duration-300'>
          <Link to='/LoginPart'>
            <button className="w-[104px] h-[48px] text-black bg-white hover:bg-black hover:text-white transition duration-300 rounded-md">
              Login
            </button>
          </Link> 
          
          <Link to='/signup'> <button className="w-[104px] h-[48px] text-black bg-white hover:bg-black hover:text-white transition duration-300 rounded-md ml-4">
              Sign Up
            </button></Link> 
        
        </div>
      </nav>
    </div>
  );
};

export default Header;