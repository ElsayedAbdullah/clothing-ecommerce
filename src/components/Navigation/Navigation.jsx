import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";
import Logo from "../../assests/crown.svg";
import { auth } from "../../utils/firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { useSelector } from "react-redux";

const Navigation = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const hidden = useSelector(state => state.cart.hidden);
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
          <div className="nav-link" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="nav-link" to="signin">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? "" : <CartDropdown />}
    </div>
    <Outlet />
    </>
  );
};

export default Navigation;
