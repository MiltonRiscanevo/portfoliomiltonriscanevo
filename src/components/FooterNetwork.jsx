import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const FooterNetwork = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
        <h2 style={{margin:10, padding:10, textAlign:"center"}}>Off course if you follow me and check out mi profile not problem</h2>
        <div style={{margin:10}}>   
        <a  href="https://www.facebook.com/inocencio1986" target="_blank" rel='noreferrer'> <FacebookIcon style={{margin:10}} fontSize="large"/></a>
        <a href="https://www.instagram.com/miloton19/" target="_blank" rel='noreferrer'><InstagramIcon style={{margin:10}} fontSize="large"/></a>
        <a href="https://www.linkedin.com/in/milton-cesar-riscanevo-027a53147/" target="_blank" rel='noreferrer'><LinkedInIcon style={{margin:10}} fontSize="large"/></a>
        <a href="https://github.com/MiltonRiscanevo" target="_blank" rel='noreferrer'><GitHubIcon style={{margin:10}} fontSize="large"/></a>
        </div>
        
    </div>
  )
}

export default FooterNetwork