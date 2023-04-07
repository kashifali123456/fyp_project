import React from 'react'
import {makeStyles, Box} from "@material-ui/core"
import step1 from "../../Assets/Images/step1.PNG"
import step2 from "../../Assets/Images/step2.PNG"
import step3 from "../../Assets/Images/step3.PNG"
import step4 from "../../Assets/Images/step4.jpg"
import step5 from "../../Assets/Images/step5.gif"

const Tutorial = () => {
    const classes = useStyles() 
  return (
    <>
    {/* First Step */}
    <Box display="flex" justifyContent="space-evenly" className={classes.step1} >
        <Box>
            <h3>(1) First Step:</h3>
            <p className={classes.para}>To use our App, you have to create/register an account by 
            providing us your "Full Name", "Email", "Password" and "Confirm Password". </p>
        </Box>
        <Box>
            <img src={step1} alt="mobile" className={classes.firstimg}/>
        </Box>
    </Box>
     {/* second Step */}
    <Box display="flex" justifyContent="space-evenly" className={classes.step2} >
    <Box>
            <img src={step2} alt="mobile" className={classes.firstimg}/>
        </Box>
        <Box>
            <h3>(2) Second Step:</h3>
            <p  className={classes.para}>After creating an account successful, now you have to login
             through authenticated "email" and "Password" </p>
        </Box>
    </Box>
     {/* third Step */}
    <Box display="flex" justifyContent="space-evenly" className={classes.step1} >
        <Box>
            <h3>(3) Third Step:</h3>
            <p className={classes.para}>After login to an App, the dashboard will show you the option of 
            image upload from "Choose from device" (Pc, Mobile, Tablet) or from "Camera" on runtime.</p>
        </Box>
        <Box>
            <img src={step3} alt="mobile" className={classes.firstimg}/>
        </Box>
    </Box>
    {/* Forth step */}
    <Box display="flex" justifyContent="space-evenly" className={classes.step2} >
    <Box>
            <img src={step4} alt="mobile" className={classes.firstimg}/>
        </Box>
        <Box>
            <h3>(4) Forth Step:</h3>
            <p  className={classes.para}>For perfect image of cotton leaf, you have to capture an Images
            with fine angels and suitale light.</p>
        </Box>
    </Box>
    {/* Fifth Step */}
    <Box display="flex" justifyContent="space-evenly" className={classes.step1} >
        <Box>
            <h3>(5) Fifth Step:</h3>
            <p className={classes.para}>After login to an App, the dashboard will show you the option of 
            image upload from "Choose from device" (Pc, Mobile, Tablet) or from "Camera" on runtime.</p>
        </Box>
        <Box>
            <img src={step5} alt="mobile" className={classes.firstimg}/>
        </Box>
    </Box>
    </>
  )
}
const useStyles= makeStyles((theme)=>({
step1: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "80px 20px",
    [theme.breakpoints.down("sm")]:
    {
        flexDirection: "column",
         alignItems: "center",
    },
},
step2: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 20,
    [theme.breakpoints.down("sm")]:
    {
        flexDirection: "column-reverse",
        alignItems: "center",
    },
},
"para": {
 width: 400,
 opacity: 0.8,
 [theme.breakpoints.down("md")]:
    {
        width: 300,
    },
},
firstimg: {
    width: 400,
    borderRadius: 5,
    boxShadow: "0px 0px 16px 1px #343131",
    [theme.breakpoints.down("xs")]:
    {
    width: 300,
    },
},
}))
export default Tutorial