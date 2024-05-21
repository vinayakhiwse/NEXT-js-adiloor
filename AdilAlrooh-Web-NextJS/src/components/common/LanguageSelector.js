import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const LanguageSelector = ({ className }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    let dir = router?.locale == "ar" ? "rtl" : "ltr";
    let lang = router?.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);

    setIsOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router?.locale]);

  return (
    <div
      className={`relative inline-block text-left text-white ${className}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className="inline-flex justify-center items-center w-full h-full bg-transparent hover:text-secondary focus:text-secondary"
        id="languageDropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        {router.locale == "en" ? "En" : "أر"}
        <svg
          className="-mr-1 ltr:ml-2 rtl:mr-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="origin-top-right absolute rtl:md:left-0 ltr:md:right-0 rounded-sm shadow-lg bg-primary ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-labelledby="languageDropdown"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              href={router.asPath}
              locale="en"
              className="block px-4 py-2 text-lg hover:bg-secondary"
            >
              English
            </Link>
            <Link
              href={router.asPath}
              locale="ar"
              className="block px-4 py-2 text-lg hover:bg-secondary"
            >
              عربي
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
