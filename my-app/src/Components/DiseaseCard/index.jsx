import React from 'react'
import { makeStyles } from '@material-ui/core'

const DiseaseCard = (props) => {
    const classes = useStyles()
    const { img, des} = props.menuItem;
  return (
    <div>
        <div className={classes.outer}>
        <div className={classes.left}>
            <img src={img} alt=" " className={classes.card_img}/>
        </div>
        <div className={classes.right}>
            <p className={classes.card_para}>{des}</p>
            </div>
        </div>
    </div>
  )
}
const useStyles = makeStyles((theme)=> ({
outer: {
    width: "320px",
    display: "flex",
    flexDirection: "column",
    background: "#437b5e",
    border: "none",
    borderRadius:"5px",
    [theme.breakpoints.down("xs")]: {
        width: "250px", 
    },
    
},
    card_img: {
    width: "320px",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    [theme.breakpoints.down("xs")]: {
        width: "250px", 
    },
},
 
right: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
},
card_para: {
    color: "white",
    fontSize: "1.0420rem",
},
}))
export default DiseaseCard