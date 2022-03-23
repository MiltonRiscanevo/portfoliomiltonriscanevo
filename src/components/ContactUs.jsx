import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { makeStyles,  Paper } from '@material-ui/core'
import TextField from '@mui/material/TextField';

const Styles = makeStyles(theme=>({
  root:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2% ',
    padding: '5% 10%'
  },
  paper:{
    width:"70%",
    position:"absolute",
    margin:"2% 15%"    
  },
  [theme.breakpoints.down('md')]:{
    width:"100%",
    position:"relative",
    
  },
  text_data:{
    margin:4,
    width:"50%",
    [theme.breakpoints.down('md')]:{
      width:"100%",
      
    }
  }}))


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xcfve8r', 'template_u03oz9f', form.current, 'ifBy0-hhgQA9wcvsJ')
      .then((result) => {
          const Response = result.text;
          return Response
      }, (error) => {
          console.log(error.text);
      });
  };

  

  const classes = Styles()

  return (
    <Paper className={classes.paper}>
      <form ref={form} onSubmit={sendEmail} className={classes.root}>
        <TextField type="text" name="user_name" required label='Name' className={classes.text_data} />
        <TextField type="email" name="user_email" required label='Email' className={classes.text_data} />
        <TextField 
          name="message" 
          required 
          label= 'write message' 
          className={classes.text_data}   
          rows={4}
          multiline />
        <input type="submit" value="Send" style={{marginTop:4 , width: '25%'}} />
      
      </form>
    </Paper>
    
  );
};

export default ContactUs