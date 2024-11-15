import { useState } from "react";
import ReactSlider from "react-slider";
import FilterItem from "./FilterItem";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductsFilter({
  categories,
  setCategoryId,
  categoryId,
  pageUrl,
}) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    layoutName,
    minPrice: minPriceParam,
    maxPrice: maxPriceParam,
  } = useParams();

  const [sliderValues, setSliderValues] = useState([
    parseFloat(minPriceParam?.split("=")[1]) || 0,
    parseFloat(maxPriceParam?.split("=")[1]) || 10000,
  ]);

  const updateUrlWithFilters = (values) => {
    navigate(
      `/wines/${layoutName}/minPrice=${values[0]}/maxPrice=${values[1]}`
    );
  };

  const handleSliderAfterChange = (value) => {
    setSliderValues(value);
    updateUrlWithFilters(value);
  };

  const handleMinPriceChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    const updatedValues = [Math.min(value, sliderValues[1]), sliderValues[1]];
    setSliderValues(updatedValues);
    updateUrlWithFilters(updatedValues);
  };

  const handleMaxPriceChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    const updatedValues = [sliderValues[0], Math.max(value, sliderValues[0])];
    setSliderValues(updatedValues);
    updateUrlWithFilters(updatedValues);
  };

  return (
    <div className="h-[500px] px-[60px] py-[15px] lg:p-0 lg:block lg:h-96 lg:w-[200px]">
      <p className="text-[#78808C] text-[14px]">ფილტრი</p>

      <div className="mt-[30px] flex flex-col gap-[21px]">
        {categories?.map((item) => (
          <FilterItem
            key={item._id}
            title={
              i18n.language === "ge"
                ? item.titleTranslations.ge
                : item.titleTranslations.en
            }
            subCategories={item.subCategories}
            setCategoryId={setCategoryId}
            categoryId={categoryId}
            pageUrl={pageUrl}
          />
        ))}
      </div>

      <p className="text-[18px] mt-[24px] text-[#141516] font-medium">ფასი</p>
      <div className="mt-[20px] flex items-center justify-between">
        
        <div className="flex items-center gap-[6px]">
          <input
            type="text"
            value={sliderValues[0]}
            onChange={handleMinPriceChange}
            className="h-[30px] w-[60px] pl-[10px] border text-black border-[#eaeaea] rounded-[6px]"
          />
          <p className="text-[#78808C] text-[14px]">ლ</p>
        </div>

        <div className="flex items-center gap-[6px]">
          <input
            type="text"
            value={sliderValues[1]}
            onChange={handleMaxPriceChange}
            className="h-[30px] text-black w-[60px] pl-[10px] border border-[#eaeaea] rounded-[6px]"
          />
          <p className="text-[#78808C] text-[14px]">ლ</p>
        </div>
      </div>

 
      <div className="mt-[23px]">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          value={sliderValues}
          max={10000}
          min={0}
          onChange={setSliderValues}
          onAfterChange={handleSliderAfterChange}
        />
      </div>
    </div>
  );
}
