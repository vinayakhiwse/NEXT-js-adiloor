import React from "react";
import heroPhoto from "../../../../../public/asset/slider.jpg";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import useTranslation from "@/hooks/useTranslation";

const HeroBanner = ({ pagetitle }) => {
  const { pathname } = useRouter();
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative">
        <img
          src={heroPhoto.src}
          alt="Slide 1"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center text-white">
          <div className="container px-5 sm:px-20 mx-auto">
            <h2 className="text-4xl sm:text-5xl mb-4 font-[Roboto,sans-serif]">
              {t(pagetitle)}
            </h2>
            <div className="text-base sm:text-xl mb-6 flex items-center">
              <p>{t("Home")}</p>
              <IoChevronForwardOutline />
              {pathname == "/articles/[articleid]" ? (
                <>
                  <p>{t("Articles")}</p>
                  <IoChevronForwardOutline />
                </>
              ) : null}
              <p className="text-secondary">{t(pagetitle)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
