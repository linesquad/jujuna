import Button from "../Button";

/* eslint-disable react/prop-types */
function OneNews({ image, date, title, description, type, bgColor }) {
  return (
    <div className="flex flex-col mt-[33px] w-[400px] md:w-[414px]">
      <div className="w-full h-[347px]">
        <img className="w-full h-full" src={image} alt="bottle-1" />
      </div>
      <div
        className={`flex flex-col px-[20px] py-[15px] bg-[${bgColor}] text-color-primary h-[250px] justify-between`}
      >
        <p className="text-[14px]  font-normal">{date}</p>
        <h2 className="text-[24px] font-normal">{title}</h2>
        <p className="text-[16px] font-normal">{description}</p>
        <div className="self-end">
          <Button type={type}>გაიგე მეტი</Button>
        </div>
      </div>
    </div>
  );
}

export default OneNews;
