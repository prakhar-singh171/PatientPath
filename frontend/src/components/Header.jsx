import React from 'react'
import { assets } from '../assets/assets'
export default function Header(props) {
    

    return (
       <div className='flex flex-col md:flex-col bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
            <p className='text-3xl md:text-4xl lg:txt-5xl text-white font-semibold md:leading-tight lg:leading-tight'>Book Appointment</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/>
                schedule your appointment hassle-free.</p>
            </div>

            <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-105 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >Book appointment <img src={assets.arrow_icon} alt="" /></a>
        </div>

        <div className='md:w-1/2 relative'>
            <img src={assets.header_img} alt="" />
        </div>
        <div></div>
       </div>
    )
}
