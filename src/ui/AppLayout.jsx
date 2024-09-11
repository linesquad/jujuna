import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Auth from "../components/authComponents/Auth";
import { useState } from "react";

const AppLayout = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  return (
    <div>
      <Header setIsAuthModalOpen={setIsAuthModalOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isAuthModalOpen && <Auth setIsAuthModalOpen={setIsAuthModalOpen} />}
    </div>
  );
};

export default AppLayout;
