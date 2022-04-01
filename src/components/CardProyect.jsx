import * as React from 'react';
import Typography from '@mui/material/Typography';
import Ecommerce from './images/ecommerce.png';
import Pokedex from './images/pokedex.png'
import { makeStyles } from '@material-ui/core';



const Styles =makeStyles({
  container_projects:{
    display:'flex',
    
  },
  root:{
    width:'40%',
    margin: 10,
    backgroundColor:"white",
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    flexDirection:'column',
    textAlign:'center'
  },
  image:{
    objectFit:'contain',
    width:"90%",
    margin:5

  },
  a_proyect:{
    textDecoration:"none",
    margin:2,
    padding:2,
    fontSize: 15,
    fontWeight:"bold",
    transition:" all .4s",
    color:"#000000",    
  },
  btn:{
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    cursor:"pointer",
    borderRadius:15,
    width:"100%",
    margin:3,
    padding:3,
    '&:hover':{
      backgroundColor:"#EAEDED",
      transitionDelay:".2s",
      color:"white",
    }
  }
})


export default function CardProyect() {
  const classes = Styles()
  
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
          <div className={classes.root} >
            <img
              className={classes.image}
              component="img"
              src={Ecommerce}
              alt="E_comerce_project"
            />
            <div>
            <Typography gutterBottom variant="h5" component="div">
                Ecommerce Project
              </Typography>
            </div>
            <div>
              <div className={classes.btn}>
                <a className={classes.a_proyect} href="https://goofy-kepler-d60c30.netlify.app/" target="_blank" rel='noreferrer' > See more </a>
               </div>
            </div>
          </div>

          <div className={classes.root} >
            <img
            className={classes.image}
            component="img"
            src={Pokedex}
            alt="Pokedex"
            />
            <div>
              <Typography gutterBottom variant="h5" component="div">
                Pokedex Project
              </Typography>
            </div>
            <div>
              <div className={classes.btn}>
                <a className={classes.a_proyect} href="https://musical-gumption-815ed5.netlify.app/" target="_blank" rel='noreferrer' > See more </a>
              </div>
            </div>
          </div>
      
    </div>
    
  );
}