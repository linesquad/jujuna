import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SigninContainer() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
  };
  return (
    <div className="max-h-[600px] rounded-tl-[20px] rounded-tr-[20px] lg:rounded-[20px] bg-white p-14 pb-6 pt-16 w-full max-w-[467px] lg:w-[467px]">
      <div className="space-y-4 mb-6 flex flex-col items-center">
        <button className="w-full py-2 border font-semibold rounded-full">
          {t("enter.signin.authFB")}
        </button>
        <button className="w-full py-2 border font-semibold rounded-full">
          {t("enter.signin.authGoogle")}
        </button>
      </div>

      <div className="space-y-4 mb-6">
        <Link to={"/enter/register"}>
          <p className="text-center my-6 font-semibold">
            {t("enter.signin.dontHaveAccount")}
          </p>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder={t("enter.signin.emailInput")}
            {...register("email", {
              required: t("enter.signin.emailRequired"),
              pattern: {
                value: emailRegex,
                message: t("enter.signin.invalidEmail"),
              },
            })}
            className="w-full px-4 py-2 border rounded-lg "
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder={t("enter.signin.passwordInput")}
            {...register("password", {
              required: t("enter.signin.passwordRequired"),
            })}
            className="w-full px-4 py-2 border rounded-lg mt-4"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <div className="flex items-center my-5">
            <input
              type="checkbox"
              id="remember"
              {...register("remember")}
              className="appearance-none h-4 w-4 bg-gray-300 rounded-full checked:bg-purple-800 checked:border-transparent focus:outline-none cursor-pointer mr-2"
            />
            <label
              htmlFor="remember"
              className="cursor-pointer text-sm font-medium"
            >
              {t("enter.signin.remember")}
            </label>
          </div>

          <p className="text-left text-gray-600 mb-4">
            {t("enter.signin.forgot")}
          </p>
          <button
            type="submit"
            className="w-full py-2 mt-8 bg-purple-900 text-white rounded-3xl"
          >
            {t("enter.signin.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninContainer;
