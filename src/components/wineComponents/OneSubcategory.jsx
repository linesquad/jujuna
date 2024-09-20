import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

function OneSubcategory({ item, setCategoryId, pageUrl }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const { layoutName: layout, categoryId } = useParams();

  const handleCheckboxChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCategoryId(item._id);
      navigate(`/${pageUrl}/${layout}/${item._id}`);
    } else {
      setCategoryId("");
      navigate(`/${pageUrl}/${layout}/all${pageUrl}`);
    }
  };

  return (
    <div className="flex items-center gap-[12px]">
      <input
        type="checkbox"
        className="w-[22px] h-[22px] rounded-md border border-[#E9EBEC] flex justify-center items-center cursor-pointer"
        checked={categoryId === item._id}
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
