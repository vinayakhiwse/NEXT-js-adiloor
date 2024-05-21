import LinkItem from "@/components/common/LinkItem";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import { FaAngleUp } from "react-icons/fa";

const FooterNavigation = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bg-[#020206] text-white md:flex py-2 md:h-20 relative">
        <div className="container px-5 md:px-20 mx-auto items-center text-xl md:flex md:flex-wrap ms:items-center xl:gap-28 lg:gap-20 md:gap-5  text-[#999999] capitalize grid grid-cols-2 sm:grid-cols-2">
          <LinkItem
            title={t("Home")}
            url={"/"}
            className={`${
              router.pathname == "/" && "text-white"
            } hover:text-white`}
          />
          <LinkItem
            title={t("About Us")}
            url={"/about"}
            className={`${
              router.pathname == "/about" && "text-white"
            } hover:text-white`}
          />
          <LinkItem
            title={t("Contact Us")}
            url={"/contactus"}
            className={`${
              router.pathname == "/contactus" && "text-white"
            } hover:text-white`}
          />
          <LinkItem
            title={t("Privacy Policy")}
            url={"/privacypolicy"}
            className={`${
              router.pathname == "/privacypolicy" && "text-white"
            } hover:text-white`}
          />
          <LinkItem
            title={t("Terms & Conditions")}
            url={"/termsCondition"}
            className={`${
              router.pathname == "/termsCondition" && "text-white"
            } hover:text-white`}
          />
        </div>
        <div
          id="back-to-top"
          className="bg-red-900 absolute -top-8 ltr:xl:right-40 ltr:lg:right-16 ltr:md:right-10 ltr:right-5 rtl:xl:left-40 rtl:lg:left-16 rtl:md:left-10 rtl:left-5 rounded-full h-14 w-14 text-white flex items-center justify-center scroll-mt-0 transition-opacity duration-1000"
          role="button"
          onClick={scrollToTop}
        >
          <FaAngleUp className="text-[1.5rem]" />
        </div>
      </section>
    </>
  );
};

export default FooterNavigation;
