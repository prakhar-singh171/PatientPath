import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import {NavLink} from 'react-router-dom'
import {assets} from '../assets/assets'
export default function Sidebar(props) {
    
        const {atoken}=useContext(AdminContext)
    return (
        <div>
            {
                aToken && 
                <ul>
                    <NavLink>
                        <img src={assets.home_icon} alt="" />
                        <p></p>
                    </NavLink>

                    <NavLink>
                        <img src={assets.appointment_icon} alt="" />
                        <p></p>
                    </NavLink>

                    <NavLink>
                        <img src={assets.add_icon} alt="" />
                        <p></p>
                    </NavLink>

                    <NavLink>
                        <img src={assets.people_icon} alt="" />
                        <p></p>
                    </NavLink>
                </ul>

                

        
            }
        </div>
    )
}
