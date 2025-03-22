import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const OurTeam = () => {
  const data = [
    {
      id: 1,
      img: "/aseats/our-team2.png",
      icon: "/icons/icon1.png",
      title: "Item Car Engine Plug",
      price: "Engine plug",
      borderColor: "border-red-500"
    },
    {
      id: 2,
      img:  "/aseats/our-team1.png",
      icon: "/icons/icon2.png",
      title: "Car Engine Plug",
      price: "Engine Expert",
      borderColor: "border-blue-500"
    },
    {
      id: 3,
      img:  "/aseats/our-team3.png",
      icon: "/icons/icon3.png",
      title: "Item TCar Engine Plug",
      price:"Engine Expert",
      borderColor: "border-green-500"
    }
   
  ];

  return (
    <div>
      <div>
        <p className='text-orange-600 text-center mt-[40px]'>Popular Products</p>
        <h2 className='text-3xl font-bold text-center'>Browse Our Products</h2>
        <p className='text-center'>
          the majority have sufere alteration in some form, by injected humour, or randomised words which
          <br />
          dont looks evens slightly believable.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-8 ml-9'>
        {
         data.map((index)=>{
            return <div key={index?.id} className=' border-2 p-2 gap-5 w-full md:w-[300px] ml-[0px] md:ml-[130px]'>
               <div className='w-full md:w-[430px]'>
               <Image src={index?.img} alt='fdf' height={100} width={10000} className='h-[300px] w-full md:w-[280px]'/>
               </div>
               <div>
               <h5 className='text-xl font-bold text-center'>{index?.title}</h5>
               <p className=' text-center'>${index?.price}</p>
               </div>
               <div className='flex gap-6 text-center ml-16 justify-items-center'>
                <FaFacebookF className='rounded-lg bg-gray-200 h-7 w-7 text-center justify-items-center'/>
                <FaTwitter  className='rounded-lg bg-gray-200 h-7 w-7 text-center justify-items-center'/>
                <CiInstagram  className='rounded-lg bg-gray-200 h-7 w-7 text-center justify-items-center'/>
               </div>
            </div>
         })
        }
      </div> 
    </div> 
  );
};


export default OurTeam; 