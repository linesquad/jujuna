import Button from "../Button";

/* eslint-disable react/prop-types */
function OneNews({ image, date, title, description, type, bgColor }) {
  return (
    <div className="flex flex-col  rounded-xl">
      <div className="w-full h-[347px]">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="bottle-1"
        />
      </div>
      <div
        className={`flex flex-col px-[20px] py-[15px] pb-[20px] ${bgColor} text-color-primary h-[255px] justify-between`}
      >
        <p className="text-[14px]  font-normal">{date}</p>
        <h2 className="text-[24px] font-normal">{`${
          title.length > 27 ? title.slice(0, 27) + "..." : title
        }`}</h2>
        <p className="text-[16px] font-normal">{`${description}...`}</p>
        <div className="self-end">
          <Button type={type}>გაიგე მეტი</Button>
        </div>
      </div>
    </div>
  );
}

export default OneNews;
