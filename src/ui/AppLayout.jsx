import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Auth from "../components/authComponents/Auth";
import { useState } from "react";

const AppLayout = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const accesToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  return (
    <div>
      <Header
        setIsAuthModalOpen={setIsAuthModalOpen}
        isAuthModalOpen={isAuthModalOpen}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isAuthModalOpen && !accesToken && !refreshToken && (
        <Auth setIsAuthModalOpen={setIsAuthModalOpen} />
      )}
    </div>
  );
};

export default AppLayout;
