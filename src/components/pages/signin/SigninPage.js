import React from "react";
import SignIn from "../../Signin/SignIn";
import SignUp from "../../SignUp/SignUp";

import './SigninPage.scss'

const SigninPage = () => {
  return <div className="signin-page">
    <SignIn />
    <SignUp />
  </div>;
};

export default SigninPage;
