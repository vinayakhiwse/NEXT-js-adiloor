import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Hero from "./Hero";
import { useSelector } from "react-redux";
import { ImSpinner2 } from "react-icons/im";

const Layout = ({ children }) => {
  const { sitedata } = useSelector((state) => state.SiteData);
  return !sitedata ? (
    <div className="h-screen w-full flex justify-center items-center">
      <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
    </div>
  ) : (
    <>
      <Header />
      <Hero />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
