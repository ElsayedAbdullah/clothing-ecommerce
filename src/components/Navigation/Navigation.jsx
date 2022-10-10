import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";
import Logo from "../../assests/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async()=> {
    await signOutUser()
    setCurrentUser(null)
  }
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          <Link className="nav-link" to="contact">
            Contact
          </Link>
          {currentUser ? (
            <div className="nav-link" onClick={signOutHandler}>
              Sign Out
            </div>
          ) : (
            <Link className="nav-link" to="auth">
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
