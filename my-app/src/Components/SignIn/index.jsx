import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../HTTP/APIs";
import { Link, useLocation } from "react-router-dom";

export default function MultilineTextFields() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [userLogin, setUserLogin] = useState(null);

  let location = useLocation();
  console.log(location);
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
      if (res.status) {
        setUserLogin(res);

        navigate("/dashboard");
      }

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
            className={classes.email_textarea}
            label="Email / Phone no"
            placeholder="Email / Phone no"
            variant="outlined"
            name="email"
            required
            autoFocus
            value={data.email}
            onChange={inputHandler}
          />

          <TextField
            className={classes.email_textarea}
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
          <button className={classes.btn}>Log In</button>
          <Link to="/forget" className={classes.forget}>
            Forgotten Password?
          </Link>
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
  email_textarea: {
    margin: "20px",
    color: "white",
  },
  password: {
    margin: "20px 10px",
    color: "white",
  },
  icon_button: {
    color: "white",
  },
  btn: {
    height: 50,
    fontWeight: 600,
    margin: "20px",
    background: "#1a73e8",
    color: "white",
    border: "1px solid white",
    borderRadius: "5px",
    "&:hover": {
      opacity: "0.7",
    },
  },
  forget: {
    margin: 20,
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
