import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'
import {AdminContextProvider} from './context/AdminContext.jsx'
import DoctorContextProvider from './context/DoctorController.jsx'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
 <BrowserRouter >

 <AdminContextProvider>
  <DoctorContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </DoctorContextProvider>
 </AdminContextProvider>
 </BrowserRouter>
)
