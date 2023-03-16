import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar/Navbar'

const LayoutPublic = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default LayoutPublic