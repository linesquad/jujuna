import { useTranslation } from "react-i18next";

function SingleSameProduct({ item }) {
  const { i18n } = useTranslation();
  console.log(item);
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={item.image}
        alt="cocktail-image"
        className="w-[120px] h-[160px] object-cover"
      />
      <p>{i18n.language === "ge" ? item.name.ge : item.name.ge}</p>
    </div>
  );
}

export default SingleSameProduct;
