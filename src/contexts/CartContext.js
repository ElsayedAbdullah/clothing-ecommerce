import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  total: 0
});

// very important logic
const addCartItem = (cartItems, productToAdd) => {
  // check if productToAdd is exist in cartItems
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
  // handle if productToAdd is existing product
  if (existingCartItem) {
    return cartItems.map(cartItem => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }
  // handle if productToAdd is new product
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// decrease cartItems by one if quatity > 1
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  // remove the item if the its quantity is equal to 1
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0);
    setCartCount(newCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((accum, cartItem) => accum + cartItem.price * cartItem.quantity, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = cartItemToRemove => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = cartItemToClear => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
