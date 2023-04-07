import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "@material-ui/core";
// import DrFadia from "../../Assets/Images/DrFadiaShah.jpg";
import kashi from "../../Assets/Images/kashi.jpeg";
import nano from "../../Assets/Images/nano.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PersonIcon from "@material-ui/icons/Person";

const First = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        {/* Dr. Fadia Shah */}
        <div className={classes.nano}>
          <div className={classes.pic_div}>
            {/* <img src={DrFadia} alt="kashi" className={classes.pic}/> */}
            <PersonIcon className={classes.person} />
          </div>
          <div className={classes.intro}>
            <h1 style={{ fontFamily: "cursive" }}>Dr. Fadia Shah</h1>
            <h4>- Assistant Professor</h4>
            <p style={{ margin: "10px" }}>
              Institute: PhD – Computer Science (University of Electronic
              Science and Technology of China) – 2019
            </p>
            <p>E-mail: dr.fadia@szabist-isb.edu.pk</p>
            <div className={classes.links}>
              <p>follow us on: </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link
                  className={classes.icons}
                  href="https://facebook.com"
                  target="_blank"
                  style={{
                    color: "#2929d3",
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    color: "black",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "10px",
                  }}
                >
                  <GitHubIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* fist person */}
        <div className={classes.kashi}>
          <div className={classes.intro}>
            <h1 style={{ fontFamily: "cursive" }}>Kashif Ali</h1>
            <h4>BSSE (Software Engineer)</h4>
            <p style={{ margin: "10px" }}>
              Institute: Shaheed Zulfikar Ali Bhutto Institute of Science and
              Technology Islamabad, Pakistan
            </p>
            <div className={classes.links}>
              <p>follow us on: </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link
                  className={classes.icons}
                  href="https://facebook.com"
                  target="_blank"
                  style={{
                    color: "#2929d3",
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    color: "black",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "10px",
                  }}
                >
                  <GitHubIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.pic_div}>
            <img src={kashi} alt="kashi" className={classes.pic} />
          </div>
        </div>
        {/* Second Person */}
        <div className={classes.nano}>
          <div className={classes.pic_div}>
            <img src={nano} alt="kashi" className={classes.pic} />
          </div>
          <div className={classes.intro}>
            <h1 style={{ fontFamily: "cursive" }}>Hasnain Mubarak</h1>
            <h4>BSSE (Software Engineer)</h4>
            <p style={{ margin: "10px" }}>
              Institute: Shaheed Zulfikar Ali Bhutto Institute of Science and
              Technology Islamabad, Pakistan
            </p>
            <div className={classes.links}>
              <p>follow us on: </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link
                  className={classes.icons}
                  href="https://facebook.com"
                  target="_blank"
                  style={{
                    color: "#2929d3",
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    backgroundColor: "#e0e0e0",
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
                    color: "black",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "10px",
                  }}
                >
                  <GitHubIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "60px 20px",
  },
  person: {
    fontSize: 400,
    [theme.breakpoints.down("sm")]: {
      fontSize: 350,
    },
  },
  kashi: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "80px 20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  pic: {
    width: 450,
    height: 450,
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 250,
    },
  },
  nano: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "80px 20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
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
      padding: 5,
    },
  },
  links: {
    margin: 10,
  },
}));
export default First;
