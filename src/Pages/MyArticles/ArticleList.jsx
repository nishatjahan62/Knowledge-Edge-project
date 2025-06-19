import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { DeleteArticleById } from "../../services/DeleteArticleApi";

const ArticleList = ({ ArticlePostedPromise }) => {
  const articles = use(ArticlePostedPromise);
  const [article, setArticle] = useState(articles);
// Delete button functionality:
  const handleDelete = (id) => {
    Swal.fire({
      title: "Want to Delete?",
      text: "Are you sure you want you want to delete this Article? ",
      icon: "warning",
      draggable: true,
      showCancelButton: true,

      confirmButtonColor: "blue",
      confirmButtonText: "Delete",
      cancelButtonColor: "red",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        DeleteArticleById(id).then((data) => {
          if (data.deletedCount > 0) {
            const update = article.filter((art) => art._id !== id);
            setArticle(update);
            toast.success("Article deleted successfully");
          } else {
            toast.error("Failed to delete Article");
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center pb-5">
          <span>{articles.length > 1 ? "Articles" : "Article"}</span> added by
          me: {articles.length}
        </h2>
        <div className="overflow-x-auto bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl px-5 items-center">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th className="font-bold">#</th>
                <th className="font-bold">articles</th>
                <th className="font-bold">category</th>
                <th className="font-bold">publication date</th>{" "}
                <th className="font-bold">delete/edit</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={article._id}>
                  <th>{index + 1}</th>
                  <td className="lg:text-lg font-medium"> {article.title}</td>
                  <td className="lg:text-lg font-medium">
                    {" "}
                    {article.category}
                  </td>
                  <td className="lg:text-lg font-medium">
                    {article.publication_date}
                  </td>
                  <td className="flex items-center justify-center">
                    {" "}
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="cursor-pointer "
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>{" "}
                    /
                    <Link to={`/update-article/${article._id}`}>
                      {" "}
                      <button className="cursor-pointer pl-1">
                        {" "}
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>
                  </td>
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
