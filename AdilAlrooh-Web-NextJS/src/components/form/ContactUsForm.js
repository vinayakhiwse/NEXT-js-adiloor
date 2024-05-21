import useTranslation from "@/hooks/useTranslation";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const ContactUsForm = ({ sitedata, handleAlert }) => {
  const { t } = useTranslation();

  const ValidationSchema = yup
    .object({
      help: yup.string().required(t("Please select the Feedback Category")),
      name: yup.string().required(t("Name is required")),
      email: yup
        .string()
        .required(t("Email is required"))
        .matches(
          /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          t("Enter valid email address")
        ),
      comment: yup.string().required(t("Comment is required")),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationSchema) });

  const handleMailSending = (data) => {
    data.mailto = sitedata.email;
    axios
      .post("/api/mailsending", data)
      .then((res) => {
        handleAlert(res.status);
        if (res.status == 200) {
          reset();
        }
      })
      .catch((err) => {
        handleAlert(err.response.status);
      });
  };

  return (
    <div className="xl:absolute ltr:right-0 rtl:left-0 top-0 w-full md:max-w-lg 2xl:max-w-xl mx-auto text-gray-700 py-4 px-8 bg-[#f8f8f8] shadow-lg rounded-sm z-10">
      <h2 className="text-2xl font-medium mb-4">{t("Feedback Form")}</h2>
      <form onSubmit={handleSubmit(handleMailSending)}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-bold mb-2">
            {t("What can we help you with?")}
          </label>
          <select
            {...register("help")}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option className="hidden" value="">
              {t("Select the Feedback Category")}
            </option>
            {sitedata.contact_us_feedback.map((value, i) => (
              <option value={value} key={i}>
                {value}
              </option>
            ))}
          </select>
          {errors.help && (
            <p role="alert" className="text-red-600 text-sm">
              {errors.help.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            {t("Name")}
          </label>
          <input
            {...register(`name`)}
            placeholder={t("Enter your name")}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          {errors.name && (
            <p role="alert" className="text-red-600 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            {t("Email")}
          </label>
          <input
            {...register(`email`)}
            placeholder={t("Enter your email")}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          {errors.email && (
            <p role="alert" className="text-red-600 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="Comment" className="block text-sm font-bold mb-2">
            {t("Comment")}
          </label>
          <textarea
            {...register(`comment`)}
            rows="4"
            placeholder={t("Enter your Comment here")}
            className="border border-gray-300 rounded-lg p-2 w-full"
          ></textarea>
          {errors.comment && (
            <p role="alert" className="text-red-600 text-sm">
              {errors.comment.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-secondary w-60 hover:bg-secondary/90 text-white font-bold py-2 px-4 rounded transition-transform duration-1000"
          >
            {t("Submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
