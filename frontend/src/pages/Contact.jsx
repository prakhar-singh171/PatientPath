import React from 'react'
import { assets } from '../assets/assets'

export default function Contact(props) {
    

    return (
        <>

        <div >
            
            <p className='text-center text-2xl pt-10 text-gray-500'>CONTACT US</p>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
            <div>
                <img className='w-full md:max-w-[360px] ' src={assets.contact_image} alt="" />
            </div>

            <div className=' flex flex-col justify-center items-start gap-6'>
                <p className='font-semibold text-lg text-gray-600 '>OUR OFFICE</p>
               {/* // <br /> */}
                <p className='text-gray-500 '>00000 Willms Station <br/> Suite 000, Washington, USA

                </p>
                <p className='text-gray-500'> Tel: (000) 000-0000 <br /> Email: prakharSingh99999@gmail.com
                </p>
              
               
                <p className='font-semibold text-lg text-gray-600'>CAREERS AT PATIENTPATH</p> <br />
                <p className='text-gray-500'>Learn more about our teams and job openings.          </p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white hover:transition-all duration-[500ms]'> Explore Jobs</button>

       
            </div>
            </div>
        </div>
            
        </>
    )
}
