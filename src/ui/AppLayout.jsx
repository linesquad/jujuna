import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Auth from "../components/authComponents/Auth";

import { useSelector } from "react-redux";

const AppLayout = () => {
  const isAuthModalOpen = useSelector((state) => state.auth.isAuthModalOpen);
  const accesToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isAuthModalOpen && !accesToken && !refreshToken && <Auth />}
    </div>
  );
};

export default AppLayout;
