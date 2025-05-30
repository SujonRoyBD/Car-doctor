import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import Simple from '../simpleStep/page';

const UnicCar = () => {
    const data = [
        {
            title: "Instant Car Services",
            desc: "It uses a dictionary of over 200 Cords words, combined with a model sentence structures."
        },
        {
            title: "Instant Car Service",
            desc: "It uses a dictionary over 400 Latin words, combined with a model sentence structures."
        },
        {
            title: "Instant Car Services",
            desc: "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        },
        {
            title: "Instant Car Services",
            desc: "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        },
    ]
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-5  gap-[16px] ml-0 md:ml-[100px]'>
                <div className='md:col-span-3 px-3'>
                    <h2 className='text-2xl font-bold mt-7 '>Unique Car Engine Service</h2>
                    <p className='w-full'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 w-full  gap-8'>
                        {
                            data.map((index) => {
                                return <div key={index.id} className='bg-gray-200 px-5 py-5 rounded-lg'>
                                    <h3>{index.title}</h3>
                                    <h3>{index.desc}</h3>
                                </div>
                            })
                        }

                    </div>
                    <p className='w-full px- '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. </p>
                </div>

                <div className='bg-black text-white h-[250px]  md:w-[380px] mt-9 px-6 '>
                    <div >
                        <h3 className='text-2xl px-12'>Download</h3>
                        <div className='flex justify-between px-9 mt-6'>
                        <div className='flex gap-5 px-3 h-9'>
                            <Image src="/aseats/pdf.png"alt='pdf'height={10} width={20}/>
                            <div>
                                <p>Our Brochure</p>
                               
                            </div>
                        </div>
                        <div className='bg-red-500 p-4 ml-[70px]'>
                        <FaArrowRight />
                        </div>
                        </div>
                        <div className='flex justify-between px-9 mt-3'>
                        <div className='flex gap-5 px-3 h-9'>
                            <Image src="/aseats/pdf.png"alt='pdf'height={10} width={20}/>
                            <div>
                                <p> cmp Details </p>
                                <p className='text-gray-400'>Download</p>
                            </div>
                        </div>
                        <div className='bg-red-500 p-4 ml-[70px]'>
                        <FaArrowRight />
                        </div>
                        </div>
                    </div>
                    {/* <div className='bg-black text-white h-[360px]  md:w-[380px]  mt-[100px] px-6 -ml-5'>
                       <div className='text-center'>
                       <Image src="/aseats/logo.png" alt='logo' height={30} width={100} className='flex justify-center items-center mx-auto '/>
                       <p className='text-2xl font-bold mt-3'>Car Doctor</p>
                       <h2>Need Help? We Are Here <br></br>
                       To Help You</h2>
                       </div>
                       <div className='bg-white ml-[40px] h-[140px] w-[270px] rounded-lg text-black'>
                        <p className='text-red-500 text-2xl font-bold py-4 px-3 text-center'>Car Doctor <span className='text-black'>Special</span></p>
                        <p className=' text-center font-bold'>Save up to <span className='text-red-500 '>60% off</span></p>
                        
                       </div>
                       <button className='bg-red-500 -mt-[20px] p-2 rounded-lg flex justify-center items-center mx-auto text-center'>Get A Quote</button>
                    </div> */}
                   
                </div>
                
                
            </div> 
            <div>
                 <div className='bg-black text-white h-[360px]  md:w-[380px]  px-6 mt-8 md:-mt-[250px] justify-end ml-0 md:ml-[807px] '>
                       <div className='text-center'>
                       <Image src="/aseats/logo.png" alt='logo' height={30} width={100} className='flex justify-center items-center mx-auto '/>
                       <p className='text-2xl font-bold mt-3'>Car Doctor</p>
                       <h2>Need Help? We Are Here <br></br>
                       To Help You</h2>
                       </div>
                       <div className='bg-white ml-[40px] h-[140px] w-[270px] rounded-lg text-black'>
                        <p className='text-red-500 text-2xl font-bold py-4 px-3 text-center'>Car Doctor <span className='text-black'>Special</span></p>
                        <p className=' text-center font-bold'>Save up to <span className='text-red-500 '>60% off</span></p>
                        
                       </div>
                       <button className='bg-red-500 -mt-[20px] p-2 rounded-lg flex justify-center items-center mx-auto text-center'>Get A Quote</button>
                    </div> 
                   
            </div>
           <div className='mt-9'> <Simple/>
           </div>
        </div>
    );
};

export default UnicCar;