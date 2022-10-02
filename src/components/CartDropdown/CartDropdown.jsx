import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartTogglerAction } from "../../redux/cart/cartActions";
import { selectCartItems } from "../../redux/cart/cartSelector";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const CartItems = useSelector(state => state);
  const cartItems = selectCartItems(CartItems);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) : <span className="empty-message">Your Cart is empty</span>}</div>
      <CustomButton onClick={()=> {
        navigate('/checkout')
        dispatch(cartTogglerAction())
        }}>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;