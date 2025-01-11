import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const OurServices = () => {
    const data =[
        {
            id:1,
          img:"/aseats/our-service.png",
          title:"Electrical System",
          price:"Price : $20.00"

        },
        {
            id:2,
          img:"/aseats/our-service2.png",
          title:"Electrical System",
          price:"Price : $20.00"

        },
        {
            id:3,
          img:"/aseats/our-service3.png",
          title:"Electrical System",
          price:"Price : $20.00"

        },
        {
            id:4,
          img:"/aseats/our-service4.png",
          title:"Electrical System",
          price:"Price : $20.00"

        },
        {
            id:5,
          img:"/aseats/our-service5.png",
          title:"Electrical System",
          price:"Price : $20.00"

        },
        {
            id:6,
          img:"/aseats/our-service6.png",
          title:"Electrical System",
          price:"Price : $20.00"

        },
        
    ]
    return (
       <div className='px-[100px]'>
         <div>
            <p className='text-orange-600 text-center mt-[40px]'>Service</p>
            <h2 className='text-3xl font-bold text-center'>Our Service Area</h2>
            <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which dont look even slightly believable. </p>
        </div>
        
           <div className=' mt-12 gap-9  grid grid-cols-1 md:grid-cols-3 '>
           {
             data.map((data)=>{
                return <div key={data.id} className='gap-9 py-[10px] px-[20px] border-2 rounded-md'>
                    <Image src={data.img} alt='data' height={208} width={314} className=''/>
                    <p className='mt-3'>{data.title}</p>
                    <div className='flex justify-between'>
                    <p className='text-orange-600'>{data.price}</p>
                    <FaArrowRight className='mt-1 text-orange-600'/>
                    </div>
                    
                </div>
            })
        }
           </div>
         <div className=' flex justify-center items-center text-center'>
         <button className='bg-orange-600  py-1 px-2 text-white flex jsutify-center items-center text-center  mt-4'>More Services</button>
         </div>
        
       </div>
    );
};

export default OurServices; 