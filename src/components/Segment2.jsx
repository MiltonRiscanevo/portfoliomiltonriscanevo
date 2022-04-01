import React from 'react'
import { makeStyles } from '@material-ui/core'
import VideoMedia from './VideoMedia'

const Styles = makeStyles(theme=>({
    segment2:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        padding:"5%",
        backgroundColor:'#CCCCFF',
        flexDirection:"column",
        height:"30rem",
        [theme.breakpoints.down('sm')]:{
            height:"40rem",
            flexDirection:'column',
        }
    },
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
    container:{
        display:'flex',
        justifyContent:"space-around",
        alignItems:'center',
        flexDirection:'row',
        margin:12   ,
        padding:10,
        [theme.breakpoints.down("sm")]:{
            flexDirection:'column',
        }
    },
    video_container:{
        width:'200px',
        height: '1rem'
    },
    paragraph:{
        width:"50%",
        textAlign:"center",
        fontSize: 25,
        [theme.breakpoints.down("sm")]:{
            fontSize: 15,
        }
    },
    container_row:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'row',
        height:'100%',
        padding: '3px',
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",

        }
    },
    knowledge:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        flexWrap:"wrap",
        width:"100%",
    },
    languages:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        width:"50%",
        height:"100%",
        flexWrap:"wrap"
        
    },
    image_language:{
        borderRadius:50,
        height:"50%",
        width:"50%",
        margin:5,
        objectFit:"contain",
        padding:10
    },
    data_know:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        padding:"3px",
        justifyContent:"start",
        alignItems:"center",
        objectFit:"contain"
        
    },
    subtitles:{
        display:"flex",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        fontSize:15,
        padding:10
    },
    section:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    },
    segment4:{
        backgroundColor:'#FFCCFF',
        display:'flex'
    },
    paragraph_subitems:{
        textAlign:"center"
    },
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


const Segment2 = () => {

    const classes= Styles()
    
    return (
    <>

        <div className={classes.section}>
        <div className={classes.segment2}>
            <div className={classes.container}  >
                <p className={classes.paragraph}>
                    Hi, I'm Milton, nice to meet you.
                    When I look come back what is my work dream, no dude, be programer is great, because you have 
                    part to dreams to another persons, and if you really work for your dreams, your have satisfaction,
                    succedfull and this is the best sensations helped to do really dreams, and happy folks.
                </p>
                <VideoMedia/>               
            </div>
        </div >
        <div className={classes.segment3}>
            <h2>Knowledge</h2>
            <div className={classes.container_row}  >    
                <div className={classes.knowledge}>
                    <h5 style={{ fontSize:20 }}>Languages and styles I know</h5>
                    <div className={classes.data_know}>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>HTML</h6>
                            <img className={classes.image_language} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png" alt="js" />
                            <p className={classes.paragraph_subitems}>When I know html my live chaged</p>
                        </div>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>CSS</h6>
                            <img className={classes.image_language} src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="js" />
                            <p className={classes.paragraph_subitems}>The second changed in my live</p>
                        </div>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>Javascript</h6>
                            <img className={classes.image_language} src="https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.png" alt="js" />
                            <p className={classes.paragraph_subitems}>Best language to use in web development</p>
                        </div>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>Python</h6>
                            <img className={classes.image_language} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png" alt="js" />
                            <p className={classes.paragraph_subitems}>It by me all language programing with steroids</p>
                        </div>
                    </div>
                </div>
                <div className={classes.knowledge}>
                    <h5 style={{ fontSize:20 }}>Tecnologies ussually use</h5>
                    <div className={classes.data_know}>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>React</h6>
                            <img className={classes.image_language} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png" alt="js" />
                            <p className={classes.paragraph_subitems}>This portfolio is writting with react library</p>
                        </div>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>NodeJS</h6>
                            <img className={classes.image_language} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png" alt="js" />
                            <p className={classes.paragraph_subitems}>Best tecnologie to use back end Javascript</p>
                        </div>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>Postgres</h6>
                            <img className={classes.image_language} src="https://www.todopostgresql.com/wp-content/uploads/2017/07/2000px-Database-postgres.svg_-1.png" alt="js" />
                            <p className={classes.paragraph_subitems}>Data base, great to use and simply tool</p>
                        </div>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>Django</h6>
                            <img className={classes.image_language} src="https://2.bp.blogspot.com/-1mSJJTYpcyE/XHyqptgGXOI/AAAAAAAABCI/-BwzTyMtLDYvD7LdeXHDddtSEy55yLblACPcBGAYYCw/s1600/drf.png" alt="js" />
                            <p className={classes.paragraph_subitems}>Best framework to back by python</p>
                        </div>
                    </div>
                </div>
                <div className={classes.knowledge}>
                    <h5 style={{ fontSize:20 }}>Another Knowledge</h5>
                    <div className={classes.data_know}>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>Acounting and Finance Technitian </h6>
                            <img className={classes.image_language} src="https://cdn1.iconfinder.com/data/icons/business-finance-vol-3-39/512/accountant_accounting_finance_business-512.png" alt="js" />
                            <p className={classes.paragraph_subitems}>Can't you believe it? <br /> Well it's true</p>
                        </div>
                        <div className={classes.languages}>
                            <h6 className={classes.subtitles}>English </h6>
                            <img className={classes.image_language} src="https://learnenglish.edu.co/web2/wp-content/uploads/2021/02/metodologia-conversacional-Learn-english-1536x1106.png" alt="js" />
                            <p className={classes.paragraph_subitems}>Speaking: B1 <br /> Reading: B1 <br /> Listening: B1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Segment2