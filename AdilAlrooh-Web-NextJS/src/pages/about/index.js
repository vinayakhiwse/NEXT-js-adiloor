import React, { useEffect, useState } from "react";
import aboutUsImage from "../../../public/asset/about-us.jpg";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const {
    sitedata: { about_us },
  } = useSelector((state) => state.SiteData);

  return (
    <>
      <div className="container px-5 sm:px-20 mx-auto mt-16 flex lg:flex-row flex-col gap-12">
        {!about_us ? (
          <div className="w-full flex justify-center">
            <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
          </div>
        ) : (
          <>
            <img
              src={aboutUsImage.src}
              alt=""
              className="object-cover object-center w-full lg:w-1/2 h-auto"
            />
            <div className="w-full">
              <p className="text-3xl font-medium">
                {t("Welcome To Adil Alrooh")}
              </p>
              <p className="text-xl mt-4">{about_us[locale]}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AboutUs;
