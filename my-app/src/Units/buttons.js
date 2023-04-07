import React from "react";
import "./buttons.css";
const STYLES = [
  "btn--primary--solid",
  "btn--secondary--solid",
  "btn--success--solid",
  "btn--white--solid",
  "btn--white--outlined",
  "btn--black--solid",
  "btn--black--outlined",
  "btn--primary--outlined",
  "btn--secondary--outlined",
  "btn--success--outlined",
];
const SIZES = ["btn--medium", "btn--large"];
export const Buttons = ({
  children,
  buttonSize,
  buttonStyle,
  onClick,
  type,
  className,
}) => {
  const checkButtonStyles = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyles} ${checkButtonSizes} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
