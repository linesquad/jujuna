const ModalInfo = ({ title, info }) => {
  return (
    <div className="border-[1.67px] rounded-lg p-5">
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-xl text-gray-500 text-opacity-72">{title}</h1>
        <h1 className="text-black">{info}</h1>
      </div>
    </div>
  );
};

export default ModalInfo;
