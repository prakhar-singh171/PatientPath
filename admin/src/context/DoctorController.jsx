import React, { createContext } from 'react'


const DoctorContext=createContext()
export default function DoctorContextProvider(props) {
    const value={

    }

    return (
<DoctorContext.Provider value={value}>
    {props.children}
    </DoctorContext.Provider>
    )
}

