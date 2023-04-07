import React from "react";
import { Grid, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { makeStyles } from "@material-ui/core";


const Footer = () => {
    const classes = useStyles()
  return (
    <Grid container className={classes.footer_container}>
      <Grid
        container
        xs={12} 
        alignItems="center"
        justifyContent="center"
        className={classes.footer}
      > 
          <Link
            className={classes.icons}
            href="https://facebook.com"
            target="_blank"
            style={{ color: "#2929d3" }}
          >
            <FacebookIcon />{" "}
          </Link>
          <Link
            className={classes.icons}
            href="https://twitter.com"
            target="_blank"
            style={{ color: "rgb(34 120 227)" }}
          >
            <TwitterIcon />
          </Link>
          <Link
            className={classes.icons}
            href="https://instagram.com"
            target="_blank"
            style={{ color: "rgb(163 45 159)" }}
          >
            <InstagramIcon />
          </Link>
          <Link
            className={classes.icons}
            href="https://linkedin.com"
            target="_blank"
            style={{ color: "rgb(23 34 175)" }}
          >
            <LinkedInIcon />
          </Link>
          <Link
           className={classes.icons}
            href="https://www.pinterest.com"
            target="_blank"
            style={{ color: "rgb(169 24 24)" }}
          >
            <PinterestIcon />
          </Link>
        </Grid>
        <Grid item xs={12} className={classes.links}>
          <div class="credit">
            created by <span>Mr. DoctorCotton Designers (Kashi Bhaii)</span> | all rights
            reserved
          </div>
        </Grid>{" "}
      </Grid>
  );
};

const useStyles = makeStyles((theme)=>({
    footer_container: {
        background: "linear-gradient(90deg,#082d18,#018736)",
        boxShadow: "0px 0px 18px #081a22",
    },
    footer: {
         margin: 20,
      },
      icons: {
          padding: 20,
          cursor: "pointer",
          "&:hover": {
          opacity: "0.7", 
        }
      },
      links: {
          margin: 10,
      },
      
}))
export default Footer;