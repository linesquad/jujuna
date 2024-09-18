import { NavLink } from "react-router-dom";

const LayoutChanger = ({
  layouts,
  activeClass,
  defaultClass,
  iconSize = 30,
  buttonSize = 40,
}) => {
  return (
    <div className="flex space-x-4 mb-2.5">
      {layouts.map((layout) => (
        <NavLink
          key={layout.name}
          to={`/wines/${layout.name}`}
          className={({ isActive }) =>
            `flex items-center justify-center transition ${
              isActive ? activeClass : defaultClass
            } ${
              isActive
                ? "border-[2px] border-[#6a0dad]"
                : "border-[1px] border-[#ccc"
            }`
          }
          style={{
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
            borderRadius: "5px",
          }}
        >
          <layout.icon size={iconSize} />
        </NavLink>
      ))}
    </div>
  );
};

export default LayoutChanger;
