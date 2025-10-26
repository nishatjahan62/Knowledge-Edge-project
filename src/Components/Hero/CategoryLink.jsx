import React, { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import { Typewriter } from "react-simple-typewriter";

const CategoryLink = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-sigma-lime.vercel.app/all-articles")
      .then((res) => res.json())
      .then((data) => {
        const singleCategory = [
          ...new Set(data.map((article) => article.category)),
        ];
        setCategories(singleCategory);
      });
  }, []);

  return (
    <div className=" bg-[#F4F2D0] dark:bg-[#252728] dark:to-[#3a3a3a]  shadow-2xl border border-[#FDFBD4] dark:border-gray-400 px-5 py-8 rounded-2xl mt-5  lg:mt-14">
      <h2 className="text-center font-bold text-2xl lg:text-3xl text-[#305CDE] pb-5 ">
        {" "}
        <Typewriter
          words={[" Explore Article By Category"]}
          loop={0}
          cursor
          cursorStyle="|"
        ></Typewriter>
      </h2>
      <p className="text-md pb-5   text-center lg:max-w-[800px] mx-auto">
        Discover articles by category in a visually engaging layout. Each button
      </p>
      <div className=" flex flex-wrap gap-10  justify-center items-center">
        {categories.map((category) => (
          <Link key={category} to={`/article-by-category/${category}`}>
            <button
              data-tooltip-id="category"
              data-tooltip-content={`click to explore ${category} article`}
              href="#_"
              class="relative px-5 py-2 font-medium text-white group"
            >
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-500 group-hover:bg-blue-700 group-hover:skew-x-12"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue-700 group-hover:bg-blue-500 group-hover:-skew-x-12"></span>

              <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
              <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-blue-400 -rotate-12"></span>
              <span class="relative">{category}</span>
            </button>
            <Tooltip id="category"></Tooltip>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryLink;
