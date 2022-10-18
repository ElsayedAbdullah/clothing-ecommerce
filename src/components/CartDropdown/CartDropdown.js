import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />) : <EmptyMessage>Your cart is empty</EmptyMessage>}
      </CartItems>
      <CustomButton onClick={goToCheckoutPage}>Go to Checkout</CustomButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
