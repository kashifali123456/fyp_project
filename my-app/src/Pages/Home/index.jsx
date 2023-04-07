import React from "react";
import { makeStyles } from "@material-ui/core";
import cotton from "../../Assets/Images/cotton.jpg";
import Diseases from "../../Components/Diseases";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.left_div}>
          <h1>Doctor Cotton (Disease Detector)</h1>
          <p className={classes.intro}>
            Our proposed App will bring revolution in the agriculture sector by
            automating the treatment of the cotton diseases.The system which we
            are proposing will not only incorporate Image Processing mechanism
            but also provide a management system for farmers to mange their
            profile or data properly. Moreover, it will also help farmers in
            online ordering the required pesticides.
          </p>
          <ul className={classes.points}>
            <li>Cotton Disease Detection </li>
            <li>Suggest a suitable Pesticides</li>
            <li>Automated Management for the Farmers</li>
            <li>Online Pesticides Ordering System</li>
          </ul>
        </div>
        <div className={classes.right_div}>
          <img src={cotton} alt=" " className={classes.intro_img} />
        </div>
      </div>
      {/* <div>
        <h1>hi</h1>
        <ApiData />
      </div> */}
      <div className={classes.diseases}>
        <h2>Common Diseases of Cotton leaf</h2>
        <Diseases />
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "60px 20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  left_div: {
    display: "flex",
    flexDirection: "column",
  },
  intro: {
    fontFamily: "cursive",
    padding: "10px 150px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  intro_img: {
    width: 450,
    height: 400,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: 350,
      height: 300,
    },
  },
  points: {
    textAlign: "start",
    opacity: 0.7,
    padding: "10px 200px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
    },
  },
}));
export default Home;
