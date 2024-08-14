import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [checked, setChecked] = useState(false);

  const testUsers = [
    {
      email: "test@gmail.com",
      password: "test1234",
    },
    {
      email: "test1@gmail.com",
      password: "test1111",
    },
  ];

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleChange = () => setChecked((prev) => !prev);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let foundedUser = testUsers.filter(
        (item) => item.email === data.email && item.password === data.password
      );
      if (foundedUser.length === 0) {
        throw new Error("No user was found!");
      }

      console.log("You are logged in");
      
    } catch (error) {
      setError("root", {
        message: error.message,
      });
    }

    // Handle form submission here
  };

  return (
    <div className="flex flex-col items-center w-full h-[500px] sm:h-fit sm:flex-row sm:bg-[linear-gradient(rgba(185,156,203,1),rgba(174,133,204,1),rgba(138,99,162,1))] relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/a45a/1179/130c40b9ecba6bdd997dd72a3bae6b77?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F7VgPjGJgbPAbQ~eYYzsNVzGDMvOrUVZ4Jx3AyUNAlNxmm98lcNwpCkedn6tRz3F0wQQi0fSq8lCwUil~ybQg3h0PAG8Mh-T7C1ki6TIKy44gpe4T5F6v7lUt0otvYm1kX7Tza17TQF0K2UMqxwoRI~a4N5gZ8QtnylXGecUC~47JHdiphu3V6Mb7ZZ7nZRjDATaD29mTC8FsstUsJK55dZ7Z7ldaNpTXBgkNoSbFuKORcrn67QMjGB85HiBYEOLoeE7ynddsOQCIYnv4sGNcbB0enHRnysqX123ta9q7Wte98hZKBwwhpcAbg8zj0EpqZVggikmgdsOjFtlHC1IQA__"
        alt="cocktails"
        className="w-full sm:w-[45%] h-[100vh] bg-bottom object-cover"
      />
      <form
        className="flex flex-col items-center w-full gap-4 absolute bottom-2 sm:static md:w-[367px] xl:w-[967px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-2">
          <Link
            to="/signin"
            className="rounded-[18px] p-1 px-4 bg-backgroundColor-backgroundCol text-[.8rem] sm:text-[.7rem] xl:text-[1rem]"
          >
            რეგისტრაცია
          </Link>
          <Link
            to="/signup"
            className="rounded-[18px] p-1 px-4 bg-backgroundColor-backgroundCol text-[.8rem] sm:text-[.7rem] xl:text-[1rem]"
          >
            ავტორიზაცია
          </Link>
        </div>
        <div className="w-[98%] h-fit rounded bg-white flex flex-col gap-1 xl:gap-3 p-2 xl:p-10 md:w-[367px] xl:w-[467px]">
          <button className="rounded-lg px-5 py-2 border border-[rgba(236, 236, 236, 1)] text-[.8rem] sm:text-[.7rem] xl:text-[1rem] font-bold ease-in-out duration-300 hover:scale-[1.02]">
            ავტორიზაცია Facebook ით
          </button>
          <button className="rounded-lg px-5 py-2 border border-[rgba(236, 236, 236, 1)] text-[.8rem] sm:text-[.7rem] xl:text-[1rem] font-bold ease-in-out duration-300 hover:scale-[1.02]">
            ავტორიზაცია Google ით
          </button>
          {/* we do not need to ask this question here */}
          {/* <p className="text-center my-4 cursor-pointer text-[.8rem] sm:text-[.7rem] xl:text-[1rem]">
            უკვე გაქთ ანგარიში?
          </p> */}
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                }
                return true;
              },
            })}
            type="email"
            className="rounded-2xl px-5 py-2 border border-[rgba(236, 236, 236, 1)] text-[.8rem] sm:text-[.7rem] xl:text-[1rem] focus:outline-none"
            placeholder="Your email"
          />
          {errors?.email && (
            <p className="text-red-500 text-[.8rem] sm:text-[.7rem] xl:text-[1rem]">
              {errors?.email?.message}
            </p>
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            type="password"
            className="rounded-2xl px-5 py-2 border border-[rgba(236, 236, 236, 1)] text-[.8rem] sm:text-[.7rem] xl:text-[1rem] focus:outline-none"
            placeholder="Your password"
          />
          {errors?.password && (
            <p className="text-red-500 text-[.8rem] sm:text-[.7rem] xl:text-[1rem]">
              {errors?.password?.message}
            </p>
          )}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="toggleCheckbox"
              checked={checked}
              onChange={handleChange}
            />
            <label
              htmlFor="toggleCheckbox"
              className="mb-1 text-[.8rem] sm:text-[.7rem] xl:text-[1rem]"
            >
              დამახსოვრება
            </label>
          </div>
          <p className="my-1 cursor-pointer text-[.8rem] sm:text-[.7rem] xl:text-[1rem]">
            პაროლი დამავიწყდა!
          </p>
          <button
            className="bg-buttonColor-primary rounded-2xl text-white py-[6px] text-[.8rem] sm:text-[.7rem] xl:text-[1rem]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "დაელოდეთ..." : "ავტორიზაცია"}
          </button>
          {errors?.root && (
            <p className="text-red-500 text-[.8rem] sm:text-[.7rem] xl:text-[1rem]">
              {errors?.root?.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
