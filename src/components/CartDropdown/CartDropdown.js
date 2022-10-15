import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen)
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton onClick={goToCheckoutPage}>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
