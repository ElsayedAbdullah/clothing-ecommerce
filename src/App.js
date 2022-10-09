import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin/SigninPage";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { auth, createUserProfileDocument } from "../src/utils/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import CollectionPage from "./pages/collection/CollectionPage";
import ShopPage from "./pages/shop/ShopPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Homepage />}></Route>
            <Route path="shop" element={<ShopPage />}></Route>
            <Route path={`shop/:collectionId`} element={<CollectionPage />} />
            <Route path="checkout" element={<CheckoutPage />}></Route>
            <Route path="signin" element={this.props.currentUser ? <Navigate to="/" replace /> : <SigninPage />}></Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
