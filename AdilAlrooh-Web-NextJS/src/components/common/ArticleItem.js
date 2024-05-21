import React from "react";
import articleimage from "../../../public/asset/article.jpg";
import useTranslation from "@/hooks/useTranslation";
import Link from "next/link";

const ArticleItem = ({ value, locale }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <img
        src={value.article_image ? value.article_image : articleimage.src}
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
            href={`/articles/${value.docid}`}
            className="bg-secondary hover:bg-white hover:text-secondary hover:border-secondary border-2 text-white px-4 py-2 text-sm font-semibold"
          >
            {t("Read More")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
