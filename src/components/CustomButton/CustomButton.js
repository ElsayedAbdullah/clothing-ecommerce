import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./CustomButton.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted"
};

// please review again to full understand
const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => {
  return {
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton
  }[buttonType];
};

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  const Button = getButton(buttonType);
  return <Button {...otherProps}>{children}</Button>;
};
export default CustomButton;
