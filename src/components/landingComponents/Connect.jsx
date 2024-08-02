import Wrapper from "../Wrapper";
import HeroContent from "./HeroContent";
import Button from "../Button";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Connect = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="bg-green-400 w-full py-[30px] md:py-[30px]">
      <Wrapper>
        <div
          className="p-[23px] lg:px-[40px] lg:pt-[70px] lg:pb-[40px] bg-[url('/images/connect.png')]
        bg-no-repeat bg-cover w-full  rounded-b-md lg:rounded-md
        bg-right md:bg-right grid grid-rows-1 grid-cols-2 md:grid-cols-2 gap-x-5
        "
        >
          <div>
            <form
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="mb-5">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-color-primary mb-1"
                >
                  ტელეფონი
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Mobile Telephone"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-buttonColor-primary"
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
                <p className="text-red-300 font-bold">
                  {errors.mobile?.message}
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-color-primary mb-1 "
                >
                  ელ.ფოსტა
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-buttonColor-primary"
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
                <p className="text-red-300 font-bold">
                  {errors.email?.message}
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-color-primary mb-1"
                >
                  მესიჯი
                </label>
                <textarea
                  id="message"
                  placeholder="Enter text here..."
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-buttonColor-primary resize-none"
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
                <p className="text-red-300 font-bold">
                  {errors.textArea?.message}
                </p>
              </div>

              <div className="flex justify-end">
                <Button type="large">გაგზავნა</Button>
              </div>
            </form>
            <DevTool control={control} />
          </div>

          <HeroContent
            descriptionStyle="text-sm text-color-primary"
            containerStyle="font-normal"
            description={[
              {
                paragraph:
                  "ქორფა ჟუჯუნა უამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ ონკანიდან ეშვება.",
              },
              {
                paragraph:
                  "ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს.",
              },
            ]}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Connect;
