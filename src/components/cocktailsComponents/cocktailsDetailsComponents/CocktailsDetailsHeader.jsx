import rightArrow from "/images/rightArrow.svg";

function CocktailsDetailsHeader({ item }) {
  return (
    <div className="text-[12px] text-[#999797] flex items-center gap-[9px] pt-[26px] pl-[10px]">
      <p>საწყისი გვერდი</p>
      <img src={rightArrow} alt="right-arrow" />
      <p>კოქტეილები</p>
      <img src={rightArrow} alt="right-arrow" />
      <p>{item?.name.ge}</p>
    </div>
  );
}

export default CocktailsDetailsHeader;
