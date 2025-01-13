'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm, } from "react-hook-form"
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

  
const Login = () => {
    const {
        register,
        handleSubmit,
            formState: { errors } }= useForm()
        
      const onSubmit = (data) => console.log(data)
      
    return (
        <div className='px-2 md:px-[0px] h-full'>
            <div className="h-[150px] w-full bg-cover bg-center text-white   "
                style={{ backgroundImage: `url('/aseats/bg.png')` }}>

                <div className='h-full flex justify-center items-center'>
                    <div className='bg-orange-500 px-3 mx-auto text-center mt-9 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl '>
                        <Link href="/">/Home/</Link>
                        <Link href="/our-services">/Services Details/</Link>
                    </div>

                </div>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-10 md:px-12 md:h-[600px] '>
           <div className=' md:col-span-2 mt-9'>
                <Image src="/aseats/phonelog.png" alt='oo' height={100} width={300} className='w-full h-[400px]'/>
            </div>
            <div className='md:col-span-2 w-full mt-[130px] md:h-[400px] flex justify-center items-center mx-auto '>
            <form className="w-full h-[600px] p-1 rounded-lg shadow-lg bg-white border" onSubmit={handleSubmit(onSubmit)}>
                <p className='text-center font-bold text-2xl'>Login</p>
             
                <div>
                    <label className="text-base font-bold text-black w-full mt-3">Email</label> <br />
                    <input className="border-2 rounded-lg mt-2 py-1 px-3  w-full" placeholder="Enter your email..." {...register("email", { required: true })} />
                    {errors?.email && <span>This field is required</span>}
                </div>
                <div>
                    <label className="text-base font-bold text-black w-full  mt-3"> Confirm password</label> <br />
                    <input type='password' className="border-2  rounded-lg py-1 px-3 w-full" placeholder="Enter your password..." {...register("password", { required: true })} />
                    {errors?.password && <span>This field is required</span>}
                </div>
               <Link href="/authon/cheackout"> <div className=" justify-center items-center mt-2">
                    <button className="w-full rounded-lg py-2 px-6 bg-orange-500 text-white text-lg font-bold mt-7" type="submit">Sing in</button> 
                </div></Link>
                <p className="text-center mt-5">or sign up with</p>
                <div className="flex justify-center items-center gap-6 mt-4">
                    <div className='h-[50px] w-[50px] bg-gray-200 rounded-full'>
                        <BiLogoFacebook className='flex justify-center items-center mx-auto h-full text-blue-600'/>
                    </div>
                    <div className='h-[50px] w-[50px] bg-gray-200 rounded-full'>
                        <FaLinkedinIn  className='flex justify-center items-center mx-auto h-full text-blue-600'/>
                    </div>
                    <div className='h-[50px] w-[50px] bg-gray-200 rounded-full'>
                        <FaGoogle className='flex justify-center items-center mx-auto h-full  text-orange-400 '/>
                    </div>
                </div>
                <p className="mt-9 text-center">Already have an acount? <Link href="/authon/SignIn"><span className='text-red-500'>Sign in</span></Link> </p>
            </form>
            </div>
           </div>

        </div>
    );
};

export default Login;