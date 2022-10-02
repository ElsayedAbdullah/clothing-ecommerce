import React from "react";
import Cart from "../../assests/shopping-bag.svg";
import "./CartIcon.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartTogglerAction } from "../../redux/cart/cartActions";
import {selectCartItemsCount } from "../../redux/cart/cartSelector";



const CartIcon = () => {
  const cartItems = useSelector(state => state);
  const itemCount = selectCartItemsCount(cartItems)
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(cartTogglerAction())}>
      <img src={Cart} className="shopping-icon" alt="Cart Icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
