import Image from 'next/image';
import React from 'react';

const Clock = () => {
    return (
        <div className='bg-black text-white mt-6 grid grid-cols-1 md:grid-cols-3 h-full md:h-[120px] justify-between px-[100px]'>
            <div className='flex gap-4 mt-7'>
                <Image src="/aseats/ghori.png" alt='clock' height={20} width={30} className='h-9 ml-4 mt-3 '/>
                <div>
                   <p>We are open monday-friday</p> 
                   <h3  className='text-2xl font-bold'>7:00 am - 8:00 pm</h3>
                </div>
            </div>
            <div className='flex gap-4 mt-7'>
                <Image src="/aseats/ghori.png" alt='clock' height={20} width={30} className='h-9 ml-4 mt-3 '/>
                <div>
                   <p>We are open monday-friday</p> 
                   <h3  className='text-2xl font-bold'>7:00 am - :800 pm</h3>
                </div>
            </div>
            <div className='flex gap-4 mt-7'>
                <Image src="/aseats/ghori.png" alt='clock' height={20} width={30} className='h-9 ml-4 mt-3 '/>
                <div>
                   <p>We are open monday-friday</p> 
                   <h3  className='text-2xl font-bold'>7:00 am - 8:00 pm</h3>
                </div>
            </div>
        </div>
    );
};

export default Clock;