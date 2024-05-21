import React, { useEffect, useState } from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialGooglePlus,
  TiSocialYoutube,
} from "react-icons/ti";
import hlogo from "../../../../public/asset/hlogo.png";
import LogoLink from "@/components/common/LogoLink";
import LanguageSelector from "@/components/common/LanguageSelector";
import { useSelector } from "react-redux";
import Link from "next/link";

const Header = () => {
  const { sitedata } = useSelector((state) => state.SiteData);
  return (
    <>
      <section className="w-full relative flex justify-around items-center flex-col pt-0 md:pt-5 gap-3">
        <div className="container-fluid px-5 sm:px-20 mx-auto flex justify-between gap-3 md:gap-0 md:justify-start md:px-4 md:w-[50%] md:flex-row text-white bg-primary h-8 w-full m-0 md:absolute rtl:md:left-0 ltr:md:right-0 md:top-0">
          <a className="flex gap-2 items-center justify-center">
            <CiMail /> {sitedata?.email}
          </a>

          <div className="flex justify-between md:ml-5 gap-5">
            <a className="flex gap-2 items-center">
              <CiPhone /> {sitedata?.phone}
            </a>
            <LanguageSelector className="hidden md:block" />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <Link href="/">
            <img src={hlogo.src} className="w-[50%] md:w-max" />
          </Link>
          <div className="flex justify-center gap-[3%] md:gap-4 md:mt-7 w-[50%] md:w-max">
            <LogoLink icon={<TiSocialFacebook />} url={sitedata.facebook_url} />
            <LogoLink icon={<TiSocialTwitter />} url={sitedata.twitter_url} />
            <LogoLink icon={<TiSocialGooglePlus />} url={sitedata.gmail_url} />
            <LogoLink icon={<TiSocialYoutube />} url={sitedata.youtube_url} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
