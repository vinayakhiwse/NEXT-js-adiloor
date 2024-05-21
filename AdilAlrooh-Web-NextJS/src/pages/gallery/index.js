import React from "react";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const Gallery = () => {
  const { imageList } = useSelector((state) => state.SiteData);

  return (
    <>
      <div className="container px-5 sm:px-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {!imageList ? (
          <div className="w-full flex justify-center">
            <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
          </div>
        ) : (
          imageList?.map((link, i) => (
            <div className="overflow-hidden" key={i}>
              <img
                src={link}
                alt="Image 1"
                className="w-full h-64 hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Gallery;
