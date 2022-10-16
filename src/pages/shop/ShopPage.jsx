import React from "react";
import "./ShopPage.scss";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "../category/CategoryPage";

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<CategoryPage />}></Route>
    </Routes>
  );
};

export default ShopPage;
