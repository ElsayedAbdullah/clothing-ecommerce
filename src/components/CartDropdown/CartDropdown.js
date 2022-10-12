import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import './CartDropdown.scss'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  console.log(cartItems);
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        {cartItems.map(item=> <CartItem key={item.id} item={item} />)}
      </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  )
}

export default CartDropdown