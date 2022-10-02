import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cartSelector';
import CheckoutItem from '../../CheckoutItem/CheckoutItem';
import './Checkout.scss'

const Checkout = () => {
  const CartItems = useSelector(state => state);
  const cartItems = selectCartItems(CartItems);
  const cartTotal = useSelector(state => state);
  const total = selectCartTotal(cartTotal);
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

export default Checkout