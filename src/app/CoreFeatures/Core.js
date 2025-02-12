import Image from 'next/image';
import React from 'react';

const Core = () => {
    const data=[
        {   
            id:1,
            img:"/aseats/chose-us1.png",
            title:"Expert Team"
        },
        {   
            id:2,
            img:"/aseats/chose-us2.png",
            title:"Expert Team"
        },
        {   
            id:3,
            img:"/aseats/chose-us3.png",
            title:"Expert Team"
        },
        {   
            id:4,
            img:"/aseats/chose-us4.png",
            title:"Expert Team"
        },
        {   
            id:5,
            img:"/aseats/chose-us5.png",
            title:"Expert Team"
        },
        {   
            id:6,
            img:"/aseats/chose-us6.png",
            title:"Expert Team"
        },
    ];
    return (
        <div>
             <div>
        <p className='text-orange-600 text-center mt-[40px]'>Core Features</p>
        <h2 className='text-3xl font-bold text-center'>Why Choose Us</h2>
        <p className='text-center'>
        the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which dont looks even slightly believable. 
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {
            data.map((index)=>{
                return <div key={index?.id} className='group border rounded-lg bg-white hover:bg-orange-500 hover:cursor-pointer p-3'>
                    <Image src={index?.img} alt='chose' height={53} width={42} className='w-[60px] h-[60px] mx-auto '/>
                    <p className='group-hover:text-white text-center'>{index?.title}</p>
                </div>
            })
        }
      </div>
        </div>
    );
};

export default Core;