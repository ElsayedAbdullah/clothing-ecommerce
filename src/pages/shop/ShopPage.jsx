import React, { useEffect } from "react";
import "./ShopPage.scss";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "../category/CategoryPage";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.actions";
import { useDispatch } from "react-redux";

const ShopPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<CategoryPage />}></Route>
    </Routes>
  );
};

export default ShopPage;
