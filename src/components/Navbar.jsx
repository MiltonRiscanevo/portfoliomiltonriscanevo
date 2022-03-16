import React from 'react'
import {Button} from '@material-ui/core'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import Curriculum from './Curriculum'



const Navbar = () => {
  return (
    <div>
        <Router>
            <div style={{display:"flex", justifyContent: "flex-end", backgroundColor:"#CCCCCC"}}>
                <Button style={{margin:5}} component={Link} to='/' variant='contained' color='primary' >Home</Button>
                <Button style={{margin:5}} component={Link} to='/contact' variant='contained' color='primary' >Say Hello</Button>
                <Button style={{margin:5}} component={Link} to='/cv' variant='contained' color='primary' >See my Curriculum</Button>
                <Button style={{margin:5}} component={Link} to='/pdf' variant='contained' color='primary' >See my Curriculum PDF</Button>

            </div>
            
            <Routes>
               
                <Route path='/cv' element={<Curriculum/>}/> 
                <Route path='/contact' element={<ContactUs/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default Navbar