import Logo from "../Logo";
import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function Sidebar() {
  const sidebarItems = [
    { id: "1", name: "Dashboard", icon: FaHome, path: "/dashboard" },
    { id: "2", name: "Emails", icon: FaEnvelope, path: "/emails" },
    { id: "3", name: "All Orders", icon: FaFileAlt, path: "/orders" },
    { id: "4", name: "Cocktails", icon: FaCocktail, path: "/cocktails" },
    { id: "5", name: "wines", icon: FaWineGlassAlt, path: "/wines" },
    { id: "6", name: "Contacts", icon: FaUser, path: "/contacts" },
    { id: "7", name: "Settings", icon: FaCog, path: "/settings" },
  ];

  return (
    <div className="w-[223px] h-[870px] bg-[#fff] rounded-[15px] pt-[27px] pb-[22px] pl-[20px]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-[26px] font-tommaso">
            <Logo />
            <p className="text-[18px]">ჟუჟუნა</p>
          </div>
          <div className="mt-[46px] flex flex-col gap-[12px]">
            {sidebarItems.map((item) => {
              return (
                <Link key={item.id} to={item.path}>
                  <div
                    className={`w-[150px] h-[28px] px-[14px] py-[10px] flex items-center rounded-[15px] gap-[16px] ${
                      "1" === item.id ? "bg-[#613994]" : ""
                    }`}
                  >
                    <item.icon
                      size={20}
                      color={`${"1" === item.id ? "#fff" : "#613994"}`}
                    />
                    <p
                      className={`${
                        "1" === item.id ? "text-[#fff]" : "text-[#613994]"
                      }`}
                    >
                      {item.name}
                    </p>
                  </div>
                </Link>
              );
            })}
            <div className="`w-[150px] h-[28px] px-[14px] py-[10px] flex items-center rounded-[15px] gap-[16px]">
              <FaSignOutAlt size={20} color="#FF1E00" />
              <p className="text-[#FF1E00]">Log Out</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <div className="cursor-pointer">
            <FaSun size={20} />
          </div>
          <div className="cursor-pointer">
            <FaMoon size={17} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
