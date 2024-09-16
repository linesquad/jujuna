import { useTranslation } from "react-i18next";

function OneSubcategory({ item, setCategoryId }) {
  const { i18n } = useTranslation();

  const handleCheckboxChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCategoryId(item._id);
    } else {
      setCategoryId("");
    }
  };

  return (
    <div className="flex items-center gap-[12px]">
      <input
        type="checkbox"
        className="w-[22px] h-[22px] rounded-md border border-[#E9EBEC] flex justify-center items-center cursor-pointer"
        onChange={handleCheckboxChange}
      />
      <span className="w-full">
        {i18n.language === "ge"
          ? item.titleTranslations.ge
          : item.titleTranslations.en}
      </span>
    </div>
  );
}

export default OneSubcategory;
