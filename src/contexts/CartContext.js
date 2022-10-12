import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0);
    setCartCount(newCount);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
