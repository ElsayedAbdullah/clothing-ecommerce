import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";

import "./SignIn.scss";

const defaultFormFields = { email: "", password: "" };

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("OKAY");

    // sign in with email and password
    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/");
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong password for email");
          break;
        case "auth/user-not-found":
          alert("Incorrect email");
          break;
        default:
          console.log("Error Sign in with this user", err);
      }
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-comp">
      <h2 className="title">Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
        <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>
            Sing in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
