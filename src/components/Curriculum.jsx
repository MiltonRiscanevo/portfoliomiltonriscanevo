import React from 'react'
import {makeStyles} from '@material-ui/core'
import Paper from '@mui/material/Paper';
import Photo from './images/photocurriculum.jpg'

const Styles = makeStyles(theme=>({
    header:{
        background: "rgb(0,0,0)",
        background: "radial-gradient(circle, rgba(0,0,0,0.7203256302521008) 11%, rgba(4,9,18,1) 40%, rgba(41,99,111,1) 100%)",
        color:"white",
        display:"flex",
        justifyContent:"space-between",
        fontSize:25,
        padding:10,
        [theme.breakpoints.down('sm')]:{
            flexDirection:"column"
        }
    },
    name:{
        fontSize:40,
        fontWeight:"bold",
        [theme.breakpoints.down('sm')]:{
            fontSize:25
        }
    },
    container_data:{
        display:"flex",
    },
    skills:{
        width: "30%",
        display:"flex",
        flexDirection:"column",
        background: "radial-gradient(circle, rgba(0,0,0,0.7203256302521008) 11%, rgba(4,9,18,1) 40%, rgba(41,99,111,1) 100%)",
        alignItems:"center"
    },
    image_profile:{
        width:"50%",
        objectFit:"contain",
        padding:10,
        borderRadius:"100%",
        border:"solid 4px #000000",
        margin:10,
        [theme.breakpoints.down('sm')]:{
            width:"95%",
            padding:5,
            margin:5
        }
    },
    container_images:{
        width:"50%",
        display: "flex",
        flexDirection:"column",
        margin:10
    },
    image_language:{
        with:"20%",
        objectFit:"contain",
        padding:"10%",
        [theme.breakpoints.down('sm')]:{
            width:"100%",
            padding:"2%"
        }
    },
    skill_data:{
        color:"white",
        padding:10,
        [theme.breakpoints.down('sm')]:{
            fontSize:11,
            textAlign:'center'
        }
    },
    skill_data_container:{
        padding:10
    },
    skill_title:{
        fontSize:25,
        textAlign:"center",
        borderBottom:"solid 4px #000000",
        margin:10,
        [theme.breakpoints.down('sm')]:{
            fontSize:15
        }
    },
    data_information:{
        width: "70%"
    },
    data_information_segment:{
        height:"33.333%"
    },
    data_information_title:{
        fontSize:30,
        padding: 30,
        borderBottom:"solid 4px #000000",
        [theme.breakpoints.down('sm')]:{
            fontSize:18,
            padding:8,
        }
    },
    data_information_paragrahp:{
        fontSize:20,
        padding: 35,
        [theme.breakpoints.down('sm')]:{
            fontSize:11,
            padding: 5
        }
        
    }

}))

const Curriculum = () => {
    const classes = Styles()
  return (
    <>
        <Paper>
            <div className={classes.header}>
                <div className={classes.name}>Milton Riscanevo</div>
                <div>
                    <p>Phone: +571 317 586 11 16 <br /> Email: miltonriscanevo@hotmail.com</p>
                </div>
            </div>
            <div className={classes.container_data}>
                <div className={classes.skills}>
                    <img className={classes.image_profile} src={Photo} alt="profile" />
                    <div className={classes.container_images}>
                        <img className={classes.image_language} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png" alt="js" />
                        <img className={classes.image_language} src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="js" />
                        <img className={classes.image_language} src="https://www.syloper.com/wp-content/uploads/js.png" alt="js" />
                        <img className={classes.image_language} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png" alt="js" />
                        <img className={classes.image_language} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png" alt="js" />
                        <img className={classes.image_language} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png" alt="js" />
                    </div>    
                    <div className={classes.skill_data}>
                        <div className={classes.skill_data_container}>
                            <h5 className={classes.skill_title}>Habilidades</h5>
                            <p>    . Orientacion al resultado
                            <br /> . Analisis numerico
                            <br /> . Atencion al detalle
                            <br /> . Trabajo bajo presion
                            <br /> . Trabajo en equipo    
                            </p>
                        </div>
                        <div>
                            <h5 className={classes.skill_title}>English</h5>
                            <p>    . Reading:   B1
                            <br /> . Listening: B1
                            <br /> . Wrinting:  B1
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.data_information}>
                    <div className={classes.data_information_segment}> 
                        <h4 className={classes.data_information_title}>About me</h4>
                        <p className={classes.data_information_paragrahp}>Junior developer software student in Academlo boot camp, and study Engineer Software degree in Corporacion Universitaria Iberoamericana, actually 5 semester.

                            I'm preparing for long time my position, follow a path to create skill's like knowledge in programing languages, such as Javascript, and Python, using technologies like, nodejs, react, django, database like postgres, and devtool such as Git, a another technologies necessaries to develop .</p> 
                    </div>
                    <div className={classes.data_information_segment}>
                        <h4 className={classes.data_information_title}>Studies</h4>
                        <p className={classes.data_information_paragrahp}>
                            <strong>University: Corporacion Universitaria Iberoamericana</strong> <br /> Software Enginner <br /> nov 2020 - dic 2023
                            <br />
                            <strong>BootCamp: Academlo Academy to Science Computation</strong> <br /> Fullstack developer <br /> feb 2021 - feb 2022
                            <br />
                            <strong>Technician: Instituto Colombiano de Aprendizaje</strong> <br /> Accounting and Finance <br /> ene 2012 - dic 2013
                        </p>
                    </div>
                    <div className={classes.data_information_segment}> 
                        <h4 className={classes.data_information_title}>Experience</h4>
                        <p className={classes.data_information_paragrahp}>I do projects to improve my skills, through them:</p>
                        <br />
                        <p className={classes.data_information_paragrahp}> <strong>E-commerce:</strong>  This proyect was created by React, HTML, CSS and Nodejs backend</p>
                    </div>
                </div>
            </div>
        </Paper>
    </>
  )
}

export default Curriculum