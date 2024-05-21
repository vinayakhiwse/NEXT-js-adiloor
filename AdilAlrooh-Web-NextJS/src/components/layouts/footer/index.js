import React from "react";
import FooterBanner from "./footer-banner";
import FooterNavigation from "./footer-Navigation";
import Subscription from "./subscription";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid flex flex-col mt-16">
        <FooterBanner />
        <Subscription />
        <FooterNavigation />
      </footer>
    </>
  );
};

export default Footer;
