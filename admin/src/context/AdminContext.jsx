import React, { createContext, useState } from 'react';

const AdminContext = createContext();

function AdminContextProvider(props) {
    const [aToken, setAToken] = useState('');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        aToken,
        setAToken,
        backendUrl,
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
}

export { AdminContext, AdminContextProvider };
