import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CustomButton from "../CustomButton/CustomButton";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const {name, price, imageUrl} = product
  const {addItemToCart} = useContext(CartContext)
  const addProductToCart =()=> {
    return addItemToCart(product)
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton buttonType="inverted" onClick={addProductToCart}>Add to cart</CustomButton>
    </div>
  );
};

export default ProductCard;
