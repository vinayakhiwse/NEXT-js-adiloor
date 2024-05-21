import AboutUs from "../../public/asset/about-us.jpg";
import imagebanner from "../../public/asset/gbanner.jpg";
import faqbanner from "../../public/asset/adp.jpg";
import favicon from "../../public/asset/FavIcon.png";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FAQItem from "@/components/common/FAQItem";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

// Carousel settings
const FeatureResponsive = {
  "4cards": {
    breakpoint: { max: 3000, min: 1350 },
    items: 4,
  },
  "3cards": {
    breakpoint: { max: 1350, min: 1025 },
    items: 3,
  },
  "2cards": {
    breakpoint: { max: 1025, min: 767 },
    items: 2,
  },
  "1card": {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const ArticleResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1535 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1535, min: 1280 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1280, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();
  const { locale } = useRouter();
  const { sitedata, imageList, faqs, features, article } = useSelector(
    (state) => state.SiteData
  );

  const CustomDot = ({ active, onClick }) => (
    <button
      className={`custom-dot ${active ? "active" : ""}`}
      onClick={() => onClick()}
    />
  );

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="flex flex-col h-[35rem] lg:h-auto overflow-hidden lg:flex-row justify-end items-center relative mt-auto lg:ml-auto">
        <div className="absolute mx-12 p-10 bg-primary text-white top-0 lg:top-auto lg:bottom-auto lg:right-[45%] rtl:lg:right-[15%]">
          <div className="text-3xl font-bold mb-3">{t("About")}</div>
          <p className="max-w-lg line-clamp-[10]">
            {sitedata.about_us[locale]}
          </p>
          <div className="hover:bg-secondary bg-transparent hover:text-secondary hover:border-white transition delay-100 border-2 my-5 px-7 py-2 w-max">
            <Link href="/about" className=" text-white text-lg font-semibold">
              {t("Read More")}
            </Link>
          </div>
        </div>
        <img src={AboutUs.src} className="object-cover" alt="" />
      </div>

      <div className="container mt-16 mx-auto px-5 sm:px-20">
        <p className="px-12 text-3xl font-bold uppercase">
          {t("Our Features")}
        </p>
        <div className="container px-5 sm:px-20 mx-auto">
          {features && (
            <Carousel
              responsive={FeatureResponsive}
              showDots
              customDot={<CustomDot />}
              arrows={false}
              className="py-7"
            >
              {features.slice(0, 5).map((cardContent, i) => {
                return (
                  <div
                    key={i}
                    className="p-8 mx-4 group rounded-lg shadow-hover-secondary md:shadow-lg h-full hover:shadow-hover-secondary transition duration-200 tracking-wide"
                  >
                    <div className="rounded-full shadow-primary group-hover:shadow-icon-primary flex justify-center items-center w-16 h-16 group-hover:transition group-hover:duration-200">
                      <img
                        src={cardContent?.feature_image}
                        className="group-hover:scale-110 group-hover:transition group-hover:duration-200"
                        alt=""
                      />
                    </div>
                    <h2 className="font-semibold text-gray-600 my-4 text-[1.1em]">
                      {cardContent.feature_title[locale]}
                    </h2>
                    <p className="text-gray-400">
                      {cardContent.feature_description[locale]}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>

      <div
        className="mt-16"
        style={{ backgroundImage: `url('${imagebanner.src}')` }}
      >
        <div className="container px-5 sm:px-20 mx-auto">
          <div className="w-full flex flex-col items-center">
            <h2 className="font-bold text-3xl mt-10 text-white px-12 container mx-auto">
              {t("Image Gallery")}
            </h2>

            <div className="relative">
              <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {imageList &&
                  imageList?.slice(0, 8)?.map((url, i) => (
                    <div className="overflow-hidden" key={i}>
                      <img
                        src={url}
                        alt="Image 1"
                        className="border-white border hover:scale-110 transition-transform duration-300 h-full"
                      />
                    </div>
                  ))}
              </div>
              <div className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-min">
                <div className="bg-primary/70 w-full max-w-[19rem] h-72 flex capitalize text-white">
                  <div className="flex flex-col w-60 h-full">
                    <div className="flex items-center justify-center h-1/2">
                      <ul>
                        <li>{t("Track Your")}</li>
                        <li>{t("Cash Flow")}</li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center h-1/2">
                      <ul>
                        <li>{t("Automated")}</li>
                        <li>{t("Money Track")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="h-full w-14 flex justify-center items-center">
                    <img src={favicon.src} alt="" />
                  </div>
                  <div className="flex flex-col w-60 h-full">
                    <div className="flex items-center justify-center h-1/2">
                      <ul>
                        <li>{t("Easy Quick")}</li>
                        <li>{t("Overview")}</li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center h-1/2">
                      <ul>
                        <li>{t("Stress Free")}</li>
                        <li>{t("Spendings")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 mx-auto px-5 sm:px-20">
        <div className="mb-16 font-bold text-3xl text-black px-12 container mx-auto">
          {t("Frequently Asked Questions & Answers")}
        </div>
        <div className="flex flex-col container mx-auto px-5 sm:px-6 lg:px-20 lg:flex-row justify-start items-center relative lg:ml-auto">
          <div className="xl:px-40 lg:px-20">
            <img
              src={faqbanner.src}
              className="border-8 border-primary"
              alt=""
            />
          </div>
          <div className="lg:absolute -mt-32 lg:mt-0 lg:mx-12 lg:w-[35rem] xl:w-[40rem] md:mx-24 mx-8 py-8 bg-white rounded-lg bottom-0 lg:bottom-auto lg:top-auto lg:left-[45%] rtl:lg:left-0">
            <div className="container px-5 sm:px-10 mx-auto">
              <div className="space-y-4">
                {faqs &&
                  faqs
                    ?.slice(0, 3)
                    ?.map((faq, index) => (
                      <FAQItem
                        key={index}
                        question={faq.faq_question[locale]}
                        answer={faq.faq_answer[locale]}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleItem(index)}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 block">
        <div
          className="flex h-60"
          style={{ backgroundImage: `url('${imagebanner.src}')` }}
        >
          <div className="w-full flex flex-col items-center container mx-auto px-5 sm:px-20">
            <p className="font-bold text-3xl mt-10 text-white px-12 container mx-auto">
              {t("Articles")}
            </p>
          </div>
        </div>
        <div className="container px-5 sm:px-20 mx-auto -mt-40">
          <div className="px-2 sm:px-0 container mx-auto grid gap-4 md:grid-cols-4">
            <div className="bg-primary shadow-md relative md:my-7 my-0 md:h-auto h-96 px-12 pt-8 text-white md:col-span-2 xl:col-span-1">
              <p className="text-xl sm:text-2xl font-normal">
                {t("Stay tuned for all of our latest articles.")}
              </p>
              <ul className="list-['-'] mt-7 sm:text-xl font-normal">
                <li>{t("Salary")}</li>
                <li>{t("Wages")}</li>
                <li>{t("Money Management")}</li>
                <li>{t("Financial Growth")}</li>
              </ul>
            </div>

            {article && (
              <Carousel
                responsive={ArticleResponsive}
                showDots
                customDot={<CustomDot />}
                arrows={false}
                className="py-7 xl:col-span-3 md:col-span-2"
              >
                {article?.slice(0, 5)?.map((value, i) => {
                  return (
                    <div
                      className="bg-white shadow-md relative md:mx-5"
                      key={i}
                    >
                      <img
                        src={value.article_image}
                        alt="Article Image"
                        className="w-full h-48 object-cover"
                      />
                      <span className="px-2 py-1 w-28 text-center text-xl bg-primary/70 text-white font-light absolute top-0 rounded">
                        {t("New")}
                      </span>
                      <div className="p-4">
                        <h2 className="text-xl font-bold line-clamp-1 mb-2">
                          {value.article_title[locale]}
                        </h2>
                        <div className="flex items-center justify-between mt-3 border-b border-primary">
                          <div>
                            <span className="text-gray-500 text-xs">BY.</span>
                            <span className="ml-2 text-secondary text-sm font-light">
                              {value.article_author[locale]}
                            </span>
                          </div>
                          <span className="ml-2 text-gray-500 text-xs">
                            {value.article_add_date}
                          </span>
                        </div>
                        <p className="text-[#999999] text-sm mt-2 h-16 line-clamp-4">
                          {value.article_description[locale]}
                        </p>
                        <div className="my-3">
                          <Link
                            href={`articles/${value.docid}`}
                            className="bg-secondary hover:bg-white hover:text-secondary hover:border-secondary border-2 text-white px-4 py-2 text-sm font-semibold"
                          >
                            {t("Read More")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
