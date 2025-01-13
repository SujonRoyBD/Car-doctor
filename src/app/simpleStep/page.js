import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Simple = () => {
   
    const data = [
        {
            id: 1,
            img: "/aseats/red.png",
            title: "Step One",
            desc: "It uses a dictionary.",
            data: "of over 200"
        },
        {
            id: 2,
            img: "/aseats/red.png",
            title: "Step One",
            desc: "It uses a dictionary .",
            data: "of over 200"
        },
        {
            id: 3,
            img: "/aseats/red.png",
            title: "Step One",
            desc: "It uses a dictionary  .",
            data: "of over 200"
        }
    ]
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 px-3'>
                <div className='ml-0 md:ml-[100px] w-[360px] md:w-[670px]'>
                    <h3 className='text-2xl font-bold '>3 Simple Steps to Process</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s   ome form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text</p>
                </div>
                <div className=' ml-0 md:ml-[180px]'><h2 className='text-2xl font-bold'>Price $250.00</h2>
                    <Link href="/authon/cheackout"><button className='bg-red-500 text-center p-2 rounded-lg w-[370px] '>Process Checkout</button></Link>
                </div>
            </div>
            <div className='w-[300px] md:w-3/6 grid grid-cols-1 md:grid-cols-3 justify-between items-center ml-9 md:ml-[110px]  mt-6  gap-6'>
                {
                    data.map((index) => {
                        return <div key={index.id} className='border-2 px-5 rounded-lg'>
                            {/* <Image src={index.img} alt='data' height={30} width={30}/> */}
                            {/* <div className='w-[60px] h-[60px] bg-red-200 rounded-full relative'>
                                <div className='w-[50px] h-[50px] text-white bg-red-500 rounded-full text-xl font-bold flex justify-center items-center mx-auto absolute mt-1 ml-1'>
                                    {index.id}
                                </div>
                            </div> */}
                            <div className="bg-orange-200 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                                <div className='text-white bg-orange-500 w-[50px] h-[50px] rounded-full text-2xl font-bold flex justify-center items-center'>
                                    {index.id}
                                </div>
                            </div>
                            <p className='font-bold'>{index.title}</p>
                            <p>{index.desc}</p>
                            <p>{index.data}</p>
                         
                        </div>
                    })
                }
                
            </div>
            <div className='px-3 md:px-[100px] mt-9 w-full'>
                <Image src="/aseats/car.png" alt='car' height={400} width={650} className='h-[400px] w-full md:w-[650px]' />
            </div>
            
           
        </div>
    );
};

export default Simple;