import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../Components/Features/Slicer";

import { makeStyles } from "@material-ui/core";

const ApiData = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    cartData: { allProduct, fail, load, sucess },
  } = useSelector((state) => state);
  console.log(allProduct, "kjg");

  return (
    <div>
      <button
        onClick={() => {
          dispatch(getData());
        }}
      >
        Api Data
      </button>
      <br />
      <div className={classes.api}>
        {load && (
          <div>
            .....Loading.....
            {/* <LoopIcon /> */}
          </div>
        )}
        {sucess &&
          allProduct.map((item) => {
            return (
              <div style={{ margin: "20px" }}>
                <h4 style={{ width: "250px" }}>{item.title}</h4>
                <img
                  key={item.id}
                  src={item.image}
                  alt="bro"
                  style={{ width: "250px", height: "200px" }}
                />
                <h5>{item.price}</h5>
              </div>
            );
          })}
        {fail && <div>"Please Check Your Intenet Connection"</div>}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  api: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
  },
}));
export default ApiData;
