function WineNavigation({ language }) {
  return (
    <div className="flex justify-center items-center p-2 gap-[20px] md:p-8 md:gap-[100px] size-full bg-[#8A63A2]">
      <a
        href="/wines"
        className="size-20px font-[400] leading-[24.8px] text-white"
      >
        {language === "ge" ? "ყველა ღვინო" : "All Wines"}
      </a>

      <a
        href="/wines"
        className="size-20px font-[400] leading-[24.8px] text-white"
      >
        {language === "ge" ? "თეთრი და ვარდის ღვინო" : "White and Rose Wine"}
      </a>

      <a
        href="/wines"
        className="size-20px font-[400] leading-[24.8px] text-white "
      >
        {language === "ge" ? "წითელი ღვინო" : "Red Wine"}
      </a>

      <a
        href="/wines"
        className="size-20px font-[400] leading-[24.8px] text-white"
      >
        {language === "ge" ? "საჩუქრები" : "Gifts"}
      </a>
    </div>
  );
}

export default WineNavigation;
