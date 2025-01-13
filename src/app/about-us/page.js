import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='pt-[70px] '>
            <div className='grid grid-cols-1 md:grid-cols-2 px-12 md:px-[100px]  gap-16'>
                <div>
                    <Image src="/aseats/about-us1.png" alt='bb' height={473} width={460} />
                </div>
                <div>
                    <p className='text-orange-600'>About Us</p>
                    <h2 className='font-bold text-4xl'>We are qualified <br /> & of experience <br /> in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br />form, by injected humour, or randomised words which dont <br />look even slightly believable. </p>
                    <p className='py-[20px]'>the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which <br /> dont look even slightly believable. </p>
                    <button className='bg-orange-600 px-2 py-1 text-white'>Get More Info</button>
                </div>
            </div>
            <div className='w-full md:w-[670px] ml-0 mt-0 md:ml-[300px] md:-mt-[200px]'>
                <Image src="/aseats/about-us2.png" alt='about' height={300} width={300} />
            </div>

        </div>
    );
};

export default About;