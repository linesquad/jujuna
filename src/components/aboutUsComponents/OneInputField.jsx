function OneInputField({ label, inputType, placeholder, textType }) {
  return (
    <div className="flex flex-col gap-[13px]">
      <p className="text-color-black text-[13px] font-medium">{label}</p>
      {textType === "message" ? (
        <textarea
          className="w-full h-[62px] [box-shadow:0px_2.657px_2.657px_0px_rgba(0,_0,_0,_0.25)] pl-[16px] pt-[10px] rounded-[15px] placeholder:text-[13px]"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={inputType}
          placeholder={placeholder}
          className="pl-[16px] py-[10px] text-[13px] w-fulls [box-shadow:0px_2.657px_2.657px_0px_rgba(0,_0,_0,_0.25)] rounded-[15px]"
        />
      )}
    </div>
  );
}

export default OneInputField;
