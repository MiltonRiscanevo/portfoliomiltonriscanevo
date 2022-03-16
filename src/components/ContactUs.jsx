import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { makeStyles, Button, Paper } from '@material-ui/core'
import TextField from '@mui/material/TextField';

const Styles = makeStyles({
  root:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2% ',
    padding: '5% 10%'
  },
})


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
    <Paper>
      <form ref={form} onSubmit={sendEmail} className={classes.root}>
        <TextField type="text" name="user_name" required label='Name' style={{marginBottom:4, width: '50%'}} />
        <TextField type="email" name="user_email" required label='Email' style={{marginBottom:4, width: '50%'}} />
        <TextField 
          name="message" 
          required 
          label= 'write message' 
          style={{marginBottom:4 , width: '50%'}} 
          rows={4}
          multiline />
        <input type="submit" value="Send" style={{marginBottom:4 , width: '25%'}} />
      
      </form>
    </Paper>
    
  );
};

export default ContactUs