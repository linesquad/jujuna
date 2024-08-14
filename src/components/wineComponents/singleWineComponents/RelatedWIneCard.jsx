import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function RelatedWine({ item }) {
  const { name, id } = item;
  const darkMode = useSelector(getMode);

  return (
    <Link to={`/wines/${id}`}>
      <div
        className={`w-full max-w-[260px] md:max-w-[260px] m-auto mb-40 ${
          darkMode
            ? "bg-[#55367B] md:bg-transparent md:border md:border-buttonColor-primary"
            : "transparent md:border md:border-transparent md:shadow-[5px_8px_10px_rgba(0,0,0,0.25)]"
        }   flex flex-col items-center p-4 md:p-6 lg:p-8 cursor-pointer relative`}
      >
        <img
          src="/images/wineheart.png"
          alt="heart"
          className="w-[24px] h-[24px] absolute right-4 md:top-3"
        />
        <img src="/images/bottle.png" alt="cocktail" className="md:w-[100px]" />
        <p className="text-black mt-4">{name.en}</p>
        <div className="flex justify-between mt-[10px] md:mt-[18px]">
          <p className={`${!darkMode && "text-buttonColor-primary"}`}>
            View details
          </p>
        </div>
        <button
          className={`absolute -bottom-20 border-2 p-3 pl-8 pr-8 font-semibold shadow-[5px_8px_10px_rgba(0,0,0,0.25)] ${
            darkMode
              ? "bg-[#55367B] border-transparent text-white"
              : "bg-transparent border-buttonColor-primary text-buttonColor-primary"
          }`}
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
}

export default RelatedWine;
