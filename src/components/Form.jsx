import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(
    "message succesfully send"
  );
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm("service_lpst9ps", "template_7gk5yri", form.current, {
        publicKey: "AH1Oz3GDLtzs687z0",
      })
      .then(
        () => {
          setSuccessMessage("Message successfully sent!");
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 2000);
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="xl:scale-x-[1] scale-x-[-1] order-4 relative"
    >
      <div className="relative">
        <label
          htmlFor="phone"
          className="xl:text-[20px] md:text-[16px] font-arialgeo text-[12px] block text-white"
        >
          ტელეფონი
        </label>
        {errors.phone && (
          <span className="absolute right-0 bottom-0 text-red-500 text-xs transition-opacity duration-500 ease-in-out opacity-100">
            {errors.phone.message}
          </span>
        )}
      </div>
      <input
        id="phone"
        name="phone"
        type="text"
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9()+-\s]+$/,
            message: "invalid Phone number ",
          },
        })}
        placeholder="მიუთითეთ ნომერი..."
        className={`xl:text-[14px] xl:w-[328px] small:w-[150px] md:w-[260px] md:text-[12px] h-10 w-[209px] mt-1 p-2 box-border text-[10px] outline-none bg-black text-white rounded-lg block`}
      />

      <div className="relative">
        <label
          htmlFor="mail"
          className="xl:text-[20px] md:text-[16px] font-arialgeo text-[12px] block text-white mt-3"
        >
          ელ.ფოსტა
        </label>
        {errors.mail && (
          <span className="absolute right-0 bottom-0 text-red-500 text-xs transition-opacity duration-500 ease-in-out opacity-100">
            {errors.mail.message}
          </span>
        )}
      </div>
      <input
        name="mail"
        id="mail"
        {...register("mail", {
          required: "mail is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "mail is invalid",
          },
        })}
        placeholder="მიუთითეთ ელ-ფოსტა..."
        className={`xl:text-[14px] xl:w-[328px] small:w-[150px]  small md:w-[260px]  md:text-[12px] h-10 mt-1 w-[209px] p-2 text-[10px] box-border outline-none bg-black text-white rounded-lg block`}
      />

      <div className="relative pb-[8px]">
        <div className="relative">
          <label
            htmlFor="text"
            className="xl:text-[20px] md:text-[16px]  font-arialgeo  text-[12px] block text-white mt-3"
          >
            მესიჯი
          </label>
          {errors.text && (
            <span className="absolute bottom-0 right-0 text-red-500 text-xs transition-opacity duration-500 ease-in-out opacity-100">
              {errors.text.message}
            </span>
          )}
        </div>
        <textarea
          id="text"
          name="message"
          {...register("text", { required: "message is required", length: 5 })}
          placeholder="დაწერეთ მესიჯი..."
          className={`xl:text-[14px] xl:w-[328px]  small:w-[150px]  md:w-[260px]  md:text-[12px] h-15 mt-1 w-[209px] h-[112px] p-2 box-border text-[10px] outline-none bg-black text-white rounded-lg block `}
        />

        {successMessage && (
          <div
            className={`absolute text-green-500 text-sm mt-1 left-1 transition-opacity duration-500 ease-in-out ${
              showSuccess ? "opacity-100" : "opacity-0"
            }`}
          >
            {successMessage}
          </div>
        )}
      </div>
      <div className="mt-6 flex justify-end">
        <Button type="primary">გაგზავნა</Button>
      </div>
    </form>
  );
}

export default Form;
