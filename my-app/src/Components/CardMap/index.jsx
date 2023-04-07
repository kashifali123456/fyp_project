import React from 'react';
import Card from "../Card";
import {data} from "../../Data";
import { makeStyles } from '@material-ui/core';

const CardMap = () => {
    const classes = useStyles()
  return <>
   
  <div className={classes.section_card}> 
      {data.map((menuItem) => {
      return <Card menuItem= {menuItem} />
      })}
  </div>

  </>
};
const useStyles = makeStyles((theme)=>({
    section_card: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "14px",
        margin: 10,
        borderRadius: 5,
    },
}))
export default CardMap;