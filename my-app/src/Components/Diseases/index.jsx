import React from 'react';
import DiseaseCard from "../DiseaseCard";
import {data1} from "../../Data";
import { makeStyles } from '@material-ui/core';
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 780, itemsToShow: 2 },
  { width: 960, itemsToShow: 3 },
];
const Diseases = () => {
    const classes = useStyles()
  return <>
  <div className={classes.section_card} >
  <Carousel breakPoints={breakPoints} className={classes.carousel_css} >
      {data1.map((menuItem) => {
      return (
      <div>
        <DiseaseCard menuItem= {menuItem} />
      </div>
      )})}
      </Carousel>
  </div>

  </>
};
const useStyles = makeStyles((theme)=> ({
  heading: {
    padding: "0px 120px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 50px",
    },
  },
  section_card: {
        display: "flex",
         justifyContent:"center",
         margin: "60px 0px",
    },
    carousel_css: {
      wrapAround: "true",
    },
    para: {
        opacity: "0.7",
        padding: "0px 120px",
        [theme.breakpoints.down("sm")]: {
          padding: "0px 50px",
        },
    },
}))
export default Diseases;