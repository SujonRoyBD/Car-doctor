
import React from 'react';
import './banner.css'
import { MdArrowBack } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";

const Banner = () => {
    return (
        <div className='rg text-white'>
            <p className='text-5xl text-white font-bold ml-12 md:ml-[100px] pt-[99px]'>
            Affordable <br/> Price For <br/> Servicing
            </p>
            <p className='text-white ml-12 md:ml-[100px]'>There are many variations of passages of  available, but <br/> the majority have suffered alteration in some form</p>
            <div className='gap-9 flex px-12 md:px-[100px] py-[30px]'>
               <button className='bg-orange-600 px-2 py-1'>Discover More</button>
               <button className='border-2 border-white px-2 py-1'>Latest Project</button>
            </div>
            {/* <div className='flex'>
              <div className=''> <HiArrowSmRight className='rounded-full bg-orange-600 px-6 py-6 text-black'/></div>
              <div className='text-end h-12'> <MdArrowBack className='rounded-full bg-orange-600 w-12 h-12'/></div> 
                
            </div> */}
        </div>
    );
};

export default Banner;   