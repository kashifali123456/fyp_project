import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Badge } from "@material-ui/core";

const DrawerComponent = ({ openDrawer, handleDrawerClose }) => {
  const classes = useStyles();
  const {
    cartData: { selection },
  } = useSelector((state) => state);
  return (
    <>
      <Drawer anchor="right" open={openDrawer}>
        <List>
          <ChevronRightIcon onClick={handleDrawerClose} />
          <ListItem divider button>
            <ListItemText>
              <Link
                to="/"
                className={classes.anchors}
                onClick={handleDrawerClose}
              >
                Home
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem divider button>
            <ListItemText>
              <Link
                to="/about"
                className={classes.anchors}
                onClick={handleDrawerClose}
              >
                {" "}
                About
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem divider button>
            <ListItemText>
              <Link
                to="/register"
                className={classes.anchors}
                onClick={handleDrawerClose}
              >
                Register{" "}
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem divider button>
            <ListItemText>
              <Link
                to="/tutorial"
                className={classes.anchors}
                onClick={handleDrawerClose}
              >
                {" "}
                Tutorial
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem divider button>
            <ListItemText>
              <Link
                to="/team"
                className={classes.anchors}
                onClick={handleDrawerClose}
              >
                {" "}
                Team
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem divider button>
            <ListItemText>
              <Link
                to="onlineorder"
                className={classes.anchors}
                onClick={handleDrawerClose}
              >
                Online Order
              </Link>
            </ListItemText>
          </ListItem>
        </List>
        <Link to="/signin">
          <button className={classes.signin_btn} onClick={handleDrawerClose}>
            {" "}
            Sign In
          </button>
        </Link>
        <Link to="/cart">
          <button className={classes.shopping_btn}>
            <Badge style={{ color: "white" }} badgeContent={selection.length}>
              <ShoppingCartIcon style={{ color: "white" }} />
            </Badge>
          </button>
        </Link>
      </Drawer>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  signin_btn: {
    width: "100px",
    height: "25px",
    margin: "10px 20px",
    fontSize: "10px",
    backgroundColor: "#1a73e8",
    color: "white",
    borderRadius: 5,
    border: "1px solid white",
  },
  anchors: {
    textDecoration: "none",
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
    margin: "10px 40px",
  },
}));
export default DrawerComponent;
