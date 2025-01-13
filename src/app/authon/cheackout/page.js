'use client';
import Link from 'next/link';
import React from 'react';
import { useForm, } from "react-hook-form"
import Swal from "sweetalert2";

  
const Cheackout = () => {
    const handleClick = () => {
        Swal.fire({
          title: "Success!",
          text: "Your action was successful!",
          icon: "success",
          draggable: true,
        });
      };
    const {
        register,
        handleSubmit,
            formState: { errors } }= useForm()
        
      const onSubmit = (data) => console.log(data)
      
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
            <div className='bg-gray-300 w-[300px] md:w-[600px] h-[400px] md:h-[300px] flex justify-center items-center mx-auto mt-9'>
            <form className="w-3/3 rounded-lg " onSubmit={handleSubmit(onSubmit)}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 '>
              <div> 
                    <input className="border-2 rounded-lg py-1 px-3 w-full" placeholder="first name..." {...register("name", { required: true })} />
                    {errors?.name && <span>This field is required</span>}
                </div>
                <div>
                    <input className="border-2 rounded-lg py-1 px-3 w-full" placeholder="last name..." {...register("email", { required: true })} />
                    {errors?.email && <span>This field is required</span>}
                </div>
              </div>
               
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-9'>
                
              <div> 
                    <input className="border-2 rounded-lg py-1 px-3 w-full" placeholder="phone..." {...register("name", { required: true })} />
                    {errors?.name && <span>This field is required</span>}
                </div>
                <div>
                    <input className="border-2 rounded-lg py-1 px-3 w-full" placeholder="email..." {...register("email", { required: true })} />
                    {errors?.email && <span>This field is required</span>}
                </div>
              
                </div>
                <div>
                    <textarea className="border-2 rounded-lg py-1 px-3 w-full mt-9" placeholder="Service Type..." {...register("email", { required: true })} />
                    {errors?.email && <span>This field is required</span>}
                </div>

                <Link href="/authon/SignIn">
                <div className="flex justify-center items-center mt-2">
                    <input className=" rounded-lg py-2 px-6 bg-orange-500 text-white text-lg font-bold" type="submit" onClick={handleClick}/>
                </div>
                </Link>
            </form>
            </div>

        </div>
    );
};

export default Cheackout;