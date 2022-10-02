import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
import { auth, signInWithGoogle } from "../../firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-comp">
        <h2 className="title">I already have an account</h2>
        <p>sign in with your email and password</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" id="email" label="Email" value={this.state.email} handleChange={this.handleChange} required />
          <FormInput type="password" name="password" id="password" label="Password" value={this.state.password} handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
