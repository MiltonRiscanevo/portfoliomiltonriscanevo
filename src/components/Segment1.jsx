import React from 'react'
import { makeStyles } from '@material-ui/core'
import Bubbles from './Bubbles'

const Styles = makeStyles(theme=>({
    segment1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:"3%",
        background: 'rgb(34,195,169)',
        background: 'linear-gradient(144deg, rgba(34,195,169,1) 0%, rgba(40,35,56,0.8939950980392157) 100%)',
        position:'relative',
        height:"40rem",
        [theme.breakpoints.down('sm')]:{
            height:"30rem"
        }
    },
    container:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'column'
    },
    title_develop:{
        textAlign:'center',
        paddingTop:20,
        zIndex:1,
        [theme.breakpoints.down("sm")]:{
            width:"100%",
            textAlign:"center",
            fontSize:'30px'
        },
        color:"rgb(2,0,36)",
        fontSize:'60px'
    },
    subtitle:{
        textAlign:"center",
        [theme.breakpoints.down("sm")]:{
            
            fontSize:'10px'
        }
    },
    image:{
        borderRadius:50,
        height:400,
        margin:10,
        zIndex:1,
        opacity:'.9',
        boxShadow: '2px 2px 10px 1px  rgba(34,195,169,1) ',
        "&:hover":{
            boxShadow: '2px 2px 10px 1px rgba(34,195,169,1)  ',
        },
        [theme.breakpoints.down('md')]:{
            height: 300,
            with: "70%"
        },
        [theme.breakpoints.down('sm')]:{
            height: 150,
            with: "50%"
        }
    },
    cube:{
        
        //borderRadius:'10px',
        "&:nth-child(1)":{
          //  borderEndEndRadius:'20px',
            zIndex:2,
            marginLeft:80,
            width:100,
            height:100,
            left: '5%',
            opacity: ".3",
            background: 'rgb(2,0,36)',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        },
        "&:nth-child(2)":{
            //borderTopRightRadius:'25px',
            zIndex:1,
            margin:-10,
            width:100,
            height:100,
            left: '25%',
            opacity: ".9",
            animationDelay:'0500ms',
            background: 'rgb(34,193,195)',
            background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
        },
        "&:nth-child(3)":{
            zIndex:3,
            marginLeft:80,
            width:100,
            height:100,
            left: '75%',
            opacity: ".9",
            animationDelay:'0900ms',
            background: 'rgb(34,193,195)',
            background: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(45,253,86,0.4374124649859944) 100%)'
        },
        "&:nth-child(4)":{
            zIndex:6,
            marginTop:-10,
            marginLeft:110,
            width:100,
            height:100,
            left: '65%',
            animationDelay:'0800ms',
            background: 'rgb(131,58,180)',
            background: 'linear-gradient(221deg, rgba(131,58,180,1) 17%, rgba(29,161,253,1) 50%)'
        },
        "&:nth-child(5)":{
            marginTop:-20,
            marginLeft:90,
            width:100,
            height:100,
            left: '95%',
            animationDelay:'0600ms',
            background: 'rgb(195,47,34)',
            background: 'linear-gradient(144deg, rgba(195,47,34,1) 0%, rgba(253,251,45,0.8939950980392157) 100%)',
        },
        "&:nth-child(6)":{
            marginTop:-25,
            marginLeft:150,
            width:100,
            height:100,
            left: '90%',
            background: 'rgb(34,195,169)',
            background: 'linear-gradient(144deg, rgba(34,195,169,1) 0%, rgba(93,45,253,0.8939950980392157) 100%)',
        }
    },
    [theme.breakpoints.down('sm')]:{
        cube:{
            "&:nth-child(1)":{
                //  borderEndEndRadius:'20px',
                  zIndex:2,
                  marginLeft:8,
                  width:30,
                  height:30,
                  left: '5%',
                  opacity: ".3",
                  background: 'rgb(2,0,36)',
                  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
              },
              "&:nth-child(2)":{
                  //borderTopRightRadius:'25px',
                  zIndex:1,
                  margin:-1,
                  width:30,
                  height:30,
                  left: '25%',
                  opacity: ".9",
                  animationDelay:'0500ms',
                  background: 'rgb(34,193,195)',
                  background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
              },
              "&:nth-child(3)":{
                  zIndex:3,
                  marginLeft:8,
                  width:30,
                  height:30,
                  left: '75%',
                  opacity: ".9",
                  animationDelay:'0900ms',
                  background: 'rgb(34,193,195)',
                  background: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(45,253,86,0.4374124649859944) 100%)'
              },
              "&:nth-child(4)":{
                  zIndex:6,
                  marginTop:-1,
                  marginLeft:11,
                  width:30,
                  height:30,
                  left: '65%',
                  animationDelay:'0800ms',
                  background: 'rgb(131,58,180)',
                  background: 'linear-gradient(221deg, rgba(131,58,180,1) 17%, rgba(29,161,253,1) 50%)'
              },
              "&:nth-child(5)":{
                  marginTop:-2,
                  marginLeft:9,
                  width:30,
                  height:30,
                  left: '95%',
                  animationDelay:'0600ms',
                  background: 'rgb(195,47,34)',
                  background: 'linear-gradient(144deg, rgba(195,47,34,1) 0%, rgba(253,251,45,0.8939950980392157) 100%)',
              },
              "&:nth-child(6)":{
                  marginTop:-2,
                  marginLeft:15,
                  width:30,
                  height:30,
                  left: '90%',
                  background: 'rgb(34,195,169)',
                  background: 'linear-gradient(144deg, rgba(34,195,169,1) 0%, rgba(93,45,253,0.8939950980392157) 100%)',
              }
        }
    },    
}
))

const Segment1 = () => {
    const classes = Styles()
  return (
    <>
        <div className={classes.segment1}>
            <div className={classes.cubes}>
                <div className={classes.cube}/><div className={classes.cube}/><div className={classes.cube}/>
                <div className={classes.cube}/><div className={classes.cube}/><div className={classes.cube}/>
            </div>
            <div className={classes.container}  >
                <h1 className={classes.title_develop}>MILTON RISCANEVO <strong>Developer fullstack</strong></h1>
                <img className={classes.image} src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/79318116_3399233583483590_3244656163572154368_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeH80URPdkzhIG78AtV0qEbx9Kz4CyBdhSX0rPgLIF2FJSN3bUSyFSu_6CPxPBqMcEfm7JG50wJFKdWuozeJ5HKm&_nc_ohc=aNo6sY1fgosAX_Ft9WG&_nc_ht=scontent-bog1-1.xx&oh=00_AT_m6eeArayCSQGKnin8sZ3gpPlPzEtOJcUoAiw_htjWhg&oe=6266FE52" alt="develop" />
                <h2 className={classes.subtitle}>You don't make projects, remember your make dreams</h2>
            </div>
            <Bubbles/>
            <div className={classes.cubes}>
                <div className={classes.cube}/><div className={classes.cube}/><div className={classes.cube}/>
                <div className={classes.cube}/><div className={classes.cube}/><div className={classes.cube}/>
            </div>
        </div>
    </>
  )
}

export default Segment1