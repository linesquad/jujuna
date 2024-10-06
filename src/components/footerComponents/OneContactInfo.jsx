import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function OneContactInfo({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
      setShowInfo(true);
    }

    const handleResize = (e) => {
      if (e.matches) {
        setShowInfo(true);
      } else {
        setShowInfo(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="text-color-primary flex items-center gap-[3px]">
        <p className="md:text-[18px]">{title}</p>
        {!showInfo ? (
          <div className="md:hidden" onClick={() => setShowInfo(true)}>
            <FaArrowDown />
          </div>
        ) : (
          <div className="md:hidden" onClick={() => setShowInfo(false)}>
            <FaArrowUp />
          </div>
        )}
      </div>
      {showInfo && <p className="text-color-primary">{info}</p>}
    </div>
  );
}

export default OneContactInfo;
