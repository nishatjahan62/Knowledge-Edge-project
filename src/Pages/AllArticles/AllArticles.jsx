import React, { useEffect, useState } from "react";
import ArticleCard from "../../Components/Hero/ArticleCard";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      let url = "http://localhost:5000/all-articles";
      if (filter && filter.toLowerCase() !== "select category") {
        url += `?category=${encodeURIComponent(filter)}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data);
    };
    fetchArticles();
  }, [filter]);

  return (
    <div className="pt-20  mt-15  lg:mx-20 mx-5 ">
      <h2 className="text-4xl font-bold text-center pb-8 text-blue-700">
        Explore all Articles
      </h2>
      <div className="mb-5">
        <label htmlFor="category" className="font-semibold pr-3 text-xl ">
          Select Category :
        </label>
        <select
          className="border-dashed border-2 cursor-pointer rounded-2xl px-2 py-1 border-blue-600 font-[poppins] "
          name=""
          id="category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>

          <option>Technology</option>
          <option>Science</option>
          <option>Education</option>
          <option>Environment</option>
          <option>Art</option>
          <option>Health</option>
          <option>Philosophy</option>
          <option>culture</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  sm:grid-cols-2 gap-6 w-full justify-center items-center pb-10">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article}></ArticleCard>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
