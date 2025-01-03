import React from 'react'
import { assets } from '../assets/assets'

export default function Footer(props) {
    

    return (
        <>
            <div className='md:mx-10'>
                <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                    <div>
                        <img className='mb-5 w-40' src={assets.logo} alt="" />
                        <p className='w-full md:w-2/3 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit harum porro quisquam corporis in doloremque, ipsa dolor debitis incidunt ut!</p>

                    </div>

                    <div>
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>+434-542-53532</li>
                            <li>project@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <hr />
                    <p className='py-5 text-sm text-center'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
                </div>
            </div>
        </>
    )
}
