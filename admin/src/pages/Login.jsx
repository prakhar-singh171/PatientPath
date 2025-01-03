// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import {AdminContext} from '../context/AdminContext.jsx'
// export default function Login(props) {
//     const [state,setState]=useState('Admin')

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const {setAToken,backendUrl}=useContext(AdminContext)


//     const onSubmitHandler=async(e)=>{
//         e.preventDefault()
//         try{
//             if(state==='Admin'){
//                 const {data}=await axios.post(backendUrl+'/api/admin/login',{
//                     email,password
//                 })
//                 if(data.success) console.log(data)
//             }
//             else{

//             }
//         }
//         catch{

//         }
//     }
//     return (
//        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'
//        >
//         <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E6
//         EEE] text-sm shadow-lg'>
//             <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span></p>


//             <div className='w-full'>
//                 <p>Email</p>
//                 <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full pt-2 mt-1' type="email" required />
//             </div>
//             <div className='w-full'>
//                 <p>Password</p>
//                 <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full pt-2 mt-1' type="password" />
//             </div>

//             <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>

//             {
//                 state==='Admin'?
//                 <p>Doctor Login <span className='text-primary underline cursor-pointer' onClick={()=>setState('Doctor')}>Click here</span></p>:
//                 <p>Admin Login <span className='text-primary underline cursor-pointer' onClick={()=>setState('Admin')}>Click here</span></p>
//             }
//         </div>
//        </form>
//     )
// }




import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import {AdminContextProvider, AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
export default function Login(props) {
    
    const [state,setState]=useState('Admin')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const lll=useContext(AdminContext);
    console.log('ffdf');
    console.log(lll)

    const {setAToken,backendUrl}=useContext(AdminContext)

    const onSubmitHandler=async(event)=>{
        event.preventDefault()
        try{
            if(state==='Admin'){
                const {data}=await axios.post(backendUrl+'/api/admin/login',{email,password})
                console.log(data)
                if(data.status==='success'){
                    console.log(data.token)
                    setAToken(data.token)
                    localStorage.setItem('aToken',data.token)
                }
                else{
                    toast.error(data.message)
                }
            }
            else{

            }
        }
        catch{

        }
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className='min-h-[800px] flex items-center'
           
            >    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg text-[#5E5E5E]'>
                 <p className='text-2xl font-semibold m-auto'> <span className='text-primary'>{state}</span></p>
                <div className='w-full'>
                    <p className='w-full'>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border boder-[#DADADA] rounded w-full p-2 mt-1' type="email"  required/>
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border boder-[#DADADA] rounded w-full p-2 mt-1' type="password" required/>
                </div>
                <button className='bg-primary text-white w-full oy-2 rounded-md text-base'>Login</button>
                {
                    state==='Admin'?
                    <p >Doctor Login ?<span className='text-primary underline cursor-pointer' onClick={()=>setState('Doctor')}>Click here</span></p>
                    :
                    <p >Admin Login ?<span className='text-primary underline cursor-pointer' onClick={()=>setState('Admin')}>Click here</span></p>

                }
                <div></div>
           
            </div>
            </form>
        </>
    )
}
