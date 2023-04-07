import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../Features/Slicer";

const Card = (props) => {
  // for order products
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const classes = useStyles();
  const { img, title, disease, price } = props.menuItem;

  const [num, setnum] = useState(0);
  const decNum = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      setnum(0);
    }
  };
  const incNum = () => {
    setnum(num + 1);
  };
  return (
    <>
      <article className={classes.card_contain}>
        <div className={classes.card}>
          <img src={img} alt="hello" className={classes.card_img} />
          <div className={classes.detail}>
            <div className={classes.detail1}>
              <h4 className={classes.name}>{title}</h4>
              <div className={classes.like}>
                <input
                  className={classes.input}
                  id="out"
                  type="text"
                  value={num}
                ></input>
                <button
                  onClick={incNum}
                  style={{ background: "#246559", border: "none" }}
                >
                  <FavoriteIcon style={{ color: "red" }} />
                </button>
              </div>
            </div>
            <div>
              <p className={classes.disease}>{disease}</p>
              <h4 style={{ margin: "5px" }}>Rs: {price} </h4>
            </div>
          </div>
          <div>
            <button
              className={classes.card_btn}
              onClick={() => {
                dispatch(AddToCart(props.menuItem));
              }}
            >
              Order
            </button>
          </div>
        </div>
      </article>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  card_contain: {
    display: "flex",
    gap: "14px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    margin: 20,
    justifyContent: "space-evenly",
    background: "#246559",
    borderRadius: 10,
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 0px 3px 3px #FFF",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  card_img: {
    objectFit: "contain",
    height: 250,
    margin: 10,
    borderRadius: 10,
    [theme.breakpoints.down("lg")]: {
      width: 300,
    },
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  name: {
    margin: 10,
  },
  card_btn: {
    width: 100,
    height: 40,
    margin: 10,
    color: "white",
    backgroundColor: "#1a73e8",
    border: "1px solid #1a73e8",
    borderRadius: 30,
    marginBottom: " 10px",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 0px 3px 3px #1a73e8 ",
      border: "1px solid white",
      backgroundColor: "white",
      color: "#1a73e8",
    },

    [theme.breakpoints.down("xl")]: {
      width: 250,
    },
    [theme.breakpoints.down("md")]: {
      width: 140,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  detail: {
    textAlign: "start",
    padding: "0px 10px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  detail1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  disease: {
    width: 200,
    float: "left",
    opacity: 0.8,
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  like: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    width: 20,
    background: "#246559",
    color: "white",
    border: "none",
  },
}));
export default Card;
