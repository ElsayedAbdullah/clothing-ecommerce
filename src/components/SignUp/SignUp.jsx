import React, { useState } from "react";
import { setCurrentUser } from "../../store/user/user.actions";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
// Components
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
// Styles
import "./SignUp.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // check password and confirmPassword are identical
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    // create user with email and password
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName: displayName });
      setCurrentUser(user);
      resetFormFields();
    } catch (err) {
      // checking if email is already in use
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("Error Creation the user", err.message);
      }
    }
  };

  // handle input change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-comp">
      <h2 className="title">Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required />
        <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
        <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
