import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function Signin() {
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
    <div className="rounded-bl-[0px] rounded-br-[0px] rounded-tl-[20px] rounded-tr-[20px] lg:rounded-[20px] lg:mb-20  bg-white p-14 pt-16 w-full max-w-[467px]">
      <div className="space-y-4 mb-6">
        <button className="w-full py-2 border font-semibold rounded-full">
          {t("enter.authFB")}
        </button>
        <button className="w-full py-2 border font-semibold rounded-full">
          {t("enter.authGoogle")}
        </button>
      </div>

      <div className="space-y-4 mb-6">
        <h2 className="text-center my-10 font-semibold">
          {t("enter.haveAccount")}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder={t("enter.emailInput")}
            {...register("email", {
              required: t("enter.emailRequired"),
              pattern: {
                value: emailRegex,
                message: t("enter.invalidEmail"),
              },
            })}
            className="w-full px-4 py-2 border rounded-lg "
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder={t("enter.passwordInput")}
            {...register("password", {
              required: t("enter.passwordRequired"),
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
              {t("enter.remember")}
            </label>
          </div>

          <p className="text-left text-gray-600 mb-4">{t("enter.forgot")}</p>
          <button
            type="submit"
            className="w-full py-2 mt-8 bg-purple-900 text-white rounded-3xl"
          >
            {t("enter.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
