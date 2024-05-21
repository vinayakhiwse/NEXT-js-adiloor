import useTranslation from "@/hooks/useTranslation";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/configs/firebaseConfig";
import { Create_Update_Doc } from "@/utils/firebaseutils";
import Alert from "@/components/common/Alert";
import { AlertUtils } from "@/utils/alert_utils";

const Subscription = () => {
  const { t } = useTranslation();
  const [snakbar, setSnakbar] = useState(AlertUtils.default);

  const NewsletterEmailValidationSchema = yup
    .object({
      emailId: yup
        .string()
        .required(t("Email is required"))
        .matches(
          /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          t("Enter valid email address")
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(NewsletterEmailValidationSchema) });

  const handleNewsLetterSubmit = async (data) => {
    Create_Update_Doc("Newsletter", data).then(() => {
      AlertUtils.success.message = t("Thank you for joining our newsletter!");
      setSnakbar(AlertUtils.success);
      reset();
    });
  };

  return (
    <>
      <section className="bg-primary-dark text-white">
        <div className="container px-5 sm:px-20 mx-auto">
          <div className="py-20 xl:px-44">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="text-3xl text-center md:text-left">
                {t("Newsletter to receive our latest company updates")}
              </div>

              <div className="flex items-center w-full">
                <form
                  id="basic-form-sub"
                  autoComplete="off"
                  className="relative w-full"
                  onSubmit={handleSubmit(handleNewsLetterSubmit)}
                >
                  <input
                    {...register("emailId")}
                    className="border-b w-full border-white text-white placeholder-white py-2 outline-none bg-transparent font-light text-base lg:text-lg"
                    placeholder={t("Your email address here")}
                  />
                  <button type="submit" className="absolute cursor-pointer text-3xl inset-y-0 ltr:right-0 rtl:left-0 pr-3 flex items-center">
                    <FaTelegramPlane  />
                  </button>
                  {errors.emailId && (
                    <p role="alert" className="text-red-600 text-sm">
                      {errors.emailId.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Alert snakbar={snakbar} setSnakbar={setSnakbar} />
    </>
  );
};

export default Subscription;
