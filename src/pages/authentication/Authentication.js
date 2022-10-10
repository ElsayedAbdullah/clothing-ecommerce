import React from "react";
import SignIn from "../../components/Signin/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import './Authentication.scss'

const Authentication = () => {
  return <div className="signin-page">
    <SignIn />
    <SignUp />
  </div>;
};

export default Authentication;
