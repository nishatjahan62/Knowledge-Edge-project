import React from "react";
import { Link } from "react-router";

const ArticleCard = ({ article }) => {
  const { title, excerpt, publication_date, author_name } = article;
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="card bg-[#FDFBD4] dark:bg-[#252728] h-70 overflow-hidden rounded-2xl">
        <div className="card-body  ">
          <h2 className="card-title  truncate  font-bold text-xl">{title}</h2>
          <p className="text-xl pt-2  font-bold">
            Author:{" "}
            <span className="text-blue-700 dark:text-blue-400">
              {author_name}
            </span>
          </p>
          <p className="text-sm mt-2">{excerpt}</p>
          <div className="card-actions justify-end">
            <button className="py-2 px-3 shadow-2xl bg-blue-400 rounded-2xl text-black font-bold">
              {publication_date}
            </button>
          </div>
          <Link to={`/article/${article._id}`}>
            {" "}
            <div className="flex justify-center items-center pt-2">
              <button
                href="#_"
                class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span class="relative font-bold font-[poppins]">Vew more</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
