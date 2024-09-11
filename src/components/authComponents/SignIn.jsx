import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useLogin } from "../../hooks/useLogin";

const SignIn = () => {
  const { i18n } = useTranslation();
  const { mutate: login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(data) {
    login(data);
  }

  return (
    <div className="mx-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm mx-auto mt-6"
      >
        <div>
          <label className="block font-bold mb-1" htmlFor="email">
            {i18n.language === "ge" ? "მეილი*" : "email*"}
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required:
                i18n.language === "ge"
                  ? "მეილი სავალდებულოა"
                  : "email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  i18n.language === "ge"
                    ? "მეილი არავალიდურია"
                    : "Invalid email address",
              },
            })}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none ${
              errors.email ? "border-red-500" : "border-[#8F8F8F]"
            }`}
            placeholder={`${i18n.language === "ge" ? "მეილი" : "email"}`}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block font-bold mb-1" htmlFor="password">
            {i18n.language === "ge" ? "პაროლი" : "password*"}
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required:
                  i18n.language === "ge"
                    ? "პაროლი სავალდებულოა"
                    : "password is required",
              })}
              className={`w-full px-4 py-2 border rounded-full focus:outline-none ${
                errors.password ? "border-red-500" : "border-[#8F8F8F]"
              }`}
              placeholder={`${i18n.language === "ge" ? "პაროლი" : "password"}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500 focus:outline-none"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <p className="font-bold ">
          {i18n.language === "ge" ? "დაგავიწყდა პაროლი?" : "Forgot password?"}
        </p>

        <div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800"
          >
            {i18n.language === "ge" ? "შესვლა" : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
