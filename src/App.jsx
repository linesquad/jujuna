import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Cocktails from "./pages/Cocktails";
import News from "./pages/News";
import Wines from "./pages/Wines";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import { Orders } from "./pages/Orders";
import WineDetails from "./components/wineComponents/singleWineComponents/SingleWine";
import NewsDetails from "./components/newsComponents/NewsDetails";
import CocktailDetails from "./pages/CocktailDetails";
import UserPage from "./pages/UserPage";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    console.log("Cart state:", cart); // Log the cart state whenever it updates
  }, [cart]);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="cocktail" element={<Cocktails />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetails />} />
        <Route path="wines" element={<Wines />} />
        <Route path="orders" element={<Orders />} />
        <Route path="/wines/:id" element={<WineDetails />} />
        <Route path="/cocktails/:id" element={<CocktailDetails />} />
        <Route path="/userPage" element={<UserPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
