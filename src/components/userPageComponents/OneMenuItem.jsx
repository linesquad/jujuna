import { NavLink } from "react-router-dom";

function OneMenuItem({ title, icon: Icon, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `border-l-[3px] ${isActive ? "border-[#724AA4]" : "border-transparent"}`
      }
    >
      {({ isActive }) => (
        <div
          className={`flex items-center gap-[14px] mx-[8px] py-[18px] rounded-[8px] ${
            isActive ? "bg-[#EDF0F2]" : ""
          }`}
        >
          <div className="pl-[16px]">
            <Icon color="#724AA4" size={25} />
          </div>
          <p>{title}</p>
        </div>
      )}
    </NavLink>
  );
}

export default OneMenuItem;
