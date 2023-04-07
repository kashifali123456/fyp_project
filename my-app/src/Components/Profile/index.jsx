import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.nano}>
        <div className={classes.pic_div}>
          <AccountCircleIcon className={classes.pic} />
          <button className={classes.update_img}>Update Image</button>
        </div>
        <div className={classes.intro}>
          <div>
            <label>First Name:</label>
            <h3 style={{ fontFamily: "cursive" }}>Hasnain</h3>
          </div>
          <div>
            <label>Last Name:</label>
            <h3 style={{ fontFamily: "cursive" }}>Mubarak</h3>
          </div>
          <label>Age:</label>
          <h4>22</h4>
          <label>Address</label>
          <h4>District Hunza, Gilgit-Baltistan, Pakistan</h4>
          <div className={classes.links}>
            <p>follow me on: </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Link
                className={classes.icons}
                href="https://facebook.com"
                target="_blank"
                style={{
                  color: "#2929d3",
                  backgroundColor: "teal",
                  borderRadius: "10px",
                }}
              >
                <FacebookIcon />{" "}
              </Link>
              <Link
                className={classes.icons}
                href="https://twitter.com"
                target="_blank"
                style={{
                  color: "rgb(34 120 227)",
                  backgroundColor: "teal",
                  borderRadius: "10px",
                }}
              >
                <TwitterIcon />
              </Link>
              <Link
                className={classes.icons}
                href="https://instagram.com"
                target="_blank"
                style={{
                  color: "rgb(163 45 159)",
                  backgroundColor: "teal",
                  borderRadius: "10px",
                }}
              >
                <InstagramIcon />
              </Link>
              <Link
                className={classes.icons}
                href="https://linkedin.com"
                target="_blank"
                style={{
                  color: "rgb(23 34 175)",
                  backgroundColor: "teal",
                  borderRadius: "10px",
                }}
              >
                <LinkedInIcon />
              </Link>
              <Link
                className={classes.icons}
                href="https://www.github.com"
                target="_blank"
                style={{
                  color: "white",
                  backgroundColor: "teal",
                  borderRadius: "10px",
                }}
              >
                <GitHubIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  nano: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "start",
    margin: 10,
  },
  pic_div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  },
  pic: {
    width: 400,
    height: 400,
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 250,
    },
  },
  update_img: {
    width: 100,
    height: 30,
    borderRadius: 5,
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },

  icons: {
    padding: 15,
    cursor: "pointer",
    "&:hover": {
      opacity: "0.7",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
  links: {
    margin: 10,
  },
}));
export default Profile;
