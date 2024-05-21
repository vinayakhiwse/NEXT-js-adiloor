import React from "react";
import playStore from "../../../../../public/asset/android.png";
import appStore from "../../../../../public/asset/Apple Store.png";
import heroPhoto from "../../../../../public/asset/slider.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTranslation from "@/hooks/useTranslation";
import { useSelector } from "react-redux";
import Link from "next/link";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Set the interval between slides in milliseconds
};

const HeroSlider = () => {
  const { t } = useTranslation();
  const { sitedata } = useSelector((state) => state.SiteData);

  return (
    <Slider {...settings} className="overflow-hidden">
      <div className="slick-slide relative">
        <img
          src={heroPhoto.src}
          alt="Slide 1"
          className="w-full h-[600px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl mb-4 font-[Roboto,sans-serif]">
              {t("Keep Your Money In Shape With Us")}
            </h2>
            <h2 className="font-bold text-4xl sm:text-5xl mb-4">
              {t("We Manage It Better!")}
            </h2>
            <p className="text-base sm:text-xl mb-6">
              {t("You Focus On Work. We Manage Keep Your Income Managed!")}
            </p>
            <div className="flex gap-5 justify-center">
              <Link href={sitedata.play_store_app_link} target="_blank">
                <img
                  src={playStore.src}
                  alt="Play Store"
                  className="cursor-pointer"
                />
              </Link>
              <Link href={sitedata.apple_store_app_link} target="_blank">
                <img
                  src={appStore.src}
                  alt="App Store"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="slick-slide relative">
        <img
          src={heroPhoto.src}
          alt="Slide 2"
          className="w-full h-[600px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="font-bold text-4xl sm:text-5xl mb-4">
              {t("Download the Application")}
            </h2>
            <p className="text-base sm:text-xl mb-6">
              {t("and Keep Your Money.")}
            </p>
            <div className="flex gap-5 justify-center">
              <Link href={sitedata.play_store_app_link} target="_blank">
                <img
                  src={playStore.src}
                  alt="Play Store"
                  className="cursor-pointer"
                />
              </Link>
              <Link href={sitedata.apple_store_app_link} target="_blank">
                <img
                  src={appStore.src}
                  alt="App Store"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
