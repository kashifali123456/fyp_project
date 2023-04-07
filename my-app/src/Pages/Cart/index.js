import React from "react";
import { Badge } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { remove } from "../../Components/Features/Slicer";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    cartData: { selection },
  } = useSelector((state) => state);
  /// remove
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className={classes.cart_outer}>
      {Boolean(selection.length) && (
        <button style={{ width: "200px", height: "30px" }}>
          Total Items: <Badge badgeContent={selection.length}></Badge>
        </button>
      )}
      {selection.map((menuItem, i) => {
        return (
          <div key={i} className={classes.cart}>
            <h2>{menuItem.title}</h2>
            <p>{menuItem.price}</p>
            <button
              className={classes.remove}
              onClick={() => handleRemove(menuItem.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  cart_outer: {
    margin: 40,
  },
  cart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  remove: {
    height: 30,
    borderRadius: 20,
    border: "none",
    color: " white",
    background: "rgb(169 24 24)",
  },
}));
export default Cart;
