import React, { createContext } from 'react'


const AppContext=createContext()
export default function AppContextProvider(props) {
    const value={

    }

    return (
<AppContext.Provider value={value}>
    {props.children}
    </AppContext.Provider>
    )
}

