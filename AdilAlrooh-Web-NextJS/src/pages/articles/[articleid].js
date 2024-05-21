import React, { useEffect, useState } from "react";
import articleimage from "../../../public/asset/article.jpg";
import ArticleItem from "@/components/common/ArticleItem";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const ArticleDetail = () => {
  const { t } = useTranslation();
  const [relatedArticles, setRelatedArticles] = useState();
  const [articleDetail, setArticleDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    locale,
    query: { articleid },
    push,
  } = useRouter();
  const { article } = useSelector((state) => state.SiteData);

  useEffect(() => {
    setLoading(true);
    if (article && articleid) {
      const detail = article.find((element) => element.docid == articleid);
      if (detail) {
        setArticleDetail(detail);
      } else {
        push("/articles");
      }

      var array1 = article
        .filter((element) => element.docid !== articleid)
        .slice(0, 4);
      setRelatedArticles(array1);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [articleid, article]);

  return loading ? (
    <div className="container px-5 sm:px-20 mx-auto flex justify-center">
      <ImSpinner2 className="animate-spin text-4xl fill-secondary" />
    </div>
  ) : (
    <>
      <div className="container px-5 sm:px-20 mx-auto flex flex-col">
        <h1 className="text-3xl font-bold mb-4">
          {articleDetail?.article_title[locale]}
        </h1>
        <div className="flex flex-col items-center md:block">
          <img
            src={articleDetail?.article_image}
            alt="Article Image"
            className="w-full md:w-1/3 rounded-lg mb-4 rtl:md:float-right ltr:md:float-left mr-0 ltr:md:mr-5 rtl:md:ml-5"
          />
          <div className="flex gap-10 uppercase my-3">
            <div className="text-gray-600 mb-2">
              by: {articleDetail?.article_author[locale]}
            </div>
            <div className="text-gray-600 mb-2">
              {articleDetail?.article_add_date}
            </div>
          </div>
          <p className="text-gray-800 text-justify">
            {articleDetail?.article_description[locale]}
          </p>
        </div>
      </div>

      <div className="container px-5 sm:px-20 flex flex-col mx-auto my-10">
        {!relatedArticles?.length ? (
          <div className="text-center text-xl">{t("No Related Articles")}</div>
        ) : (
          <>
            <p className="text-2xl font-bold mb-6">{t("Related Articles")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {relatedArticles?.map((value) => (
                <ArticleItem value={value} locale={locale} key={value.docid} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ArticleDetail;
