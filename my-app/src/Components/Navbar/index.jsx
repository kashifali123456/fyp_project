import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Grid } from "@material-ui/core";
import DrawerComponent from "../Drawer";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import EcoIcon from "@material-ui/icons/Eco";
import { ClickAwayListener } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Badge } from "@material-ui/core";

const Navbar = () => {
  const classes = useStyles();
  const {
    cartData: { selection },
  } = useSelector((state) => state);

  const [openDrawer, setopenDrawer] = useState(false);
  const [userDetails, setUserDetails] = useState("");
  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };
  const handleDrawerClose = () => {
    setopenDrawer(false);
  };
  // proifle dropdown
  const [open1, setOpen1] = React.useState(false);
  const handleClick = () => {
    setOpen1((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen1(false);
  };
  const handleClickClose = () => {
    setOpen1(false);
  };

  const match = useMediaQuery("(max-width: 960px)");
  return (
    <Grid container alignItems="center" className={classes.nav}>
      <Grid item xs={8} sm={8} md={3} lg={3} className={classes.first_grid}>
        <Link to="/" className={classes.icon_name}>
          <EcoIcon style={{ color: "green", fontSize: "xxx-large" }} />
          <h3 style={{ color: "white", fontFamily: "cursive" }}>
            DoctorCotton
          </h3>
        </Link>
      </Grid>
      <Grid item xs={0} sm={0} md={5} lg={5} className={classes.second_grid}>
        {match ? (
          <Grid item xs={4} container justifyContent="center">
            <IconButton className="humberger" onClick={handleDrawerOpen}>
              <MenuIcon className={classes.humberger} />
            </IconButton>
          </Grid>
        ) : (
          <>
            <Link to="/">
              <h5>Home</h5>
            </Link>
            <Link to="/about">
              <h5>About</h5>
            </Link>
            <Link to="/register">
              <h5>Register</h5>
            </Link>
            <Link to="/tutorial">
              <h5>Tutorial</h5>
            </Link>
            <Link to="/team">
              <h5>Team</h5>
            </Link>
            {/* <Link to="/onlineorder">
              <h5>Online Order</h5>
            </Link> */}
          </>
        )}
        <DrawerComponent
          openDrawer={openDrawer}
          handleDrawerClose={handleDrawerClose}
        />
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} className={classes.third_grid}>
        <Link to="/signin" state={{ user: "aple" }}>
          <button className={classes.signin_btn}>Sign In</button>
        </Link>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} className={classes.forth_grid}>
        <Link to="/cart">
          {/* <button className={classes.shopping_btn}> */}
          <Badge
            style={{ color: "white", marginRight: "10px" }}
            badgeContent={selection.length}
          >
            <ShoppingCartIcon style={{ color: "white" }} />
          </Badge>
          {/* </button> */}
        </Link>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.root1}>
            <AccountCircleIcon
              style={{ color: "white" }}
              onClick={handleClick}
            />
            {open1 ? (
              <div
                className={classes.profile_dropdown}
                onClick={handleClickClose}
              >
                <Link to="/profile" className={classes.dropdown_anchor}>
                  Profile
                </Link>
                <Link to="/" className={classes.dropdown_anchor}>
                  {" "}
                  Setting
                </Link>
                <Link to="/" className={classes.dropdown_anchor}>
                  {" "}
                  Log out
                </Link>
              </div>
            ) : null}
          </div>
        </ClickAwayListener>
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  nav: {
    background: "linear-gradient(90deg,#082d18,#018736)",
    height: "82px",
    boxShadow: "0px 0px 18px #081a22",
    padding: "0px 20px",
  },
  humberger: {
    color: "white",
  },
  icon_name: {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  logo: {
    width: 146,
    height: 50,
    borderRadius: 50,
    [theme.breakpoints.down("md")]: {
      width: 100,
      height: 35,
    },
  },
  first_grid: {
    alignItems: "center",
  },
  input: {
    color: "black",
    maxHeight: "40px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "white",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "70px",
    },
  },
  search_icon: {
    color: "black",
  },

  second_grid: {
    display: "flex",
    justifyContent: "space-evenly",
    "& h5": {
      color: "#FFFFFF",
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 600,
    },
    "& a": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      order: 4,
    },
  },
  signin_btn: {
    width: "100px",
    height: "25px",
    fontSize: "10px",
    backgroundColor: "#1a73e8",
    color: "white",
    borderRadius: 5,
    border: "1px solid #1a73e8",
    "&:hover": {
      cursor: "pointer",
      opacity: "0.7",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 9,
      width: 100,
    },
  },
  third_grid: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  forth_grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      order: 3,
    },
  },
  shopping_btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: 40,
    marginRight: 10,
    backgroundColor: "#1a73e8",
    border: "none",
    borderRadius: 5,
  },
  root1: {
    position: "relative",
  },
  profile_dropdown: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    width: "130px",
    borderRadius: "10px",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "white",
  },
  dropdown_anchor: {
    color: "green",
    textDecoration: "none",
    padding: 8,
    borderRadius: "10px",
    "&:hover": {
      background: "#e6e6e6",
    },
  },
}));

export default Navbar;
