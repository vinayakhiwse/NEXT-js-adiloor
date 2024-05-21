import React from "react";
import { useRouter } from "next/router";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const Features = () => {
  const { locale } = useRouter();
  const { features } = useSelector((state) => state.SiteData);

  return (
    <>
      <div className="container px-5 sm:px-20 flex flex-wrap mx-auto justify-center">
        {!features ? (
          <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {features?.map((cardContent, i) => {
              return (
                <div
                  key={i}
                  className="p-8 group rounded-lg shadow-primary hover:shadow-hover-secondary transition duration-200 tracking-wide"
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
          </div>
        )}
      </div>
    </>
  );
};

export default Features;
