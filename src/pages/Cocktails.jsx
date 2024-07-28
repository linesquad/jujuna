import React from "react";
import useCocktails from "../hooks/useCocktails";
import LoadingSpinner from "../components/LoadingSpinner";
import OneCocktail from "../components/landingComponents/OneCocktail";

function CockTail() {
  const { isLoading, data, isError, error } = useCocktails();
  console.log(data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="კოქტეილი" className="mt-2 xl:mx-20 ">
      <h1 className="dark:text-white xl:text-[64px] font-tommaso text-[48px] text-black ml-[22px]">
        კოკტეილი
      </h1>
      <div className="xl:grid xl:grid-cols-2 xl:gap-[23px]">
        {data &&
          data.map((item, index) => (
            <OneCocktail
              key={index}
              title={item.name}
              image={item.image}
              ingredients={item.ingredients}
              size={`${index == 0 ? "small" : ""}`}
            />
          ))}
      </div>
    </div>
  );
}

export default CockTail;
