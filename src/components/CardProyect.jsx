import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Ecommerce from './images/ecommerce.png'
import { makeStyles } from '@material-ui/core';


const Styles =makeStyles({
  root:{
    width:'50%'
  },
  image:{
    objectFit:'contain'
  },
  a_proyect:{
    textDecoration:"none",
    margin:10,
    padding:10,
    fontSize: 20,
    fontWeight:"bold",
    transition:" all .4s",
    color:"#000000",
    '&:hover':{
      transitionDelay:".8s",
      color:"#95A5A6"
    }
    
  },
  btn:{
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    cursor:"pointer",
    borderRadius:15,
    '&:hover':{
      backgroundColor:"#EAEDED",
      transitionDelay:".2s",
      color:"white",
    }
  },
 
})


export default function CardProyect() {
  const classes = Styles()
  
  return (
    <Card className={classes.root} >
      <CardMedia
        className={classes.image}
        component="img"
        image={Ecommerce}
        alt="E_comerce_project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ecommerce Project
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.btn}>
          <a className={classes.a_proyect} href="https://goofy-kepler-d60c30.netlify.app/" target="_blank" rel='noreferrer' > See more </a>
        </div>
        
      </CardActions>
    </Card>
  );
}