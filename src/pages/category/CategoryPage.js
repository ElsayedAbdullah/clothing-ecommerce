import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { selectCategoriesMap } from "../../store/categories/categories.selectors";
import "./CategoryPage.scss";

const CategoryPage = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="category-page">
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-page-container">{products && products.map(product => <ProductCard key={product.id} product={product} />)}</div>
    </div>
  );
};

export default CategoryPage;
