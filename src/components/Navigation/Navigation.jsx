import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assests/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
import { LogoContainer, NavigationContainer, NavLinks, Navlink } from "./Navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={Logo} alt="Logo" />
        </LogoContainer>
        <NavLinks>
          <Navlink to="shop">Shop</Navlink>
          <Navlink to="contact">Contact</Navlink>
          {currentUser ? (
            <Navlink as="span" onClick={signOutUser}>
              Sign Out
            </Navlink>
          ) : (
            <Navlink to="auth">Sign in</Navlink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
