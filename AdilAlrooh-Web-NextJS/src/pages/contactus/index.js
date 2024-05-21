import Alert from "@/components/common/Alert";
import ContactUsForm from "@/components/form/ContactUsForm";
import MapComponent from "@/components/layouts/map";
import useTranslation from "@/hooks/useTranslation";
import { AlertUtils } from "@/utils/alert_utils";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const [snakbar, setSnakbar] = useState(AlertUtils.default);

  const handleAlert = (status) => {
    if (status == 200) {
      AlertUtils.success.message = t("Feedback Submitted Successfully.");
      setSnakbar(AlertUtils.success);
    } else {
      AlertUtils.error.message = t("Failed to submit feedback.");
      setSnakbar(AlertUtils.error);
    }
  };

  const { sitedata } = useSelector((state) => state.SiteData);

  return (
    <>
      <div className="container px-5 md:px-20 mx-auto relative">
        <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-12 sm:gap-[0.6rem]  xl:justify-start justify-center mb-16">
          <div className="flex gap-2 flex-col items-center max-w-xs text-center">
            <FaPhoneAlt className="text-secondary w-8 h-8" />
            <p className="text-lg font-bold uppercase">{t("Phone")}</p>
            <p className="text-slate-500 hover:text-red-600">
              {sitedata.phone}
            </p>
          </div>
          <div className="flex gap-2 flex-col items-center max-w-xs text-center">
            <FaMapPin className="text-secondary w-8 h-8" />
            <p className="text-lg font-bold uppercase">{t("Address")}</p>
            <p className="text-slate-500 hover:text-red-600">
              {sitedata.address[locale]}
            </p>
          </div>
          <div className="flex gap-2 flex-col items-center max-w-xs text-center">
            <SiGmail className="text-secondary w-8 h-8" />
            <p className="text-lg font-bold uppercase">{t("Email")}</p>
            <p className="text-slate-500 hover:text-red-600">
              {sitedata.email}
            </p>
          </div>
        </div>

        <ContactUsForm sitedata={sitedata} handleAlert={handleAlert} />
      </div>
      <div className="h-[36rem] w-full mt-14 -mb-16">
        <MapComponent
          latitude={sitedata.latitude}
          address={sitedata.address[locale]}
          longitude={sitedata.longitude}
        />
      </div>

      <Alert snakbar={snakbar} setSnakbar={setSnakbar} />
    </>
  );
};

export default ContactUs;
