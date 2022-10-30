import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./pages/authentication/Authentication";
import Checkout from "./pages/checkout/Checkout";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />}></Route>
          <Route path="shop/*" element={<ShopPage />}></Route>
          <Route path="auth" element={<Authentication />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
