import Image from 'next/image';
import React from 'react';
import { BsBagCheck } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className=' bg-white z-50 top-0 sticky'>
      <div className='grid grid-cols-3 md:grid-cols-3 justify-items-center px-2 md:px-[100px]  '>
        <div className=''>
          <Image src="/aseats/logo.png" alt="logo" width={100} height={60} />
          <p>Car Doctor</p>
        </div>
        <div>
          <ul className='flex gap-9 mt-5'> 
            <li>
              Home
            </li>
            <li>
            About
            </li>
            <li>
              Services
            </li>
            <li>
              Blogs
            </li>
            <li>
              Contacts
            </li>
          
          </ul>
        </div>
        <div className='flex gap-5 mt-3'>
          <ul>
           <BsBagCheck className='mt-3'/>
          </ul>
          <ul>
           < CiSearch className='mt-3'/>
          </ul>
          <ul>
          <button className='border-2 py-1 border-orange-400 text-orange-500'>Appointment</button>
          </ul>
         
        </div>
       
      </div>
    </div>
  );
};
 
export default Navbar;