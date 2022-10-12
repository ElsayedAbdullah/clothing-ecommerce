import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./pages/authentication/Authentication";

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />}></Route>
          <Route path="shop" element={<ShopPage />}></Route>
          <Route path="auth" element={<Authentication />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
