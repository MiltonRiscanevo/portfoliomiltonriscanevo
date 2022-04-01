import React from 'react'
import VideoMediaPlayer from './media/videomatch.mp4'
import VideoFondo from './media/fondo.mp4'
import {makeStyles} from '@material-ui/core'

const Styles = makeStyles(theme =>({
  container:{
    borderRadius:10,
    margin:5,
    backgroundColor:'white',
    width:'40%',
    height:'90%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  video:{
    borderRadius:"10%",
    width:'100%',
    height:'40%',
    
  }
}))
  
const VideoMedia = () => {

  const classes = Styles()
  return (
    <div className={classes.container}>
      <video className={classes.video} src={VideoFondo} autoPlay loop muted/>
      <video className={classes.video} src={VideoMediaPlayer} autoPlay loop muted/>
    </div>
  )
}

export default VideoMedia