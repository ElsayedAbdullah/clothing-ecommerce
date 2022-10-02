import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assests/crown.svg";
import { auth } from "../../firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const hidden = useSelector(state => state.cart.hidden);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="options">
        <Link className="option" to="shop">
          Shop
        </Link>
        <Link className="option" to="contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="signin">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? "" : <CartDropdown />}
    </div>
  );
};

export default Header;
