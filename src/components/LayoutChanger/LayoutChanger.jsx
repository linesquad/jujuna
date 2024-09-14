import { useState } from "react";

const LayoutChanger = ({
  layouts,
  onLayoutChange,
  activeClass,
  defaultClass,
  iconSize = 30,
  buttonSize = 40,
}) => {
  const [activeLayout, setActiveLayout] = useState(layouts[0].name);

  const handleLayoutChange = (layout) => {
    setActiveLayout(layout.name);
    onLayoutChange(layout.name);
  };

  return (
    <div className="flex space-x-4 mb-2.5">
      {layouts.map((layout) => (
        <button
          key={layout.name}
          onClick={() => handleLayoutChange(layout)}
          className={`flex items-center justify-center transition ${
            activeLayout === layout.name ? activeClass : defaultClass
          }`}
          style={{
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
            borderRadius: "5px",
            border:
              activeLayout === layout.name
                ? "2px solid #6a0dad"
                : "1px solid #ccc",
          }}
        >
          <layout.icon size={iconSize} />
        </button>
      ))}
    </div>
  );
};

export default LayoutChanger;
