import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

function RegisterContainer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z]).{4,}$/;

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
    navigate("/enter/signin");
  };
  return (
    <div className="max-h-[580px] rounded-tl-[20px] rounded-tr-[20px] lg:rounded-[20px] bg-white p-12 lg:p-16 pt-16 w-full max-w-[467px] md:w-[467px] lg:w-[467px]">
      <div className="space-y-4 mb-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder={t("enter.signup.usernameInput")}
            {...register("username", {
              required: t("enter.signup.usernameRequired"),
            })}
            className="w-full px-4 py-2 border rounded-lg "
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          <input
            type="email"
            placeholder={t("enter.signup.emailInput")}
            {...register("email", {
              required: t("enter.signup.emailRequired"),
              pattern: {
                value: emailRegex,
                message: t("enter.signup.invalidEmail"),
              },
            })}
            className="w-full px-4 py-2 border rounded-lg mt-5"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder={t("enter.signup.passwordInput")}
            {...register("password", {
              required: t("enter.signup.passwordRequired"),
              pattern: {
                value: passwordRegex,
                message:
                  "Password must be at least 4 characters long included uppercase letter",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg mt-5"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            type="password"
            placeholder={t("enter.signup.confirmPasswordInput")}
            {...register("confirmPassword", {
              required: t("enter.signup.confirmRequired"),
              validate: (value) =>
                value === password || t("enter.signup.passwordsDontMatch"),
            })}
            className="w-full px-4 py-2 border rounded-lg mt-5"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          <Link to={"/enter/signin"}>
            <h2 className="text-center my-8 font-semibold">
              {t("enter.signup.haveAccount")}
            </h2>
          </Link>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-purple-900 text-white rounded-3xl smaller:px-20 smallExtra:px-28"
          >
            {t("enter.signup.signupBtn")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterContainer;
