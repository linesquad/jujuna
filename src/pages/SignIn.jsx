import { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  function handleSubmit() {
    // console.log("hey");
  }
  return (
    <div>
      <div className="flex flex-col gap-4 items-center w-full h-fit  sm:flex-row  sm:bg-[linear-gradient(rgba(185,156,203,1),rgba(174,133,204,1),rgba(138,99,162,1))]">
        <img
          src="https://s3-alpha-sig.figma.com/img/a45a/1179/130c40b9ecba6bdd997dd72a3bae6b77?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F7VgPjGJgbPAbQ~eYYzsNVzGDMvOrUVZ4Jx3AyUNAlNxmm98lcNwpCkedn6tRz3F0wQQi0fSq8lCwUil~ybQg3h0PAG8Mh-T7C1ki6TIKy44gpe4T5F6v7lUt0otvYm1kX7Tza17TQF0K2UMqxwoRI~a4N5gZ8QtnylXGecUC~47JHdiphu3V6Mb7ZZ7nZRjDATaD29mTC8FsstUsJK55dZ7Z7ldaNpTXBgkNoSbFuKORcrn67QMjGB85HiBYEOLoeE7ynddsOQCIYnv4sGNcbB0enHRnysqX123ta9q7Wte98hZKBwwhpcAbg8zj0EpqZVggikmgdsOjFtlHC1IQA__"
          alt="cocktails"
          className="w-full sm:w-[45%] h-[100vh] bg-bottom object-cover bg-cover "
        />
        <form className="flex flex-col w-[267px]  md:w-[367px]  xl:w-[467px] gap-4" onSubmit={handleSubmit()}>
          <div className="flex items-center justify-center gap-2">
            <Link
              to={"/signin"}
              className="rounded-[18px] p-1 px-4 bg-backgroundColor-backgroundCol text-[.5rem] sm:text-[.7rem] xl:text-[1rem]"
            >
              რეგისტრაცია
            </Link>
            <Link
              to={"/signup"}
              className="rounded-[18px] p-1 px-4 bg-backgroundColor-backgroundCol text-[.5rem] sm:text-[.7rem] xl:text-[1rem]"
            >
              ავტორიზაცია
            </Link>
          </div>
          <div className="w-[267px] h-fit rounded bg-white flex flex-col gap-1 xl:gap-3 p-2 xl:p-10 md:w-[367px] xl:w-[467px]">
            <button className="rounded-lg px-5 py-2 border-solid border-[1px] border-[rgba(236, 236, 236, 1)]text-[.5rem] sm:text-[.7rem] xl:text-[1rem] font-bold ease-in-out duration-300 hover:scale-[1.02]">
              ავტორიზაცია Facebook ით
            </button>
            <button className="rounded-lg px-5 py-2 border-solid border-[1px] border-[rgba(236, 236, 236, 1)] text-[.5rem] sm:text-[.7rem] xl:text-[1rem] font-bold ease-in-out duration-300 hover:scale-[1.02]">
              ავტორიზაცია Google ით
            </button>
            <p className="text-center my-4 cursor-pointer text-[.5rem] sm:text-[.7rem] xl:text-[1rem]">
              უკვე გაქთ ანგარიში?
            </p>
            <input
              type="email"
              className="rounded-2xl px-5 py-2 border-solid border-[1px] border-[rgba(236, 236, 236, 1)] text-[.5rem] sm:text-[.7rem] xl:text-[1rem] focus:outline-none"
            />
            <input
              type="password"
              className="rounded-2xl px-5 py-2 border-solid border-[1px] border-[rgba(236, 236, 236, 1)] text-[.5rem] sm:text-[.7rem] xl:text-[1rem] focus:outline-none"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="toggleCheckbox"
                checked={checked}
                onChange={handleChange}
              />
              <label htmlFor="toggleCheckbox" className="mb-1 text-[.5rem] sm:text-[.7rem] xl:text-[1rem]">
                დამახსოვრება
              </label>
            </div>
            <p className="my-1 cursor-pointer text-[.5rem] sm:text-[.7rem] xl:text-[1rem]">
              პაროლი დამავიწყდა!
            </p>
            <button className="bg-buttonColor-primary rounded-2xl text-white py-[6px] text-[.5rem] sm:text-[.7rem] xl:text-[1rem]">ავტორიზაცია</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
