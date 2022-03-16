import React from 'react'
import { makeStyles } from '@material-ui/core'
import CardProyect from './CardProyect'


const Styles = makeStyles(theme=>({
    segment1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:"5%",
        backgroundColor:'#CCFFFF',
        height:"45rem"
    },
    image:{
        borderRadius:50,
        height:400,
        margin:45,
        [theme.breakpoints.down('md')]:{
            height: 300,
            with: "70%"
        },
        [theme.breakpoints.down('sm')]:{
            height: 200,
            with: "50%"
        },
    },
    container:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'column'
    },
    segment2:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:"5%",
        backgroundColor:'#CCCCFF',
        flexDirection:"column",
        height:"45rem"
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
        borderRadius:"30%"
    },
    paragraph:{
        width:"50%",
        textAlign:"center",
        fontSize: 25,
        [theme.breakpoints.down("sm")]:{
            width:"100%"
        }
    },
    container_row:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'row',
        height:'100%',
        padding: '3px'
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
        fontSize:15
    },
    section:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
    segment4:{
        backgroundColor:'#FFCCFF'
    },
    title_develop:{
        [theme.breakpoints.down("sm")]:{
            width:"50%",
            textAlign:"center",
        }
    }
    
}))



const Home = () => {
    const classes = Styles()
  return (
    <>
        <div className={classes.segment1}>
            <div className={classes.container}  >
                <h1 className={classes.title_develop}>MILTON RISCANEVO <strong>Developer fullstack</strong></h1>
                <img className={classes.image} src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="develop" />
                <h2>You don't make proyect, remember your make dreams</h2>
            </div>
        </div>
        <div className={classes.section}>
        <div className={classes.segment2}>
            <div className={classes.container}  >
                <p className={classes.paragraph}>
                    Hi, I'm Milton, nice to meet you.
                    When I look come back what is my work dream, no dude, be programer is great, because you have 
                    part to dreams to another persons, and if you really work for your dreams, your have satisfaction,
                    succedfull and this is the best sensations helped to do really dreams, and happy folks.
                </p>
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
                            <p className={classes.paragraph_subitems}>Can't you believe it? Well it's true</p>
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
        <div className={classes.segment4}>
            <div className={classes.container}  >
                <h2>My proyects</h2>
                <CardProyect/>
                <h2>It's amazing create proyects, and improve my skills.</h2>
                <div>
                <p>If you wanna to contact me check out my social network or send me an email</p>
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default Home