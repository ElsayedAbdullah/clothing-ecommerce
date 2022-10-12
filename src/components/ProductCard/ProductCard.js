import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const {name, price, imageUrl} = product
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton buttonType="inverted">Add to cart</CustomButton>
    </div>
  );
};

export default ProductCard;
