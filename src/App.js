import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import CollectionPage from "./pages/collection/CollectionPage";
import ShopPage from "./pages/shop/ShopPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./pages/authentication/Authentication";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Homepage />}></Route>
            <Route path="shop" element={<ShopPage />}></Route>
            <Route path={`shop/:collectionId`} element={<CollectionPage />} />
            <Route path="checkout" element={<CheckoutPage />}></Route>
            <Route path="auth" element={<Authentication />}></Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
