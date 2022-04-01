import React from 'react'
import { makeStyles } from '@material-ui/core'

const Styles = makeStyles(theme=>({
    bubble:{
        
        background: "#fff",
        position:'absolute',
        top: -15,
        animation:`$bubbles ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        animationDuration:'5000ms',
        "&:nth-child(1)":{
            animationDuration:'3000ms',
            width:2,
            height:80,
            left: '5%',
            opacity: ".3",
        },
        "&:nth-child(2)":{
            animationDuration:'2000ms',
            width:2,
            height:100,
            left: '25%',
            opacity: ".9",
            animationDelay:'0500ms',
        },
        "&:nth-child(3)":{
            animationDuration:'6000ms',
            width:2,
            height:20,
            left: '75%',
            opacity: ".9",
            animationDelay:'0900ms',
        },
        "&:nth-child(4)":{
            animationDuration:'4000ms',
            width:2,
            height:40,
            left: '65%',
            animationDelay:'0800ms',
        },
        "&:nth-child(5)":{
            animationDuration:'3000ms',
            width:2,
            height:60,
            left: '95%',
            animationDelay:'0600ms',
        },
        "&:nth-child(6)":{
            animationDuration:'6000ms',
            width:2,
            height:110,
            left: '90%',
            animationDelay:'1000ms',
        },
        "&:nth-child(8)":{
            animationDuration:'7000ms',
            width:2,
            height:110,
            left: '63%',
            animationDelay:'0700ms',
        },
        "&:nth-child(9)":{
            animationDuration:'4000ms',
            width:2,
            height:110,
            left: '7%',
            animationDelay:'0680ms',
        },
        "&:nth-child(10)":{
            animationDuration:'3000ms',
            width:2,
            height:110,
            left: '11%',
            animationDelay:'0570ms',
        },
        "&:nth-child(12)":{
            animationDuration:'9000ms',
            width:2,
            height:110,
            left: '30%',
            animationDelay:'0430ms',
        },
        "&:nth-child(11)":{
            animationDuration:'6000ms',
            width:2,
            height:110,
            left: '37%',
            animationDelay:'0980ms',
        },
        "&:nth-child(12)":{
            animationDuration:'2000ms',
            width:2,
            height:110,
            left: '40%',
            animationDelay:'0270ms',
        },
        "&:nth-child(13)":{
            animationDuration:'9000ms',
            width:2,
            height:110,
            left: '76%',
            animationDelay:'0650ms',
        },
        "&:nth-child(14)":{
            animationDuration:'3000ms',
            width:2,
            height:110,
            left: '88%',
            animationDelay:'0870ms',
        },
        "&:nth-child(15)":{
            animationDuration:'3400ms',
            width:2,
            height:110,
            left: '28%',
            animationDelay:'0350ms',
        },
        "&:nth-child(16)":{ 
            animationDuration:'8700ms',
            width:2,
            height:110,
            left: '65%',
            animationDelay:'0680ms',
        },
        "&:nth-child(17)":{
            animationDuration:'5400ms',
            width:2,
            height:110,
            left: '50%',
            animationDelay:'0760ms',
        },
        "&:nth-child(18)":{
            animationDuration:'7600ms',
            width:2,
            height:110,
            left: '45%',
            animationDelay:'0220ms',
        },
        "&:nth-child(19)":{
            animationDuration:'5900ms',
            width:2,
            height:110,
            left: '28%',
            animationDelay:'0930ms',
        },
        "&:nth-child(20)":{
            animationDuration:'7600ms',
            width:2,
            height:110,
            left: '98%',
            animationDelay:'0390ms',
        },
        "&:nth-child(21)":{
            animationDuration:'4900ms',
            width:2,
            height:110,
            left: '96%',
            animationDelay:'0230ms',
        }
    },
    "@keyframes bubbles":{
        "0%":{
            bottom:0,
            opacity:0,
        },
        "50%":{
            opacity:4,
        },
        "100%":{
            top:"100vh",
            opacity:0,
        }
    },
    [theme.breakpoints.down('sm')]:{
        bubble:{
            animation:`$bubbles ${theme.transitions.easing.sharp}`,
            animationIterationCount: 'infinite',
            animationDuration:'5000ms',
            "&:nth-child(1)":{
                animationDuration:'3000ms',
                width:2,
                height:8,
                left: '5%',
                opacity: ".3",
            },
            "&:nth-child(2)":{
                animationDuration:'2000ms',
                width:2,
                height:10,
                left: '25%',
                opacity: ".9",
                animationDelay:'0500ms',
            },
            "&:nth-child(3)":{
                animationDuration:'6000ms',
                width:2,
                height:2,
                left: '75%',
                opacity: ".9",
                animationDelay:'0900ms',
            },
            "&:nth-child(4)":{
                animationDuration:'4000ms',
                width:2,
                height:4,
                left: '65%',
                animationDelay:'0800ms',
            },
            "&:nth-child(5)":{
                animationDuration:'3000ms',
                width:2,
                height:6,
                left: '95%',
                animationDelay:'0600ms',
            },
            "&:nth-child(6)":{
                animationDuration:'6000ms',
                width:2,
                height:11,
                left: '90%',
                animationDelay:'1000ms',
            },
            "&:nth-child(8)":{
                animationDuration:'7000ms',
                width:2,
                height:20,
                left: '63%',
                animationDelay:'0700ms',
            },
            "&:nth-child(9)":{
                animationDuration:'4000ms',
                width:2,
                height:50,
                left: '7%',
                animationDelay:'0680ms',
            },
            "&:nth-child(10)":{
                animationDuration:'3000ms',
                width:2,
                height:34,
                left: '11%',
                animationDelay:'0570ms',
            },
            "&:nth-child(12)":{
                animationDuration:'9000ms',
                width:2,
                height:43,
                left: '30%',
                animationDelay:'0430ms',
            },
            "&:nth-child(11)":{
                animationDuration:'6000ms',
                width:2,
                height:12,
                left: '37%',
                animationDelay:'0980ms',
            },
            "&:nth-child(12)":{
                animationDuration:'2000ms',
                width:2,
                height:15,
                left: '40%',
                animationDelay:'0270ms',
            },
            "&:nth-child(13)":{
                animationDuration:'9000ms',
                width:2,
                height:34,
                left: '76%',
                animationDelay:'0650ms',
            },
            "&:nth-child(14)":{
                animationDuration:'3000ms',
                width:2,
                height:56,
                left: '88%',
                animationDelay:'0870ms',
            },
            "&:nth-child(15)":{
                animationDuration:'3400ms',
                width:2,
                height:34,
                left: '28%',
                animationDelay:'0350ms',
            },
            "&:nth-child(16)":{ 
                animationDuration:'8700ms',
                width:2,
                height:33,
                left: '65%',
                animationDelay:'0680ms',
            },
            "&:nth-child(17)":{
                animationDuration:'5400ms',
                width:2,
                height:25,
                left: '50%',
                animationDelay:'0760ms',
            },
            "&:nth-child(18)":{
                animationDuration:'7600ms',
                width:2,
                height:65,
                left: '45%',
                animationDelay:'0220ms',
            },
            "&:nth-child(19)":{
                animationDuration:'5900ms',
                width:2,
                height:12,
                left: '28%',
                animationDelay:'0930ms',
            },
            "&:nth-child(20)":{
                animationDuration:'7600ms',
                width:2,
                height:44,
                left: '98%',
                animationDelay:'0390ms',
            },
            "&:nth-child(21)":{
                animationDuration:'4900ms',
                width:2,
                height:51,
                left: '96%',
                animationDelay:'0230ms',
            }
        }
    },
    "@keyframes bubbles":{
        "0%":{
            bottom:0,
            opacity:0,
        },
        "50%":{
            opacity:4,
        },
        "100%":{
            top:"50vh",
            opacity:0,
        }
    }    
}
))


const Bubbles = () => {

    const classes = Styles()
  return (
    <>
        <div className={classes.bubbles}>
            <div className={classes.bubble}/><div className={classes.bubble}/><div className={classes.bubble}/>
            <div className={classes.bubble}/><div className={classes.bubble}/><div className={classes.bubble}/>
            <div className={classes.bubble}/><div className={classes.bubble}/><div className={classes.bubble}/>
            <div className={classes.bubble}/><div className={classes.bubble}/><div className={classes.bubble}/>
            <div className={classes.bubble}/><div className={classes.bubble}/><div className={classes.bubble}/>
            <div className={classes.bubble}/><div className={classes.bubble}/><div className={classes.bubble}/>
            <div className={classes.bubble}/><div className={classes.bubble}/><div className={classes.bubble}/>
        </div>

    </>
  )
}

export default Bubbles