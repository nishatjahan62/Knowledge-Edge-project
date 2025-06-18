import React, { use } from "react";

const ArticleList = ({ ArticlePostedPromise }) => {
  const articles = use(ArticlePostedPromise);
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center pb-5">
         <span>{articles.length>1?"Articles": "Article" }</span>  added my me: {articles.length}
        </h2>
        <div className="overflow-x-auto bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl  ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="font-bold">#</th>
                <th className="font-bold">articles</th>
                <th className="font-bold">category</th>
                <th className="font-bold">publication date</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td className="lg:text-lg font-medium">
                    {" "}
                    {article.title} 
                  
                  </td>
                  <td className="lg:text-lg font-medium"> {article.category}</td>
                  <td className="lg:text-lg font-medium">{article.publication_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
