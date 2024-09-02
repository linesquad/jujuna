import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignIn() {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-4 mt-6 mb-8 max-w-sm mx-auto">
      <div className="flex items-center w-full">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-sm font-semibold">
          {i18n.language === "ge" ? "ან" : "or"}
        </span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <button className="flex items-center justify-center w-full w-full px-4 py-2 border border-[#7C7C7C] rounded-full hover:bg-gray-100">
        <FcGoogle className="w-6 h-6 mr-2" />
        <span className="text-sm font-medium">
          {i18n.language === "ge" ? "Google-ით შესვლა" : "Sign in with Google"}
        </span>
      </button>
    </div>
  );
}
