import React from 'react';
import Plane from '../assets/MainPlane.jpg';
import Istanbul from '../assets/Istanbul.svg';
import Sydney from '../assets/Sydney.svg';
import Baku from '../assets/Baku.svg';
import Dubai from '../assets/Dubai.svg';
import Paris from '../assets/Paris.svg';
import NewYork from '../assets/New York.svg';
import Tokyo from '../assets/Tokyo.svg';
import London from '../assets/London.svg';
import Male from '../assets/Male.svg';
import FlightSearch from './FlightSearch'; 
import Flights from '../assets/Flights.jpg'; 
import Hotels from '../assets/Hotels.jpg';
import { IoIosSend } from "react-icons/io";

import MapComponent from "./MapComponent";
import Corusel from '../components/Corusel.jsx'
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className='h-full w-full max-w-[1600px] mx-auto'>
      <div
        className="h-[681px] bg-cover bg-center flex mt-[5px]"
        style={{ backgroundImage: `url(${Plane})` }}
      >
        <div>
          <p className='text-[50px] font-semibold mt-[100px] ml-[580px] tracking-[2px] text-white'>Helping Others</p>
          <p className='text-[90px] font-semibold text-white flex ml-[480px] tracking-[2px]'>Live & Travel</p>
          <p className='text-white ml-[590px] text-[18px] tracking-[2px] mt-[10px]'>Special offers to suit your plan</p>
        </div>
      </div>
      
      {/* Flight Search Form */}
      <div className='w-[1200px] h-auto min-h-[200px] ml-[170px] mt-[-100px] bg-white rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] hover:scale-105 transition-all duration-300 p-6'>
        <FlightSearch />
      </div>

     <div className='w-[1200px] mt-[100px] mx-auto ml-[170px]'>
      <p className='text-black text-[28px] font-medium'>Plan your perfect trip</p>
      <p className='text-gray-800 text-[17px]'>Search Flights & Places Hire to our most popular destinations</p>
      
      <div className='flex flex-wrap gap-8 mt-[40px]'>
        {/* Mavjud kartalar */}
        <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
          <img src={Istanbul} alt="Istanbul" className='w-16 h-16 mr-4' />
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Istanbul, Turkey</h3>
            <p className='text-sm text-gray-600'>Explore historic wonders</p>
          </div>
        </div>

        <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
          <img src={Sydney} alt="Sydney" className='w-16 h-16 mr-4' />
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Sydney, Australia</h3>
            <p className='text-sm text-gray-600'>Down under adventures</p>
          </div>
        </div>

        <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
          <img src={Baku} alt="Baku" className='w-16 h-16 mr-4' />
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Baku, Azerbaijan</h3>
            <p className='text-sm text-gray-600'>Caspian gem</p>
          </div>
        </div>

        <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
          <img src={Dubai} alt="Dubai" className='w-16 h-16 mr-4' />
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Dubai, UAE</h3>
            <p className='text-sm text-gray-600'>Beautiful sights</p>
          </div>
        </div>

        {/* Yangi qo'shilgan kartalar */}
        <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
          <img src={Paris} alt="Paris" className='w-16 h-16 mr-4' />
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Paris, France</h3>
            <p className='text-sm text-gray-600'>City of lights and love</p>
          </div>
        </div>

        <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
          <img src={NewYork} alt="New York" className='w-16 h-16 mr-4' />
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>New York, USA</h3>
            <p className='text-sm text-gray-600'>The Big Apple vibes</p>
          </div>
        </div>

        <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
          <img src={Tokyo} alt="Tokyo" className='w-16 h-16 mr-4' />
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Tokyo, Japan</h3>
            <p className='text-sm text-gray-600'>Neon lights and culture</p>
          </div>
        </div>
        <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
             <img src={London} alt="London" className='w-16 h-16 mr-4' />
             <div>
               <h3 className='text-lg font-semibold text-gray-800'>London, UK</h3>
               <p className='text-sm text-gray-600'>Historic landmarks and tea</p>
            </div>
           </div>
             <div className='w-[360px] h-[122px] rounded-xl shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)] flex items-center p-4 bg-white hover:shadow-lg transition-shadow hover:scale-105 duration-300'>
           <img src={Male} alt="Malé" className='w-16 h-16 mr-4' />
           <div>
        <h3 className='text-lg font-semibold text-gray-800'>Malé, Maldives</h3>
            <p className='text-sm text-gray-600'>Tropical paradise islands</p>
           </div>
           </div>
      </div>
    </div>
      <div className='flex gap-5 mt-[100px] justify-center  '>
       <div
           className="rounded-2xl w-[584px] h-[417px] bg-cover bg-center"
          style={{ backgroundImage: `url(${Flights})` }}
    >
        <p className="text-white text-center py-4 font-semibold text-[50px] mt-[180px]">Flights</p> 
        <p className='text-center text-white flex justify-center text-[19px] mb-[10px]'>Search Flights & Places Hire to our most popular <br /> destinations</p>
       <Link to='/FlightAbu'><button className='w-[144px] h-[48px]  rounded-[5px] flex items-center justify-center ml-[219px] bg-cyan-200 hover:scale-105 transition-all duration-300  hover:shadow-[0_0_10px_#67e8f9,0_0_30px_#67e8f9,0_0_60px_#67e8f9,0_0_250px_#67e8f9]'> 
          <IoIosSend className='mr-2' />   Show Filghts</button></Link> 
       </div>
        
     
      <div
           className="rounded-2xl w-[584px] h-[417px] bg-cover bg-center"
          style={{ backgroundImage: `url(${Hotels})` }}
    >
        <p className="text-white text-center py-4 font-semibold text-[50px] mt-[180px]">Hotels</p> 
        <p className='text-center text-white flex justify-center text-[19px] mb-[10px]'>Search hotels & Places Hire to our most popular <br /> destinations</p>
     <Link to="/Page">  <button className='w-[144px] h-[48px] rounded-[5px] flex items-center justify-center ml-[219px] bg-cyan-200 hover:scale-105 transition-all duration-300  hover:shadow-[0_0_10px_#67e8f9,0_0_30px_#67e8f9,0_0_60px_#67e8f9,0_0_250px_#67e8f9]'>
          <IoIosSend className='mr-2' /> 
            Show Hotels
         </button></Link>
       </div>
       </div>
       <div className='mt-[100px]'>
      
      <MapComponent />
    </div>
    <div className='mt-[100px]  ml-[160px]'>
        <p className='text-[30px] font-bold'>Reviews</p>
        <p className='text-[19px] mt-[10px]'>What people says about Golobe facilities</p>

       </div>
    <div className='mt-[-50px]'>
    <Corusel />
    </div>


       
      </div>
   
    
  );
};

export default MainPage;