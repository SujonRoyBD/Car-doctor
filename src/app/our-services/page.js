import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const OurServices = () => {
  const data = [
    { id: 1, img: "/aseats/our-service.png", title: "Electrical System 1", price: "$20.00" },
    { id: 2, img: "/aseats/our-service2.png", title: "Electrical System 2", price: "$30.00" },
    { id: 3, img: "/aseats/our-service3.png", title: "Electrical System 3", price: "$40.00" },
    { id: 4, img: "/aseats/our-service4.png", title: "Electrical System 4", price: "$50.00" },
    { id: 5, img: "/aseats/our-service5.png", title: "Electrical System 5", price: "$60.00" },
    { id: 6, img: "/aseats/our-service6.png", title: "Electrical System 6", price: "$70.00" },
  ];
  return (
    <div className='px-4 md:px-[100px]'>
      <div>
        <p className='text-orange-600 text-center mt-[40px]'>Service</p>
        <h2 className='text-3xl font-bold text-center'>Our Service Area</h2>
        <p className='text-center'>
          The majority have  suffered alteration how some form, by injected humour, or randomised
          <br />
          words which don`t look Evens slightly believable.
        </p>
      </div>
      <div className='mt-12  gap-9 grid grid-cols-1 md:grid-cols-3'>
        {data.map((item) => (
          <div key={item.id} className='gap-9 py-[10px] px-1 md:px-[20px] border-2 rounded-md'>
            <Image src={item.img} alt={item.title} height={208} width={314} />
            <p className='mt-3'>{item.title}</p>
            <div className='flex justify-between items-center'>
              <p className='text-orange-600'>{item.price}</p>
              <Link href={`/our-services/${item.id}`}>
                <button className='bg-orange-500 rounded-md px-3 py-2'>
                  <FaArrowRight className=' text-white' />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center text-center'>
        <button className='bg-orange-600 py-1 px-2 text-white flex justify-center items-center text-center mt-4'>
          More Services
        </button>
      </div>
    </div>
  );
};

export default OurServices;
