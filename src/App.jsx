import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
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
import DisplayWines from "./components/wineComponents/DisplayWines";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/cocktail" element={<Cocktails />} />
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
        <Route path="orders" element={<Orders />} />
        <Route path="/wine/:id" element={<WineDetails />} />
        <Route path="/cocktails/:id" element={<CocktailDetails />} />
        <Route path="/userPage" element={<UserPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
