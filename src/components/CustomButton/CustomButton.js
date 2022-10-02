import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button {...otherProps} className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}>
      {children}
    </button>
  );
};
export default CustomButton;
