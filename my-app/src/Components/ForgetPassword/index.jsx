import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../HTTP/APIs";

export default function MultilineTextFields() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const res = await getLogin({ email, password });
      window.alert(`SucessFully Login \n ${res.data.user.name}`);
      navigate("/dashboard");
      // if(res.)
    } catch (err) {
      window.alert(err.response.data.message);
    }
  };
  return (
    <>
      <div className={classes.outer_most}>
        <form
          onSubmit={handleSubmit}
          className={classes.form_outer}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={classes.password}
            variant="outlined"
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            value={data.password}
            onChange={inputHandler}
          />
          <TextField
            className={classes.password}
            variant="outlined"
            margin="normal"
            required
            name="confirm password"
            label="Confirm Password"
            type="password"
            id="Confirm password"
            value={data.confirmpassword}
            onChange={inputHandler}
          />
          <button className={classes.btn}>Submit</button>
        </form>
      </div>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  outer_most: {
    display: "flex",
    justifyContent: "center",
    margin: "40px 20px",
    borderRadius: "10px",
  },
  form_outer: {
    display: "flex",
    flexDirection: "column",
    width: 450,
    background: "#448950",
    margin: "40px 20px",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
  },
  password: {
    margin: 20,
    color: "white",
  },

  btn: {
    height: 50,
    fontWeight: 600,
    margin: 20,
    background: "#1a73e8",
    color: "white",
    border: "1px solid white",
    borderRadius: "5px",
    "&:hover": {
      opacity: "0.7",
    },
  },
}));
