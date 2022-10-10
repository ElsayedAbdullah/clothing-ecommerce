import React from "react";
import "./CustomButton.scss";

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const CustomButton = ({ children, buttonType ,...otherProps }) => {
  return (
    <button {...otherProps} className={`${BUTTON_TYPES_CLASSES[buttonType]} custom-button`}>
      {children}
    </button>
  );
};
export default CustomButton;
