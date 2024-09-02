import { IoIosClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import FilterItem from "./FilterItem";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useEffect, useRef } from "react";

export default function MobileFilterContainer({ setShowFilter }) {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowFilter]);

  return (
    <div
      ref={containerRef}
      className={`${
        darkMode
          ? "bg-[#12151C] text-white border border-white"
          : "bg-white text-black "
      } z-10  absolute top-10 left-0 w-full max-w-[400px] shadow-[2px_5px_15px_2px_rgba(0,0,0,0.1)] rounded-xl lg:hidden`}
    >
      <div>
        <div className="p-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="tiny:text-[16px] text-xl font-semibold">
              {t("winePage.filter")}
            </h2>
            <IoIosClose
              className="w-8 h-8 cursor-pointer -mr-[6px]"
              onClick={() => setShowFilter(false)}
            />
          </div>

          <div className="mt-4 space-y-2">
            <FilterItem title="ქვეყანა" mobile={true} />
            <FilterItem title="წელი" mobile={true} />
            <FilterItem title="წელი" mobile={true} />
            <FilterItem title="წელი" mobile={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
