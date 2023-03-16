import React from 'react'
import "./components.css"
import {Link} from "react-router-dom"


const Frame3 = () => {

  
  
  return (
    <nav className="frame-3">
      <div className='left'>
          <Link to="/" className='text'>Home</Link>

      </div>
      <div className='left'>
          <Link to="/" className='text'>Home</Link>

      </div>
      <div className='center'>
          
          <div className='explainer'> <span>HOVER ME</span></div>
          <Link to="/about" className='text'>About</Link>

      </div>
      <div className='right'>
          <Link to="/work" className='text'>Work</Link>
      </div>
      <div className='righter'>
        <button className='btn_connect'>Connect</button>
      </div>
      
    </nav>
  )
}

export default Frame3