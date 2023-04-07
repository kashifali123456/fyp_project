import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Up from "../Up";
import { Link } from "react-router-dom";
export default function UploadButtons({ handleCam }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
  
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Up />
      </label>
      <IconButton
        onClick={handleCam}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        <PhotoCamera />
      </IconButton>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
