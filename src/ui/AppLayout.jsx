import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Auth from "../components/authComponents/Auth";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Auth />
    </div>
  );
};

export default AppLayout;
