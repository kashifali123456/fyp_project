import React, {useRef, useState} from 'react'
import {makeStyles} from "@material-ui/core";

import  Webcam from "react-webcam"
const WebCam = () => {
    const classes = useStyles();
    const webRef = useRef(null)
    const [captured,setCaptured]=useState()
    const ShowImage=()=>{
        setCaptured(webRef.current.getScreenshot());
    }
  return (
    <>
    <div className={classes.outter}>
         <Webcam ref={webRef}  className={classes.webcam}/> 
         <button onClick={()=>{
             ShowImage();
         }} className={classes.captures}> Capture</button>
         {captured && <img src={captured} alt="captured_image" className={classes.captured_img}  />}
    </div>
    </>
  )
}
const useStyles = makeStyles((theme)=>({
    outter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    webcam: {
        width: "400px",
        [theme.breakpoints.down("xs")]:
        {
            width: 350,
        }
    },
    captures: {
        width: 120,
        height: 35,
        margin: 10,
        border: "1px solid white",
        borderRadius: 5,
        background: "#3f51b5"
    },
    captured_img: {
        width: 400,
        [theme.breakpoints.down("xs")]:
        {
            width: 350,
        }
    }
}))
export default WebCam