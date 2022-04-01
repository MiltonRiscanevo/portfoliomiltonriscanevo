import React from 'react'
import { makeStyles } from '@material-ui/core'
import CardProyect from './CardProyect'
import FooterNetwork from './FooterNetwork'
import Segment1 from './Segment1'
import Segment2 from './Segment2'


const Styles = makeStyles(theme=>({
    // segment2:{
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     padding:"5%",
    //     backgroundColor:'#CCCCFF',
    //     flexDirection:"column",
    //     height:"30rem",
    //     [theme.breakpoints.down('sm')]:{
    //         height:"30rem"
    //     }
    // },
    segment3:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:"5%",
        flexDirection:"column",
        backgroundColor:"#CC99FF ",
        width:"75%",
        marginTop:"-50px",
        borderRadius:"30%",
        [theme.breakpoints.down("sm")]:{
            borderRadius:"20%",
            width:"100%",
            padding:"1%"
        },
    },
    // paragraph:{
    //     width:"50%",
    //     textAlign:"center",
    //     fontSize: 25,
    //     [theme.breakpoints.down("sm")]:{
    //         width:"100%"
    //     }
    // },
    // container_row:{
    //     display:'flex',
    //     justifyContent:"center",
    //     alignItems:'center',
    //     flexDirection:'row',
    //     height:'100%',
    //     padding: '3px',
    //     [theme.breakpoints.down("sm")]:{
    //         flexDirection:"column",

    //     }
    // },
    // knowledge:{
    //     display:"flex",
    //     flexDirection:"column",
    //     alignItems:"center",
    //     flexWrap:"wrap",
    //     width:"100%",
    // },
    // languages:{
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     flexDirection:"column",
    //     width:"50%",
    //     height:"100%",
    //     flexWrap:"wrap"
        
    // },
    // image_language:{
    //     borderRadius:50,
    //     height:"50%",
    //     width:"50%",
    //     margin:5,
    //     objectFit:"contain",
    //     padding:10
    // },
    // data_know:{
    //     display:"flex",
    //     flexDirection:"row",
    //     flexWrap:"wrap",
    //     padding:"3px",
    //     justifyContent:"start",
    //     alignItems:"center",
    //     objectFit:"contain"
        
    // },
    // subtitles:{
    //     display:"flex",
    //     width:"100%",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     fontSize:15,
    //     padding:10
    // },
    // section:{
    //     width:"100%",
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     flexDirection:"column",
    // },
    segment4:{
        backgroundColor:'#FFCCFF',
        display:'flex'
    },
    // paragraph_subitems:{
    //     textAlign:"center"
    // },
    titles:{
        display:"flex",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        fontSize:30,
        padding:10,
    }    
}
))



const Home = () => {
    const classes = Styles()
  return (
    <>
        <Segment1/>
        <Segment2/>   
        <div className={classes.segment4}>
            <div className={classes.container}  >
                <h2 className={classes.titles}>My proyects</h2>
                    <CardProyect/>                
                <h2 className={classes.titles}>It's amazing create proyects, and improve my skills.</h2>
                <div>
                    <FooterNetwork/>
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default Home