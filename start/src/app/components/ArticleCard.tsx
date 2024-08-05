import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <>
      <article className="flex flex-col shadow my-4" key={article.id}>
        <Link href={`articles/${article.id}`} className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1000/500?random=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link
            href={`articles/${article.id}`}
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            {article.id}
          </Link>
          <Link
            href={`articles/${article.id}`}
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {article.title}
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            published on {new Date(article.createdAt).toLocaleString()}
          </p>
          <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
            {article.content.length > 70
              ? article.content.substring(0, 70) + "..."
              : article.content}
          </Link>
          <Link
            href={`articles/${article.id}`}
            className="text-pink-800 hover:text-black"
          >
            続きを読む
          </Link>
        </div>
      </article>
    </>
  );
};

export default ArticleCard;
