import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function EnterOneInfo({
  type,
  placeholder,
  value,
  register,
  name,
  isRequired,
  errorMessage,
  error,
  pattern,
}) {
  const darkMode = useSelector(getMode);

  return (
    <div>
      <input
        type={type}
        className={`w-full py-[10px] pl-[10px] text-[15px] rounded-[10px] ${
          darkMode ? "text-color-primary bg-[#5f3dc4]" : "text-[#000]"
        } text-[#000]`}
        placeholder={placeholder}
        value={value}
        {...register(`${name}`, {
          required: {
            value: isRequired,
            message: errorMessage,
          },
          pattern: pattern,
        })}
      ></input>
      <span className="ml-[5px] text-[13px] text-red-600">{error}</span>
    </div>
  );
}

export default EnterOneInfo;
