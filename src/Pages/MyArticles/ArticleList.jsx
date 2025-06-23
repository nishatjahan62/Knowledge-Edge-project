import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { DeleteArticleById } from "../../services/DeleteArticleApi";
import UpdateArticle from "../UpdateArticle/UpdateArticle";

const ArticleList = ({ ArticlePostedPromise }) => {
  const articles = use(ArticlePostedPromise);
  const [article, setArticle] = useState(articles);

  //For Modal:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [SelectedArticle, setSelectedArticle] = useState(null);

  // Delete button functionality:
  const handleDelete = (id) => {
    Swal.fire({
      title: "Want to Delete?",
      text: "Are you sure you want to delete this Article? ",
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

  // modal functionality:
  const handleEdit = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className="max-h-screen">
      <h2 className="text-3xl    pt-10  font-bold text-center pb-5">
        <span>{articles.length > 1 ? "Articles" : "Article"}</span> added by me:{" "}
        {articles.length}
      </h2>
      <div className="overflow-x-auto bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl px-5 items-center">
        <table className="table">
          <thead>
            <tr>
              <th className="font-bold">#</th>
              <th className="font-bold">articles</th>
              <th className="font-bold">category</th>
              <th className="font-bold">publication date</th>{" "}
              <th className="font-bold">delete/edit</th>
            </tr>
          </thead>
          <tbody>
            {article.map((art, index) => (
              <tr key={art._id}>
                <th>{index + 1}</th>
                <td className="lg:text-lg font-medium"> {art.title}</td>
                <td className="lg:text-lg font-medium"> {art.category}</td>
                <td className="lg:text-lg font-medium">
                  {art.publication_date}
                </td>
                <td className="flex items-center justify-center">
                  <button
                    onClick={() => handleDelete(art._id)}
                    className="cursor-pointer "
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  /
                  <button
                    onClick={() => handleEdit(art)}
                    className="cursor-pointer pl-1"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="  bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white rounded-2xl px-10 relative pb-10 -top-40">
            <button
              onClick={closeModal}
              className="absolute top-5 right-10 text-red-600 font-bold text-xl "
            >
            Close 
            </button>
            <UpdateArticle
              article={SelectedArticle}
              onClose={closeModal}
              onUpdate={(updateArticle)=>{
                const updatedList = article.map((art)=>art._id === updateArticle._id?updateArticle:art)
                setArticle(updatedList)
                closeModal()
              }}
            ></UpdateArticle>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
