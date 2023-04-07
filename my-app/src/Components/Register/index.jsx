import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import IconButton from '@material-ui/core/IconButton';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { getSignUp } from "../../HTTP/APIs";
import { Link } from "react-router-dom";

export default function MultilineTextFields() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({ ...data, [name]: value });
  };

  console.log(data, "data");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, username } = data;
    try {
      if (password === confirmPassword) {
        const res = await getSignUp({
          email,
          password,
          confirmPassword,
          username,
        });
      }
      window.alert(`SucessFully SignUp\n `);
      navigate("/");
      // if(res.)
    } catch (err) {
      window.alert(err.response.data?.message);
    }
  };
  return (
    <>
      <div className={classes.outer_most}>
        <form
          className={classes.form_outer}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            className={classes.first_name}
            placeholder="Full Name"
            label="Full Name"
            variant="outlined"
            name="username"
            value={data.username}
            onChange={inputHandler}
            required
            autoFocus
          />

          <TextField
            className={classes.user_name}
            label="Email / Phone no"
            placeholder="Email / Phone no"
            required
            variant="outlined"
            name="email"
            autoComplete="email"
            value={data.email}
            onChange={inputHandler}
          />

          <TextField
            className={classes.user_name}
            variant="outlined"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            value={data.password}
            onChange={inputHandler}
          />
          <div style={{ display: "flex", justifyContent: "left" }}>
            <p className={classes.password_req}>
              Password must be more than 7 characters
            </p>
          </div>
          <TextField
            className={classes.user_name}
            variant="outlined"
            required
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="password"
            value={data.confirmPassword}
            onChange={inputHandler}
          />
          <button className={classes.btn}>Sign Up</button>
          <Link to="/signin" className={classes.already}>
            Already have an account? Sign in
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
    margin: "60px 20px",
    borderRadius: "10px",
    color: "white",
  },
  form_outer: {
    display: "flex",
    flexDirection: "column",
    width: 450,
    background: "#448950",
    margin: "  20px",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
  },
  full_name: {
    display: "flex",
  },
  first_name: {
    margin: "20px ",
  },
  last_name: {
    margin: "20px",
  },
  user_name: {
    margin: " 20px",
    color: "white",
    "&::placeholder": {
      color: "white",
    },
  },
  email_textarea: {
    margin: "20px",
    color: "white",
  },
  password_req: {
    marginLeft: 20,
    marginTop: "-20px",

    color: "#8b0404",
    [theme.breakpoints.down("sm")]: {
      fontSize: "smaller",
    },
  },
  password: {
    margin: "  10px",
    color: "white",
  },
  confirm_password: {
    margin: "  10px",
    color: "white",
  },
  icon_button: {
    color: "white",
  },
  btn: {
    type: "submit",
    height: 50,
    fontWeight: 600,
    margin: " 20px",
    background: "#1a73e8",
    color: "white",
    border: "1px solid #1a73e8",
    borderRadius: "5px",
    "&:hover": {
      opacity: "0.7",
    },
  },
  already: {
    color: "white",
    textDecoration: "none",
    margin: 20,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
}));
