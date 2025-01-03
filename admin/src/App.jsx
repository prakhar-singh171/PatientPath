import React from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App(props) {
  
  const {aToken}=useContext(AppContext)
  return aToken? (
      <div>
        <Login />
        <ToastContainer/>
      </div>
   
  ) :(
    <></>
  )
}
