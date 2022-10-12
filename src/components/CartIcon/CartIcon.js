import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    return setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
