import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const LayoutChanger = ({
  layouts,
  activeClass,
  defaultClass,
  iconSize = 30,
  buttonSize = 40,
}) => {
  const { categoryId, layoutName } = useParams();
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true); 
      } else {
        setIsMobile(false)
      }
    };


    handleResize();


    window.addEventListener("resize", handleResize);

 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex space-x-4 mb-2.5">
      {layouts.map((layout) => {
        const isActive = isMobile
          ? layout.name === "default"
          : layout.name === layoutName;

        if (isMobile && (layout.name === "list" || layout.name === "col")) {
          return null;
        }

        return (
          <NavLink
            key={layout.name}
            to={`/wines/${layout.name}/${categoryId}`}
            className={({ isActive: isLinkActive }) =>
              `flex items-center justify-center transition ${
                isActive || isLinkActive ? activeClass : defaultClass
              } ${
                isActive || isLinkActive
                  ? "border-[2px] border-[#6a0dad]"
                  : "border-[1px] border-[#ccc]"
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
        );
      })}
    </div>
  );
};

export default LayoutChanger;
