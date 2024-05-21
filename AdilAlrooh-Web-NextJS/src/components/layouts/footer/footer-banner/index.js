import LogoLink from "@/components/common/LogoLink";
import React from "react";
import {
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import whiteLogo from "../../../../../public/asset/flogo.png";
import useTranslation from "@/hooks/useTranslation";
import { useSelector } from "react-redux";
import Link from "next/link";

const FooterBanner = () => {
  const { t } = useTranslation();
  const { sitedata } = useSelector((state) => state.SiteData);

  return (
    <section className="bg-primary text-white">
      <div className="container px-5 sm:px-20 mx-auto">
        <div className="py-20 xl:px-44 flex flex-col text-center items-center">
          <div className="banner-logo">
            <Link href="/">
              <img src={whiteLogo.src} className="img-fluid" alt="" />
            </Link>
          </div>
          <div className="lg:w-1/2 px-4 w-full my-9 text-[1rem]">
            {t("Footer Banner Content")}
          </div>
          <div className="flex justify-center gap-[3%] lg:gap-4">
            <LogoLink
              className="bg-primary-dark text-3xl"
              icon={<TiSocialFacebook />}
              url={sitedata.facebook_url}
            />
            <LogoLink
              className="bg-primary-dark text-3xl"
              icon={<TiSocialTwitter />}
              url={sitedata.twitter_url}
            />
            <LogoLink
              className="bg-primary-dark text-3xl"
              icon={<TiSocialGooglePlus />}
              url={sitedata.gmail_url}
            />
            <LogoLink
              className="bg-primary-dark text-3xl"
              icon={<TiSocialYoutube />}
              url={sitedata.youtube_url}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
