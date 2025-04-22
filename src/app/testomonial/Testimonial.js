import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    const data=[
        {
            id:1,
            img:"/aseats/awld1.png",
            title:"Awlad Hossain",
            buesness:"Businessman",
            imge:"/aseats/coma.png",
            desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        },
        {
            id:2,
            img:"/aseats/awld2.png",
            title:"Awlad Hossain",
            buesness:"Businessman",
            imge:"/aseats/coma.png",
            desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
    ]
    return (
        <div className=''>
             <div>
        <p className='text-orange-600 text-center mt-[40px]'>Testimonial </p>
        <h2 className='text-3xl font-bold text-center'>What Customer Says</h2>
        <p className='text-center'>
        the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which dont look even slightly believable. 
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-16 mt-8'>
      {
        data.map((index)=>{
            return <div key={index.id} className='group border rounded-lg bg-white  p-3 gap-7'>
               <div className='flex gap-12'>
               <div className='flex gap-4'>
                    <Image src={index.img} alt='aled' height={2} width={30}/>
                    <div>
                    <p className='text-xl'>{index.title}</p>
                    <h3>{index.buesness}</h3>
                    </div>
                </div>
                <Image src={index.imge} alt='coma' height={3} width={30}/>
               </div>
               <p>{index.desc}</p>
               <div className='flex text-yellow-400'>
               <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
               </div>
            </div>
        })
      }
      </div>
    
        </div>
    );
};

export default Testimonial;