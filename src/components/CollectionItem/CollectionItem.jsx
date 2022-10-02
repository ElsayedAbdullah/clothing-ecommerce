import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import CustomButton from "../CustomButton/CustomButton";
import "./CollectionItem.scss";

const CollectionItem = ({item}) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
