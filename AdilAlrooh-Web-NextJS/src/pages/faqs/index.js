import FAQItem from "@/components/common/FAQItem";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const FAQs = () => {
  const { locale } = useRouter();
  const [openIndex, setOpenIndex] = useState(null);
  const { faqs } = useSelector((state) => state.SiteData);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="container px-5 2xl:px-96 xl:px-60 md:px-40 sm:px-20 mx-auto">
        <div className="space-y-4">
          {!faqs ? (
            <div className="flex justify-center">
              <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
            </div>
          ) : (
            faqs?.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.faq_question[locale]}
                answer={faq.faq_answer[locale]}
                isOpen={openIndex === index}
                toggleOpen={() => toggleItem(index)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FAQs;
