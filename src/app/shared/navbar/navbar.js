'use client';
import React, { useState } from 'react'
import Image from 'next/image';

import { BsBagCheck } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className='bg-white z-50 top-0 sticky'>
      <div className='flex items-center justify-between px-2 md:px-[100px]'>
        <div className=''>
          <Image src="/aseats/logo.png" alt="logo" width={100} height={60} />
          <p>Car Doctor</p>
        </div>
        <div className="hidden md:block">
          <ul className='flex gap-9 mt-5'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/our-services">About</Link>
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
        <div className="hidden md:block">
          <div className='flex gap-5 mt-3'>
            <ul>
              <BsBagCheck className='mt-3' />
            </ul>
            <ul>
              < CiSearch className='mt-3' />
            </ul>
            <ul>
              <button className='border-2 py-1 border-orange-400 text-orange-500'>Appointment</button>
            </ul>

          </div>
        </div>
        {/* small device  */}
        <div className='block md:hidden'>
          {
            isActive ? <IoMenu onClick={() => setIsActive(!isActive)} className='w-[30px] h-[30px] text-black' /> : <RxCross2 onClick={() => setIsActive(!isActive)} className='w-[30px] h-[30px] text-black' />
          }
          
        </div>

      </div>
      <div className={`${!isActive ? "w-[40%] left-0" : "w-full -left-[100%]"} bg-gray-950 text-white fixed top-14 h-[50%] z-20`}>
            {
              !isActive && (
                <ul className='flex flex-col items-center gap-9 mt-5'>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/our-services">About</Link>
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
              )
            }
          </div>
    </div>
  );
};

export default Navbar;