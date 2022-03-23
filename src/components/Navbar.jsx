import React from 'react'
import {Button} from '@material-ui/core'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import Curriculum from './Curriculum'
import Hamburger from './Hamburger'
import {makeStyles} from '@material-ui/core'

const Styles = makeStyles(theme=>({
  button:{
    margin:5,
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }
  },
  hamburguer_container:{
    display:'none',
    padding:"3px",
    flexDirection:'column',
    height:"100%",
    padding:"3 0",
    justifyContent:'center',
    alignItems:"center",
    margin:"2% 0%",
    background:'none',
    border:0,
    [theme.breakpoints.down('sm')]:{
      display:"flex"
    }
  }
}))


const Navbar = () => {
  const classes= Styles()
  return (
    <div>
        <Router>
            <div style={{display:"flex", justifyContent: "flex-end", backgroundColor:"#E9F3F4"}}>
                <Button className={classes.button} component={Link} to='/' variant='contained' color='primary' >Home</Button>
                <Button className={classes.button} component={Link} to='/contact' variant='contained' color='primary' >Say Hello</Button>
                <Button className={classes.button} component={Link} to='/cv' variant='contained' color='primary' >See my Curriculum</Button>
                <button className={classes.hamburguer_container}>
                  <Hamburger />
                </button>
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