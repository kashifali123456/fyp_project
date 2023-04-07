import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import UploadButtons from "../../Components/UpLoad";
import WebCam from "../../Components/WebCam";
import Up from "../../Components/Up";
const Dashboard = () => {
  const classes = useStyles();
  const [isCamVisible, setIsCamVisible] = useState(false);

  const handleCam = () => {
    setIsCamVisible(!isCamVisible);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.top}>
          <h2 style={{ fontFamily: "cursive" }}>Doctor Cotton</h2>
          <Link to="/onlineorder" className={classes.order}>
            <Button className={classes.online_btn}>Order Online </Button>
          </Link>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <iframe
              className={classes.l}
              src="http://127.0.0.1:5001/"
              style={{}}
              title="Upload Image"
            ></iframe>
          </div>
          <div className={classes.right}>
            <h2>Previous Records</h2>
            <input style={{ width: "300px", height: "200px" }} />
          </div>
        </div>
      </div>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "60px 20px",
  },
  top: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "30px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  l: {
    width: "700px",
    height: "500px",
    border: "1px solid white",
    borderRadius: "10px",
    color: "white",
    boxShadow: "0px 0px 15px",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  order: {
    color: "white",
    textDecoration: "none",
  },
  btn1: {
    height: "40px",
    borderRadius: "20px",
    border: "1px solid white",
    boxShadow: "0px 0px 10px white",
    background: "green",
    color: "white",
    margin: 5,
    "&:hover": {
      opacity: 0.7,
      cursor: "pointer",
    },
  },
  btn2: {
    height: "40px",
    borderRadius: "20px",
    border: "1px solid white",
    boxShadow: "0px 0px 5px white",
    background: "green",
    color: "white",
    margin: 5,
    "&:hover": {
      opacity: 0.7,
      cursor: "pointer",
    },
  },
  online_btn: {
    color: "white",
    background: "#560f0f",
    boxShadow: "0px 0px 5px white",
    border: "1px solid white",
    borderRadius: "60px",
    "&:hover": {
      color: "orange",
      background: "white",
    },
  },
}));

export default Dashboard;
