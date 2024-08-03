import Button from "../../Button";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConnectForm = () => {
  const darkMode = useSelector(getMode);
  const form = useForm({
    defaultValues: {
      mobile: "",
      email: "",
      textArea: "",
    },
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const { t } = useTranslation();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const formRef = useRef(null);

  const onSubmit = async () => {
    if (formRef.current) {
      try {
        await emailjs.sendForm(
          "service_r2rzhyi",
          "template_hv04snn",
          formRef.current,
          "lCDNh2nw5t1Ek4MQ8"
        );
        toast.success(t(`toast.success`));
      } catch (error) {
        toast.error(t(`toast.error`));
      }
    } else {
      toast.error(t(`toast.hardError`));
    }
  };

  return (
    <div>
      <form
        className="space-y-4 flex flex-col gap-3 md:gap-2"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        ref={formRef}
      >
        <div className="mb-5 h-[70px]">
          <label
            htmlFor="mobile"
            className="block text-md font-medium text-color-primary mb-1"
          >
            {t(`connectForm.tel`)}
          </label>
          <input
            name="mobile"
            type="tel"
            id="mobile"
            placeholder={t(`connectForm.enterPhoneNumber`)}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-buttonColor-primary 
                ${darkMode ? "bg-black text-white border-none" : ""} `}
            {...register("mobile", {
              required: {
                value: true,
                message: "Mobile number is required",
              },
              pattern: {
                value: /^\d+$/,
                message: "Invalid phone number format",
              },
            })}
          />
          <p className="text-red-500 text-base mt-1 font-bold bg-backgroundColor-purpleMid inline-block rounded">
            {errors.mobile?.message}
          </p>
        </div>

        <div className="mb-5 h-[80px]">
          <label
            htmlFor="email"
            className="block text-md font-medium text-color-primary mb-1"
          >
            {t(`connectForm.mail`)}
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder={t(`connectForm.enterEmail`)}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-buttonColor-primary
                ${darkMode ? "bg-black text-white border-none" : ""} `}
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="text-red-500 text-base mt-1 font-bold bg-backgroundColor-purpleMid inline-block rounded">
            {errors.email?.message}
          </p>
        </div>

        <div className="mb-5 h-[210px]">
          <label
            htmlFor="message"
            className="block text-md font-medium text-color-primary mb-1"
          >
            {t(`connectForm.message`)}
          </label>
          <textarea
            name="textArea"
            id="textArea"
            placeholder={t(`connectForm.writeMessage`)}
            className={`w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-buttonColor-primary resize-none
                ${darkMode ? "bg-black text-white border-none" : ""}`}
            rows="5"
            {...register("textArea", {
              required: {
                value: true,
                message: "Message is required",
              },
              minLength: {
                value: 5,
                message: "Enter a minimum of 5 symbols",
              },
              maxLength: {
                value: 500,
                message: "Enter a maximum of 500 symbols",
              },
            })}
          />
          <p className="text-red-500 text-base mt-1 font-bold bg-backgroundColor-purpleMid inline-block rounded">
            {errors.textArea?.message}
          </p>
        </div>

        <div className="flex justify-end small:p-2">
          <Button type="large" disabled={isSubmitting}>
            {t(`connectForm.send`)}
          </Button>
        </div>
      </form>
      <ToastContainer />;
      <DevTool control={control} />
    </div>
  );
};

export default ConnectForm;
