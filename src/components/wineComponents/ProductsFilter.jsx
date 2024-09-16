import { useState } from "react";
import ReactSlider from "react-slider";
import FilterItem from "./FilterItem";
import { useTranslation } from "react-i18next";

export default function ProductsFilter({
  minValue,
  maxValue,
  categories,
  setCategoryId,
}) {
  const [sliderValues, setSliderValues] = useState([]);
  const { i18n } = useTranslation();

  return (
    <div className="hidden lg:block h-96 w-[200px]">
      <p className="text-[#78808C] text-[14px]">ფილტრი</p>
      <p className="text-[18px] mt-[24px] text-[#141516] font-medium">ფასი</p>

      <div className="mt-[20px] flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <input
            type="text"
            defaultValue={minValue}
            value={sliderValues[0]}
            className="h-[30px] w-[60px] pl-[10px] border border-[#eaeaea] rounded-[6px]"
          />
          <p className="text-[#78808C] text-[14px]">ლ</p>
        </div>
        <div className="flex items-center gap-[6px]">
          <input
            type="text"
            defaultValue={maxValue}
            value={sliderValues[1]}
            className="h-[30px] w-[60px] pl-[10px] border border-[#eaeaea] rounded-[6px]"
          />
          <p className="text-[#78808C] text-[14px]">ლ</p>
        </div>
      </div>
      <div className="mt-[23px]">
        <ReactSlider
          className="horizontal-slider "
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[minValue, maxValue]}
          max={maxValue}
          min={minValue}
          onChange={(value) => setSliderValues(value)}
        />
      </div>
      <div className="mt-[90px] flex flex-col gap-[21px]">
        {categories?.map((item) => {
          return (
            <FilterItem
              key={item._id}
              title={
                i18n.language === "ge"
                  ? item.titleTranslations.ge
                  : item.titleTranslations.en
              }
              subCategories={item.subCategories}
              setCategoryId={setCategoryId}
            />
          );
        })}
      </div>
    </div>
  );
}
