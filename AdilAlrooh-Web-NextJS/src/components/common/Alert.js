import { AlertUtils } from "@/utils/alert_utils";
import React from "react";

const SuccessAlert = (props) => {
  return (
    <div
      className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 ${props.className}`}
      role="alert"
    >
      <p>{props.message}</p>
    </div>
  );
};

const ErrorAlert = (props) => {
  return (
    <div
      className={`bg-red-100 border-l-4 border-red-500 text-red-700 p-4 ${props.className}`}
      role="alert"
    >
      <p>{props.message}</p>
    </div>
  );
};

const Alert = ({ snakbar, setSnakbar }) => {
  setTimeout(function () {
    setSnakbar(AlertUtils.default);
  }, 3000);
  return (
    <div
      className={`fixed bottom-10 transition-transform duration-500 z-50 ${
        snakbar.open && "ltr:translate-x-12 rtl:-translate-x-12"
      }`}
    >
      <SuccessAlert
        {...snakbar}
        className={`${snakbar.type == "success" ? "block" : "hidden"}`}
      />

      <ErrorAlert
        {...snakbar}
        className={`${snakbar.type == "error" ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default Alert;
