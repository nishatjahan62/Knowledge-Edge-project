import React, { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard";
import { Typewriter } from "react-simple-typewriter";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://assignment-11-server-sigma-lime.vercel.app/featured-articles"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-5 lg:mt-14">
      <h2 className="text-center font-bold text-4xl text-[#305CDE] dark:text-[#f3f1d3] py-10 ">
        <Typewriter
          words={[" Featured Articles"]}
          loop={0}
          cursor
          cursorStyle="|"
        ></Typewriter>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full justify-center items-center pb-10">
        {articles.map((article) => (
          <ArticleCard key={articles._id} article={article}></ArticleCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
