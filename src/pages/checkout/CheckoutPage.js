import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './Checkout.scss'

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
      <div className="total">Total: ${total}</div>
    </div>
  )
}

export default CheckoutPage