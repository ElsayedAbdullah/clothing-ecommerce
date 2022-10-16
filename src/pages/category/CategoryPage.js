import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import "./CategoryPage.scss";

const CategoryPage = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
