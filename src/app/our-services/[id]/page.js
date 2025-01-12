import UnicCar from '@/app/unic-car/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const data = [
    { id: 1, img: "/aseats/our-service.png", title: "Electrical System 1", price: "$20.00" },
    { id: 2, img: "/aseats/our-service2.png", title: "Electrical System 2", price: "$30.00" },
    { id: 3, img: "/aseats/our-service3.png", title: "Electrical System 3", price: "$40.00" },
    { id: 4, img: "/aseats/our-service4.png", title: "Electrical System 4", price: "$50.00" },
    { id: 5, img: "/aseats/our-service5.png", title: "Electrical System 5", price: "$60.00" },
    { id: 6, img: "/aseats/our-service6.png", title: "Electrical System 6", price: "$70.00" },
];

const page = ({ params }) => {
    const id = params.id;
    const filterData = data?.filter((info) => info?.id === parseInt(id))
    // console.log(filterData)
    return (
        <div>
            <div className="h-[150px] w-full bg-cover bg-center text-white   "
                style={{ backgroundImage: `url('/aseats/bg.png')` }}>

                <div className='h-full flex justify-center items-center'>
                    <div className='bg-orange-500 px-3 mx-auto text-center mt-9 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl '>
                        <Link href="/">/Home/</Link>
                        <Link href="/our-services">/Services Details/</Link>
                    </div>
                    
                </div>
            </div>

        
            <div className='mt-9 px-4 md:px-[100px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                


               <div className='w-[700px]'>
               {
                    filterData?.map((data, index) => {
                        return <div key={index}>
                            <Image src={data?.img} alt='image' width={500} height={300} className="w-[350px] md:w-[700px] h-[400px]" />
                            <h3>{data?.title}</h3>
                            <p><strong>Price : </strong>{data?.price}</p>
                        </div>
                    })
                }
               </div>
               <div className='bg-slate-200 px-7 h-[400px] md:h-[500px] ml-0 md:ml-[150px] w-full md:w-3/4'>
                <h2 className='py-[20px]'>Services</h2>
                <div className='flex gap-[75px] bg-red-600 text-white px-4 py-2'>Full Car Repair <FaArrowRight className='mt-2'/></div>
                <div className='flex gap-[80px] bg-white text-black px-4 py-2 mt-3'>Engine Repair <FaArrowRight className='mt-2 text-red-500'/></div>
                <div className='flex gap-11 bg-white text-black px-4 py-2 mt-3'>Automatic Services <FaArrowRight className='mt-2 text-red-500'/></div>
                <div className='flex gap-12 bg-white text-black px-4 py-2 mt-3'>Engine Oil Change <FaArrowRight className='mt-2 text-red-500'/></div>
                <div className='flex gap-[73px]  bg-white text-black px-4 py-2 mt-3'>Battery Charge <FaArrowRight className='mt-2 text-red-500'/></div>
               </div>
                </div>
              
            </div>
            <UnicCar/>
        </div>
    );
};

export default page;