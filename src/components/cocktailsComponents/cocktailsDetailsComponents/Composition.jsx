import { useTranslation } from "react-i18next";

function Composition({ ingredients }) {
  const { i18n } = useTranslation();
  const lngIngredients =
    i18n.language === "ge" ? ingredients.ge : ingredients.en;

  return (
    <div className="mt-[40px] mx-auto max-w-[360px]">
      <h2 className="font-medium text-[16px]">შემადგენლობა:</h2>
      <div className="mt-[24px] flex flex-col gap-[12px]">
        {lngIngredients?.map((item, index) => {
          return (
            <div className="flex gap-[10px] items-center" key={index}>
              <div className="w-[5px] h-[5px] rounded-[50%] bg-[#000]"></div>
              <p className="font-medium text-[16px]">
                {item.split(" - ")[0]}:{" "}
                <span className="text-[#5E636D]">{item.split(" - ")[1]}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Composition;
