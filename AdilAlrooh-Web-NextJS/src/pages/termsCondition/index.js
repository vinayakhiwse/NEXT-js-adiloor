import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import React, {  } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const TermsCondition = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const {
    sitedata: { terms_and_condition },
  } = useSelector((state) => state.SiteData);

  return (
    <>
      <div className="container px-5 sm:px-20 mx-auto">
        {!terms_and_condition ? (
          <div className="w-full flex justify-center">
            <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
          </div>
        ) : (
          <>
            <div className="text-2xl font-bold mb-4">
              {t("Terms & Conditions")}
            </div>
            <div className="text-base text-[#555555] text-justify">
              {terms_and_condition[locale]}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TermsCondition;
