import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";
import Logo from "../../assests/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
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
            <div className="nav-link" onClick={signOutUser}>
              Sign Out
            </div>
          ) : (
            <Link className="nav-link" to="auth">
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
