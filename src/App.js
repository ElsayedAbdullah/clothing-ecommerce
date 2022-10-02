import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/pages/shop/Shop";
import Header from "./components/Header/Header";
import SigninPage from "./components/pages/signin/SigninPage";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom"

import { auth, createUserProfileDocument } from "./firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import Checkout from "./components/pages/checkout/Checkout";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="signin" element={this.props.currentUser? <Navigate to="/" replace /> : <SigninPage /> }></Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
