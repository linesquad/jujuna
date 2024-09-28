import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Cocktails from "./pages/Cocktails";
import News from "./pages/News";
import Wines from "./pages/Wines";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import WineDetails from "./components/wineComponents/singleWineComponents/SingleWine";
import NewsDetails from "./components/newsComponents/NewsDetails";
import CocktailDetails from "./pages/CocktailDetails";
import UserPage from "./pages/UserPage";
import DisplayWines from "./components/wineComponents/DisplayWines";
import DisplayCocktails from "./components/cocktailsComponents/DisplayCocktails";
import UserDashboard from "./pages/UserDashboard";
import UserOrders from "./pages/UserOrders";
import UserAddress from "./pages/UserAddress";
import UserReviews from "./pages/UserReviews";
import UserSettings from "./pages/UserSettings";
import DisplayCheckoutInfo from "./components/checkout/DisplayCheckoutInfo";
import Checkout from "./pages/Checkout";
import DisplayOrders from "./components/userPageComponents/ordersComponents/DisplayOrders";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/cocktail" element={<Cocktails />}>
          <Route
            path="/cocktail"
            element={<Navigate to="/cocktail/default/allCocktail" />}
          />
          <Route
            path="/cocktail/:layoutName/:categoryId"
            element={<DisplayCocktails />}
          />
        </Route>
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/wines" element={<Wines />}>
          <Route
            path="/wines"
            element={<Navigate to="/wines/default/allWines" />}
          />
          <Route
            path="/wines/:layoutName/:categoryId"
            element={<DisplayWines />}
          />
        </Route>

        <Route path="/wine/:id" element={<WineDetails />} />
        <Route path="/cocktails/:id" element={<CocktailDetails />} />
        <Route path="/userPage" element={<UserPage />}>
          <Route
            path="/userPage"
            element={<Navigate to="/userPage/dashboard" />}
          />
          <Route path="/userPage/dashboard" element={<UserDashboard />} />
          <Route path="/userPage/orders" element={<UserOrders />}>
            <Route
              path="/userPage/orders"
              element={<Navigate to="/userPage/orders/current" />}
            />
            <Route path="/userPage/orders/:order" element={<DisplayOrders />} />
          </Route>
          <Route path="/userPage/address" element={<UserAddress />} />
          <Route path="/userPage/reviews" element={<UserReviews />} />
          <Route path="/userPage/settings" element={<UserSettings />} />
        </Route>
      </Route>
      <Route path="order" element={<Checkout />} />
      <Route path="/order/:id" element={<DisplayCheckoutInfo />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
