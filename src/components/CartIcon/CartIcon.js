import React from "react";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./CartIcon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    return setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
