import React from 'react'
import "./navbar.css"
import { Milton } from './components/Milton'
import Frame3 from './components/Frame3'
import Frame2 from './components/Frame2'

const Navbar = () => {
    
  return (
    <div className='columns'>
        <Milton/>
        <Frame2/>
        <Frame3/>
        
    </div>
  )
}

export default Navbar