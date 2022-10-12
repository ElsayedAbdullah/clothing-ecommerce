import React from "react";
import './ShopPage.scss'
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const ShopPage = () => {
  const {products} = useContext(ProductsContext)
  return (
    <div className="shop-page">
      {products.map((product)=> {
        return (
          <ProductCard key={product.id} product={product}/>
        )
      })}
    </div>
  );
};

export default ShopPage;
