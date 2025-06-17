import React from "react";
import { useLoaderData } from "react-router";
import ArticleCard from "./ArticleCard";

const CategoryPage = () => {
  const articlesByCategory = useLoaderData();
  return (
    <div className="pt-20 lg:pt-10 mx-5 lg:mx-20">
      <h2 className="text-center font-bold text-4xl dark:text-[#f3f1d3] text-blue-700 py-8">
        Articles in {articlesByCategory[0].category}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full justify-center items-center pb-10  ">
        {articlesByCategory.map((article) => (
          <ArticleCard key={article._id} article={article}></ArticleCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
