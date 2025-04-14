import Image from 'next/image';
import React from 'react';
import { IoLogoGoogle } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-9 py-9 gap-9 bg-black text-white justify-between px-[100px]'>
                <div>
                    <Image src="/aseats/logo.png" alt='logo' height={40} width={40}/>
                    <h3>Car Doctor</h3>
                    <p className='mt-4'>Edwin Diaz is a software and web technologies engineer, life coach  trainer who is also a serial </p>
                    <div className='flex gap-4'>
                    < IoLogoGoogle className='bg-orange-600 rounded-full h-[40px] w-[40px] text-white'/>
                    < CiTwitter className='bg-orange-600 rounded-full h-[40px] w-[40px] text-white'/>
                    <CiInstagram className='bg-orange-600 rounded-full h-[40px] w-[40px] text-white'/>
                    < CiLinkedin className='bg-orange-600 rounded-full h-[40px] w-[40px] text-white'/>
                    </div>
                </div>
                <div>
                    <div className='mt-9'>
                    
                    <Link href="/"><h2>About</h2></Link>
                    <h2>Home</h2>
                    <h2>Services</h2>
                    <h2>Contact</h2>
                    </div>
                </div>
                <div>
                    <h2>Company</h2>
                    <div className='mt-9'>
                    <h2>Why Car Doctort</h2>
                    <h2>About</h2>
                    
                    </div>
                </div>
                <div>
                    <h2>Support</h2>
                    <div className='mt-9'>
                    <h2>Support Center</h2>
                    <h2>Feedback</h2>
                    <h2>Accesbility</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}; 
 
export default Footer;