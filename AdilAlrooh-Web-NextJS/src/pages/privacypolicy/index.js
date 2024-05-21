import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const {
    sitedata: { privacy_policy },
  } = useSelector((state) => state.SiteData);

  return (
    <>
      <div className="container px-5 sm:px-20 mx-auto">
        {!privacy_policy ? (
          <div className="w-full flex justify-center">
            <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
          </div>
        ) : (
          <>
            <div className="text-2xl font-bold mb-4">
              {t("Privacy & Policy")}
            </div>
            <div className="text-base text-[#555555] text-justify">
              {privacy_policy[locale]}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PrivacyPolicy;
