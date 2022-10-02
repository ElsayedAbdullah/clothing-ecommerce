import React from "react";
import { useDispatch } from "react-redux";
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cartActions";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={()=> dispatch(removeItem(cartItem))}>&#10094;</div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={()=> dispatch(addItem(cartItem))}>&#10095;</div>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button">
        <button onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
