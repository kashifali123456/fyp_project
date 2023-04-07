import React from "react";
import { makeStyles } from "@material-ui/core";

const About = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.points_div}>
          <h2>Cotton Disease Detection</h2>
          <p className={classes.points_para}>
            Our system takes data from users in the form of image and it will do
            the predictions on the based of that data. Our system will work on
            the basis of image processing, which enables us to detect the
            disease by comparing it with existing data.
          </p>
        </div>

        <div className={classes.points_div}>
          <h2>Suggest a suitable Pesticides</h2>
          <p className={classes.points_para}>
            Farmers in the past had difficulty in selecting the appropriate
            pesticides for serious diseases of cotton. By considering features
            of image, our system will detect the type of disease and suggest a
            best suitable pesticide.
          </p>
        </div>
        <div className={classes.points_div}>
          <h2>Automated Management for the Farmers</h2>
          <p className={classes.points_para}>
            Records management is the supervision and administration of digital
            or paper records, regardless of format. It includs all the
            activities of user. Records management activities include the
            creation, receipt, maintenance, use and disposal of records. In this
            context, a record is content that documents a business transaction.{" "}
          </p>
        </div>
        <div className={classes.points_div}>
          <h2>Online Pesticides Ordering System</h2>
          <p className={classes.points_para}>
            An online pesticides ordering system can be defined as software that
            allows shop businesses to accept and manage orders placed over the
            internet. Our website is for customers to view the cotton disease
            pesticides and place an online order.
          </p>
        </div>
      </div>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "60px 20px",
    "& h2": {
      fontFamily: "cursive",
      [theme.breakpoints.down("sm")]: {
        padding: "10px",
      },
    },
  },
  points_div: {
    margin: "40px 20px",
  },
  points_para: {
    opacity: 0.7,
    padding: "0px 150px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 40px",
    },
  },
}));
export default About;
