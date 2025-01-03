import React from 'react'
import { assets } from '../assets/assets'

export default function Banner(props) {
    

    return (
        <>
            
            <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
              <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>

              <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100++ Trusted Doctors</p>

                </div>
                <button>Create Account</button>
                </div>  

                
         

            <div className='hidden  md:block md:w-1/2 lg:w-[-370px] relative'>
                <img className='w-full bottom-0 h-[90%] absolute  right-0 mx-w-md' src={assets.appointment_img} alt="" />
            </div>
            </div>
        </>
    )
}
