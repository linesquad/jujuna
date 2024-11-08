import Button from "../../Button";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConnectForm = () => {
  const form = useForm({
    defaultValues: {
      mobile: "",
      email: "",
      textArea: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
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
    <div className="pt-[30px] px-[15px] max-w-[500px] mx-auto lg:mx-0 md:w-[500px] lg:max-w-none lg:w-[550px] lg:px-0">
      <form
        className="bg-[#fff] pt-[13px] px-[21px] pb-[20px] rounded-[22px] flex flex-col gap-[11px]"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        ref={formRef}
      >
        <div className="">
          <label
            htmlFor="mobile"
            className="block text-[18px] font-medium  mb-1"
          >
            {t(`connectForm.tel`)}
          </label>
          <input
            name="mobile"
            type="tel"
            id="mobile"
            placeholder={t(`connectForm.enterPhoneNumber`)}
            className={`w-full mt-[3px] h-[40px] px-[15px] pl-[12px] border focus:outline-none focus:ring-2 focus:ring-buttonColor-primary border-[#000000]  rounded-[10px]
                `}
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
          <p className="text-red-500 text-base font-bold inline-block rounded">
            {errors.mobile?.message}
          </p>
        </div>

        <div className="">
          <label htmlFor="email" className="block text-md font-medium  mb-1">
            {t(`connectForm.mail`)}
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder={t(`connectForm.enterEmail`)}
            className={`w-full mt-[3px] h-[40px] px-[15px] pl-[12px] border focus:outline-none focus:ring-2 focus:ring-buttonColor-primary border-[#000] rounded-[10px]
              `}
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
          <p className="text-red-500 text-base font-bold inline-block rounded">
            {errors.email?.message}
          </p>
        </div>

        <div className="h-[210px]">
          <label htmlFor="message" className="block text-md font-medium  mb-1">
            {t(`connectForm.message`)}
          </label>
          <textarea
            name="textArea"
            id="textArea"
            placeholder={t(`connectForm.writeMessage`)}
            className={`w-full h-[100px] pt-[9px] pl-[11px] border rounded-[10px] shadow-sm focus:outline-none focus:ring-2 focus:ring-buttonColor-primary resize-none border-[#000]
                `}
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
          <p className="text-red-500 text-base font-bold inline-block rounded">
            {errors.textArea?.message}
          </p>
          <div className="flex justify-end small:p-2 mt-[11px]">
            <Button type="large" disabled={isSubmitting}>
              {t(`connectForm.send`)}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConnectForm;
