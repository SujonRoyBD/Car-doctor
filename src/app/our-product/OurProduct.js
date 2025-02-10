import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa";


const OurProduct = () => {
 
  const data = [
    {
      id: 1,
      img: "/aseats/our-product1.png",
      icon: "/icons/icon1.png",
      title: "Item One",
      price: 22.99,
      borderColor: "border-red-500"
    },
    {
      id: 2,
      img: "/aseats/our-product2.png",
      icon: "/icons/icon2.png",
      title: "Item Two",
      price: 36.99,
      borderColor: "border-blue-500"
    },
    {
      id: 3,
      img: "/aseats/our-product3.png",
      icon: "/icons/icon3.png",
      title: "Item Three",
      price: 45.99,
      borderColor: "border-green-500"
    },
    {
      id: 4,
      img: "/aseats/our-product4.png",
      icon: "/icons/icon1.png",
      title: "Item Four",
      price: 24.99,
      borderColor: "border-yellow-500"
    },
    {
      id: 5,
      img: "/aseats/our-product1.png",
      icon: "/icons/icon2.png",
      title: "Item Five",
      price: 35.99,
      borderColor: "border-purple-500"
    },
    {
      id: 6,
      img: "/aseats/our-product6.png",
      icon: "/icons/icon3.png",
      title: "Item Six",
      price: 55.99,
      borderColor: "border-pink-500"
    },
    {
      id: 7,
      img: "/aseats/our-product1.png",
      icon: "/icons/icon2.png",
      title: "Item Five",
      price: 36.99,
      borderColor: "border-purple-500"
    },
    {
      id: 8,
      img: "/aseats/our-product6.png",
      icon: "/icons/icon3.png",
      title: "Item Six",
      price: 45.99,
      borderColor: "border-pink-500"
    },
  ];

  return (
    <div>
      <div>
        <p className='text-orange-600 text-center mt-[40px]'>Popular Products</p>
        <h2 className='text-3xl font-bold text-center'>Browse Our Products</h2>
        <p className='text-center'>
          the majority have suffered alteration in somes form, by injected humour, or randomised words which
          <br />
          dont look eves slightly believabl.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5'>
        {
          data?.map((info, index)=>{
            return <div key={index} className='border rounded-lg shadow-lg p-3'>
              <div className='bg-gray-200 w-[250px] h-[200px] mx-auto justify-items-center py-7'>
                <Image src={info?.img} alt='image' width={150} height={200}/>
              </div>
              <div className='mt-2 text-center text-black'>
                <div className='flex justify-center items-center'>
                  <FaStar className='w-[22px] h-[22px] text-yellow-400'/>
                  <FaStar className='w-[22px] h-[22px] text-yellow-400'/>
                  <FaStar className='w-[22px] h-[22px] text-yellow-400'/>
                  <FaStar className='w-[22px] h-[22px] text-yellow-400'/>
                  <FaStar className='w-[22px] h-[22px] text-yellow-400'/>
                </div>
                <h5 className='text-xl font-bold'>{info?.title}</h5>
                <p className='text-xl font-bold '>${info?.price}</p>
              </div>
             
            </div>
          })
        }
      </div>
    </div>
  );
};


export default OurProduct;