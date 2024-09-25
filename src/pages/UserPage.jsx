import { Link, Outlet } from "react-router-dom";
import UserPageMenu from "../components/userPageComponents/dashboardComponents/UserPageMenu";
import Wrapper from "../components/Wrapper";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import MobileMenu from "../components/userPageComponents/dashboardComponents/MobileMenu";
import { AnimatePresence } from "framer-motion";

function UserPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-[#F8FAFC]">
      <Wrapper>
        <div className="flex items-start pt-[28px] md:pt-[48px] gap-[72px] pb-[100px]">
          <div className="hidden md:block">
            <UserPageMenu />
          </div>
          <div className="flex flex-col w-full">
            <div className="md:hidden flex justify-between items-center px-[10px]">
              <Link to={-1}>
                <FaArrowLeft />
              </Link>
              <p onClick={() => setIsMenuOpen(true)}>Menu</p>
              <AnimatePresence>
                {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
              </AnimatePresence>
            </div>
            <div className="mt-[20px] md:mt-[56px]">
              <Outlet />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default UserPage;
