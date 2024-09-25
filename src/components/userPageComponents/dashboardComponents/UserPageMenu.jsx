import OneMenuItem from "./OneMenuItem";
import { FaThLarge } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";

function UserPageMenu({ setIsMenuOpen }) {
  const menuItems = [
    {
      id: "1",
      title: "Dashboard",
      icon: FaThLarge,
      path: "/userPage/dashboard",
    },
    {
      id: "2",
      title: "Orders",
      icon: FaClipboardList,
      path: "/userPage/orders",
    },
    {
      id: "3",
      title: "Address",
      icon: FaMapMarkerAlt,
      path: "/userPage/address",
    },
    {
      id: "4",
      title: "Reviews",
      icon: FaStar,
      path: "/userPage/reviews",
    },
    {
      id: "5",
      title: "Settings",
      icon: FaCog,
      path: "/userPage/settings",
    },
  ];

  return (
    <div className="w-full h-screen mt-[30px] md:mt-[0px]">
      <h2 className="text-[30px] text-[#222528] font-semibold ml-[24px]">
        My account
      </h2>
      <div className="mt-[20px] w-full md:w-[302px] h-[700px] pt-[32px] pb-[30px] md:[box-shadow:1px_1px_14px_0px_rgba(126,_135,_143,_0.2)] rounded-[16px] flex flex-col gap-[8px]">
        {menuItems.map((item) => {
          return (
            <OneMenuItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              path={item.path}
              setIsMenuOpen={setIsMenuOpen}
            />
          );
        })}
        <div className="mt-[30px] md:mt-auto flex items-center gap-[14px] ml-[24px] cursor-pointer">
          <FaDoorOpen color="#724AA4" size={25} />
          <p className="text-[#222528] font-medium">Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default UserPageMenu;
