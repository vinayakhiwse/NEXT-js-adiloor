import React from "react";
import ArticleItem from "@/components/common/ArticleItem";
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Article = () => {
  const { locale } = useRouter();
  const { article } = useSelector((state) => state.SiteData);

  return (
    <>
      <div className="container px-5 sm:px-20 flex flex-wrap mx-auto justify-center">
        {!article ? (
          <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {article?.map((value) => (
              <ArticleItem value={value} locale={locale} key={value.docid} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Article;
