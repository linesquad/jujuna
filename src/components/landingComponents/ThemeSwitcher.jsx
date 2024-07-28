import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`text-color-primary cursor-point ${
        darkMode ? "darkMode" : ""
      }`}
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <FiSun className="w-6 h-6" />
      ) : (
        <FiMoon className="w-6 h-6" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
