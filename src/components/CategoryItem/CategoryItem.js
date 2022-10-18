import React from "react";
import { useNavigate } from "react-router-dom";
import './CategoryItem.styles.jsx'
import { BackgroundImage, CategoryBody, CategoryContainer } from "./CategoryItem.styles";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate()
  return (
    <CategoryContainer onClick={()=>{navigate(`/shop/${title}`)}}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBody>
        <h2>{title}</h2>
        <p>shop now</p>
      </CategoryBody>
    </CategoryContainer>
  );
};

export default CategoryItem;
