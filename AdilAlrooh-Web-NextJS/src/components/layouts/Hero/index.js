import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinkItem from "@/components/common/LinkItem";
import { useRouter } from "next/router";
import HeroSlider from "./hero-slider";
import HeroBanner from "./hero-banner";
import LanguageSelector from "@/components/common/LanguageSelector";
import { PageNameAndRoute } from "@/constants/PageTitle";
import useTranslation from "@/hooks/useTranslation";

const getTitle = (path) => {
  return PageNameAndRoute.find((value) => value.path == path);
};

const Hero = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const pagetitle = getTitle(router.pathname);

  const toggleNav = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };
  return (
    <div className="mt-6 relative mb-16">
      <section className="absolute z-10 bg-primary/75 py-4 w-full 2xl:w-[55%]">
        <div className="container px-5 sm:px-20 mx-auto sm:mt-0">
          <div className="md:hidden flex justify-between">
            <LanguageSelector />
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleNav}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            className={`md:flex w-full xl:justify-evenly md:px-5 lg:px-0 sm:justify-between h-min self-center font-normal text-lg text-center text-white ${
              showNav ? "block" : "hidden"
            }`}
            id="menu"
          >
            <li>
              <LinkItem
                className={`${
                  router.pathname == "/" && "text-secondary"
                }  hover:text-secondary transition-colors`}
                title={t("Home")}
                url={"/"}
              />
            </li>
            <li>
              <LinkItem
                className={`${
                  router.pathname == "/about" && "text-secondary"
                }  hover:text-secondary transition-colors`}
                title={t("About")}
                url={"/about"}
              />
            </li>
            <li>
              <LinkItem
                className={`${
                  router.pathname == "/features" && "text-secondary"
                }  hover:text-secondary transition-colors`}
                title={t("Features")}
                url={"/features"}
              />
            </li>
            <li>
              <LinkItem
                className={`${
                  router.pathname == "/gallery" && "text-secondary"
                }  hover:text-secondary transition-colors`}
                title={t("Gallery")}
                url={"/gallery"}
              />
            </li>
            <li>
              <LinkItem
                className={`${
                  router.pathname == "/faqs" && "text-secondary"
                }  hover:text-secondary transition-colors`}
                title={t("FAQs")}
                url={"/faqs"}
              />
            </li>
            <li>
              <LinkItem
                className={`${
                  router.pathname == "/articles" && "text-secondary"
                }  hover:text-secondary transition-colors`}
                title={t("Articles")}
                url={"/articles"}
              />
            </li>
          </ul>
        </div>
      </section>

      {router.pathname == "/" ? (
        <HeroSlider />
      ) : (
        <HeroBanner pagetitle={pagetitle?.title} />
      )}
    </div>
  );
};

export default Hero;
