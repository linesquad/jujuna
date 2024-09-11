function OneSignupInput({
  type,
  placeholder,
  register,
  name,
  isRequired = true,
  errorMessage,
  pattern,
  error,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full h-[42px] pl-[10px] py-[13px] rounded-[28px] border-[0.5px] ${
          error ? "border-red-600" : "border-[#8F8F8F]"
        } `}
        {...register(`${name}`, {
          required: {
            value: isRequired,
            message: errorMessage,
          },
          pattern: pattern,
        })}
      />
      <span className="ml-[5px] text-[12px] text-red-600">{error}</span>
    </div>
  );
}

export default OneSignupInput;
