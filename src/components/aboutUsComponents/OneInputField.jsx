function OneInputField({
  label,
  inputType,
  placeholder,
  textType,
  register,
  name,
  isRequired,
  errorMessage,
  error,
  watch,
  pattern,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-[13px]">
      <p className="text-color-black text-[13px] font-medium md:w-[60%] lg:w-[30%] mt-[10px]">
        {label}
      </p>

      <div className="w-full flex flex-col gap-[5px]">
        {textType === "message" ? (
          <>
            <textarea
              className="w-full h-[62px] [box-shadow:0px_2.657px_2.657px_0px_rgba(0,_0,_0,_0.25)] pl-[16px] pt-[10px] rounded-[15px] placeholder:text-[13px] md:w-[100%]"
              placeholder={placeholder}
              name={name}
              maxLength={500}
              {...register(`${name}`, {
                required: {
                  value: isRequired,
                  message: errorMessage,
                },
                pattern: pattern,
              })}
            ></textarea>
            <div className="flex justify-between items-center">
              <span className="pl-[12px] text-red-600 text-[13px] md:text-[15px]">
                {error}
              </span>
              <p className="self-end">{watch().message?.length || 0} / 500</p>
            </div>
          </>
        ) : (
          <>
            <input
              type={inputType}
              placeholder={placeholder}
              name={name}
              className="pl-[16px] py-[10px] text-[13px] w-full [box-shadow:0px_2.657px_2.657px_0px_rgba(0,_0,_0,_0.25)] rounded-[15px] md:w-[100%]"
              {...register(`${name}`, {
                required: {
                  value: isRequired,
                  message: errorMessage,
                },
                pattern: pattern,
              })}
            />
            <span className="pl-[12px] text-red-600 text-[13px] md:text-[15px]">
              {error}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default OneInputField;
